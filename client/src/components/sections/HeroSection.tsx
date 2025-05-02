import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  // Use our custom scroll animation hook
  useScrollAnimation();
  
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add mousemove parallax effect for the background blobs
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const blobs = heroRef.current.querySelectorAll('.blob');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      blobs.forEach((blob, index) => {
        const speed = 1 + index * 0.5;
        const x = (0.5 - mouseX) * speed * 40;
        const y = (0.5 - mouseY) * speed * 40;
        (blob as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden relative bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute top-20 -left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-5xl opacity-20 bg-primary animate-blob"></div>
        <div className="blob absolute -bottom-20 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-5xl opacity-20 bg-secondary animate-blob animation-delay-2000"></div>
        <div className="blob absolute top-1/3 -right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-5xl opacity-20 bg-primary/70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Moving particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-primary/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animation: `particleFloat ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Book Appointments,<br/>
              <span className="gradient-text">Save Time</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              AppointKaro is revolutionizing how India books appointments for doctors, salons, lawyers, and more. No more waiting in lines.
            </p>
            
            <div className="bg-primary/10 p-4 rounded-lg mb-8 inline-block border-l-4 border-primary">
              <p className="font-medium">
                <span className="text-primary font-bold">Save 1 year 3 months</span> of your life by avoiding unnecessary waiting time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#notify"
                className="btn-hover-effect text-center"
              >
                <i className="fas fa-bell mr-2"></i> Get Notified
              </a>
              <a
                href="#learn-more"
                className="elegant-btn text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              {/* Decorative geometric shapes */}
              <div className="absolute -z-10 w-2/3 h-2/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl -left-6 -top-6 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -z-10 w-2/3 h-2/3 bg-gradient-to-bl from-secondary/20 to-transparent rounded-3xl -right-6 -bottom-6 animate-pulse" style={{ animationDuration: '5s' }}></div>
              
              <img
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Mobile app appointment scheduling interface"
                className="rounded-lg shadow-xl mx-auto md:ml-auto relative z-10"
              />
              
              {/* "Coming Soon" badge */}
              <div className="absolute top-4 right-4 bg-white py-2 px-4 rounded-full shadow-lg z-20">
                <span className="text-primary font-bold">Coming Soon!</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#services" className="inline-block scroll-indicator">
            <i className="fas fa-chevron-down text-primary text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
