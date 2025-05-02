import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  interest: z.string().min(1, {
    message: "Please select your primary interest.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function NotifySection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      interest: '',
    },
  });

  const subscribeUser = useMutation({
    mutationFn: (data: FormData) => {
      return apiRequest('POST', '/api/subscribe', data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Thank you for joining our waitlist! We will notify you when AppointKaro launches.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    subscribeUser.mutate(data);
  };

  const handleInterestChange = (value: string) => {
    setValue('interest', value);
  };

  return (
    <section id="notify" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-10 text-white flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-bell text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold font-heading">Stay Updated</h3>
                <p className="mt-2">Be the first to know when we launch</p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-10">
              <h3 className="text-2xl font-bold font-heading mb-4">Join Our Waitlist</h3>
              <p className="text-gray-600 mb-6">
                Sign up to receive updates about AppointKaro's launch and get early access to our platform.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm interested in</Label>
                  <Select onValueChange={handleInterestChange}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition">
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor">Doctor Appointments</SelectItem>
                      <SelectItem value="salon">Salon & Spa</SelectItem>
                      <SelectItem value="legal">Legal Consultations</SelectItem>
                      <SelectItem value="education">Educational Consultants</SelectItem>
                      <SelectItem value="home">Home Services</SelectItem>
                      <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                      <SelectItem value="all">All Services</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hover-effect w-full px-6 py-6 bg-primary text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Notify Me"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
