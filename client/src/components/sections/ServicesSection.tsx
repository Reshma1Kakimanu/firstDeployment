import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';

interface ServiceCardProps {
  imageSrc: string;
  iconClass: string;
  title: string;
  description: string;
  index: number;
  id: string;
  hasDemo?: boolean;
}

const ServiceCard = ({ imageSrc, iconClass, title, description, index, id, hasDemo = false }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate animation delay based on index
  const animDelay = index * 100;
  
  return (
    <div 
      className="service-card group futuristic-glow"
      style={{ animationDelay: `${animDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Animated gradient overlay on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-60' : ''}`}
        ></div>
        
        {/* Icon that moves up on hover */}
        <div 
          className={`absolute bottom-0 left-0 w-14 h-14 royal-gradient rounded-tr-xl flex items-center justify-center transform transition-transform duration-500 ${isHovered ? '-translate-y-2' : ''}`}
        >
          <i className={`${iconClass} text-white text-xl`}></i>
        </div>
      </div>
      
      <div className="p-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-primary font-medium mr-2">Coming Soon</span>
            <div className="ml-2 w-5 h-5 rounded-full royal-gradient flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-90">
              <i className="fas fa-arrow-right text-white text-xs"></i>
            </div>
          </div>
          
          {hasDemo && (
            <Link to={`/booking/${id}`}>
              <span className="text-xs bg-primary text-white px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors cursor-pointer inline-block">
                Try Demo
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    id: "doctor",
    imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-user-md",
    title: "Doctor Appointments",
    description: "Book appointments with specialists without waiting in long queues. Save time and focus on your health.",
    hasDemo: true
  },
  {
    id: "salon",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-cut",
    title: "Salon & Spa",
    description: "Schedule your beauty treatments and spa sessions at your convenience. No more waiting.",
    hasDemo: false
  },
  {
    id: "legal",
    imageSrc: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-balance-scale",
    title: "Legal Consultations",
    description: "Connect with lawyers and legal experts. Schedule consultations that respect your time.",
    hasDemo: false
  },
  {
    id: "education",
    imageSrc: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-graduation-cap",
    title: "Educational Consultants",
    description: "Schedule meetings with educational experts and counselors for career guidance and admissions advice.",
    hasDemo: false
  },
  {
    id: "home",
    imageSrc: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-home",
    title: "Home Services",
    description: "Book appointments for plumbers, electricians, housekeeping, and other home services with ease.",
    hasDemo: false
  },
  {
    id: "fitness",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-dumbbell",
    title: "Fitness & Wellness",
    description: "Schedule sessions with personal trainers, nutritionists, and wellness coaches on your schedule.",
    hasDemo: false
  }
];

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white"></div>
      
      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(circle, #7922FF 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-5">Book Appointments For Any Service</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-5">
            AppointKaro brings multiple service categories under one platform, revolutionizing how India books appointments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} 
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <ServiceCard
                index={index}
                id={service.id}
                imageSrc={service.imageSrc}
                iconClass={service.iconClass}
                title={service.title}
                description={service.description}
                hasDemo={service.hasDemo}
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
          <a
            href="#notify"
            className="btn-hover-effect relative inline-flex items-center group shadow-lg"
          >
            <span className="relative z-10">Get Early Access</span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
