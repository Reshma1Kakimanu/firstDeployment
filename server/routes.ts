import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Subscriber API endpoint
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const subscriber = insertSubscriberSchema.parse(req.body);
      
      // Add timestamp
      const subscriberWithTimestamp = {
        ...subscriber,
        createdAt: new Date().toISOString(),
      };
      
      // Store the subscriber
      const result = await storage.createSubscriber(subscriberWithTimestamp);
      
      return res.status(201).json({
        status: "success",
        message: "Successfully subscribed to the waitlist",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          status: "error",
          message: validationError.message
        });
      }
      
      return res.status(500).json({
        status: "error",
        message: "An unexpected error occurred"
      });
    }
  });
  
  // Handle SPA routes
  app.get(['/booking-demo', '/booking/*'], (req, res, next) => {
    // Let Vite handle routing for the React app
    next();
  });

  const httpServer = createServer(app);
  return httpServer;
}
