import { useEffect, useRef, useState } from 'react';

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

const Benefit = ({ icon, title, description, index, isVisible }: BenefitProps) => {
  // Calculate animation delay based on index
  const animDelay = 300 + (index * 150);
  
  return (
    <div 
      className={`glass-card p-8 relative overflow-hidden futuristic-glow group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ transitionDelay: `${animDelay}ms` }}
    >
      {/* Background decoration - pulsing gradient circle */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Icon with animated background */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 royal-gradient rounded-lg flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:royal-gradient-text transition-colors duration-300 relative z-10">{title}</h3>
      <p className="text-gray-600 relative z-10">
        {description}
      </p>
      
      {/* Decorative bottom corner */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-primary/20 to-transparent"></div>
    </div>
  );
};

const benefits = [
  {
    icon: "fas fa-clock",
    title: "Save Precious Time",
    description: "No more waiting in lines or reception areas. Book appointments and arrive just in time for your service."
  },
  {
    icon: "fas fa-calendar-check",
    title: "All Services in One App",
    description: "From healthcare to home services, access all appointment booking needs through a single platform."
  },
  {
    icon: "fas fa-bell",
    title: "Smart Reminders",
    description: "Never miss an appointment with our intelligent notification system that sends timely reminders."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Intuitive Interface",
    description: "Our elegant, user-friendly design makes booking appointments a breeze for everyone."
  },
  {
    icon: "fas fa-star",
    title: "Verified Providers",
    description: "Access a network of verified service providers with ratings and reviews from real customers."
  },
  {
    icon: "fas fa-lock",
    title: "Secure & Private",
    description: "Your personal information and appointment details are always protected with enterprise-grade security."
  }
];

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Animated background with futuristic patterns */}
      <div className="absolute inset-0 bg-gradient-to-bl from-white via-primary/5 to-white"></div>
      
      {/* Background decorations */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/2 blur-3xl"></div>
      
      {/* Futuristic circuit-like grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: `
            linear-gradient(to right, #7922FF 1px, transparent 1px),
            linear-gradient(to bottom, #7922FF 1px, transparent 1px),
            radial-gradient(circle at center, #7922FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 200px 200px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-5">Why Choose AppointKaro?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5">
            We're bringing a revolution in appointment booking with features designed to save your time and enhance your experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* Stats/Highlights Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="glass-card p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full royal-gradient">
              <i className="fas fa-clock text-white"></i>
            </div>
            <p className="royal-gradient-text text-4xl font-bold mb-2">80%</p>
            <p className="text-gray-600">Reduction in Wait Time</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full royal-gradient">
              <i className="fas fa-user-check text-white"></i>
            </div>
            <p className="royal-gradient-text text-4xl font-bold mb-2">2M+</p>
            <p className="text-gray-600">Expected Users by 2025</p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full royal-gradient">
              <i className="fas fa-building text-white"></i>
            </div>
            <p className="royal-gradient-text text-4xl font-bold mb-2">100K+</p>
            <p className="text-gray-600">Service Providers Onboarding</p>
          </div>
        </div>
      </div>
    </section>
  );
}
