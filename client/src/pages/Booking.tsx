import { useEffect, useState } from 'react';
import { useLocation, useRoute, useParams, Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

// Service data
const serviceData = {
  doctor: {
    name: "Doctor Appointments",
    icon: "fas fa-user-md",
    subServices: [
      { id: "general", name: "General Physician", price: "₹500", available: true },
      { id: "pediatric", name: "Pediatrician", price: "₹800", available: true },
      { id: "orthopedic", name: "Orthopedic Specialist", price: "₹1,200", available: false },
      { id: "dermatologist", name: "Dermatologist", price: "₹1,000", available: true },
      { id: "cardiologist", name: "Cardiologist", price: "₹1,500", available: true },
    ],
    timeSlots: [
      { id: "morning", label: "Morning (9AM - 12PM)", slots: ["9:00 AM", "10:00 AM", "11:00 AM"] },
      { id: "afternoon", label: "Afternoon (1PM - 4PM)", slots: ["1:00 PM", "2:00 PM", "3:00 PM"] },
      { id: "evening", label: "Evening (5PM - 8PM)", slots: ["5:00 PM", "6:00 PM", "7:00 PM"] },
    ]
  }
};

export default function Booking() {
  useScrollAnimation();
  const { toast } = useToast();
  const [, params] = useRoute('/booking/:serviceId');
  const serviceId = params?.serviceId || '';
  const service = serviceData[serviceId as keyof typeof serviceData];
  
  const [step, setStep] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  // If service doesn't exist, redirect to home
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    if (!service) {
      setLocation('/');
    }
    
    // Set today's date as default
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
  }, [service, setLocation]);
  
  const handleContinue = () => {
    if (step === 1 && !selectedSubService) {
      toast({
        title: "Please select a service",
        description: "You need to select a service to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && (!selectedDate || !selectedTimeSlot)) {
      toast({
        title: "Please select date and time",
        description: "You need to select both date and time to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 3 && (!name || !phone || !email)) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book your appointment.",
        variant: "destructive"
      });
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Show success
      toast({
        title: "Appointment Booked Successfully!",
        description: `Your appointment with ${service.name} is confirmed for ${selectedDate} at ${selectedTimeSlot}.`,
      });
      
      // Reset the form after showing success
      setTimeout(() => {
        setStep(1);
        setSelectedSubService(null);
        setSelectedTimeSlot(null);
        setName('');
        setPhone('');
        setEmail('');
      }, 2000);
    }
  };
  
  if (!service) return null;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary/5 pt-16 pb-24">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <a className="text-primary flex items-center">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Home
            </a>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 royal-gradient rounded-full flex items-center justify-center text-white">
                <i className={service.icon}></i>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold ml-4">{service.name}</h1>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-6">
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`relative flex flex-col items-center ${s < step ? 'text-primary' : s === step ? 'text-primary' : 'text-gray-400'}`}
                  >
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                        s < step ? 'bg-primary text-white' : 
                        s === step ? 'royal-gradient text-white' : 
                        'bg-gray-200'
                      }`}
                    >
                      {s}
                    </div>
                    <span className="text-xs md:text-sm">
                      {s === 1 ? 'Service' : s === 2 ? 'Schedule' : s === 3 ? 'Details' : 'Confirm'}
                    </span>
                    
                    {s < 4 && (
                      <div className={`absolute top-4 left-full w-full h-0.5 -z-10 ${s < step ? 'bg-primary' : 'bg-gray-200'}`} style={{ width: 'calc(100% - 2rem)' }}></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Step 1: Choose Sub-Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Select Specialist</h2>
                  <RadioGroup value={selectedSubService || ''} onValueChange={setSelectedSubService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.subServices.map((subService) => (
                        <div key={subService.id} className="relative">
                          <RadioGroupItem
                            value={subService.id}
                            id={subService.id}
                            className="peer sr-only"
                            disabled={!subService.available}
                          />
                          <Label
                            htmlFor={subService.id}
                            className={`flex p-4 border rounded-lg cursor-pointer ${
                              !subService.available 
                                ? 'bg-gray-100 opacity-60 cursor-not-allowed' 
                                : 'hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary/10'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="font-medium">{subService.name}</div>
                              <div className="text-sm text-primary">{subService.price}</div>
                            </div>
                            {!subService.available && (
                              <span className="text-red-500 text-xs">Not Available</span>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}
              
              {/* Step 2: Choose Time Slot */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
                  
                  <div className="mb-6">
                    <Label htmlFor="appointment-date">Date</Label>
                    <Input
                      id="appointment-date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Available Time Slots</h3>
                    <Tabs defaultValue="morning">
                      <TabsList className="w-full mb-4">
                        {service.timeSlots.map((timeSlot) => (
                          <TabsTrigger key={timeSlot.id} value={timeSlot.id} className="flex-1">
                            {timeSlot.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      
                      {service.timeSlots.map((timeSlot) => (
                        <TabsContent key={timeSlot.id} value={timeSlot.id} className="mt-0">
                          <RadioGroup value={selectedTimeSlot || ''} onValueChange={setSelectedTimeSlot}>
                            <div className="grid grid-cols-3 gap-3">
                              {timeSlot.slots.map((slot) => (
                                <div key={slot} className="relative">
                                  <RadioGroupItem
                                    value={slot}
                                    id={`slot-${slot}`}
                                    className="peer sr-only"
                                  />
                                  <Label
                                    htmlFor={`slot-${slot}`}
                                    className="flex justify-center p-2 border rounded-md cursor-pointer hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary/10"
                                  >
                                    {slot}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </RadioGroup>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                </div>
              )}
              
              {/* Step 3: Enter Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                  
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
              
              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center text-green-700 mb-2">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span className="font-semibold">Ready to confirm your appointment</span>
                    </div>
                    <p className="text-green-600 text-sm">Please review the details below and confirm your booking.</p>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h3 className="font-semibold">Appointment Summary</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{service.subServices.find(s => s.id === selectedSubService)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTimeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contact:</span>
                        <span className="font-medium">{phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fee:</span>
                        <span className="font-medium text-primary">{service.subServices.find(s => s.id === selectedSubService)?.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back
                </Button>
              ) : (
                <Button variant="outline" asChild>
                  <Link href="/">Cancel</Link>
                </Button>
              )}
              
              <Button onClick={handleContinue} className="royal-gradient text-white border-0">
                {step < 4 ? 'Continue' : 'Confirm Booking'}
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
            
            {step === 4 && (
              <div className="mt-6 text-center">
                <button 
                  onClick={() => 
                    toast({
                      title: "Calendar Invite",
                      description: "Calendar invite has been sent to your email.",
                    })
                  }
                  className="text-primary text-sm flex items-center justify-center mx-auto"
                >
                  <i className="far fa-calendar-plus mr-2"></i>
                  Add to calendar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}