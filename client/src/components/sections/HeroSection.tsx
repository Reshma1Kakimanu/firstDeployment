import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Use our custom scroll animation hook
  useScrollAnimation();
  
  useEffect(() => {
    // Add scroll listener for parallax effect on hero image
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Animated gradient background effects */}
      <div className="blur-circle animated-gradient w-64 h-64 -top-32 -left-32 bg-purple-500"></div>
      <div className="blur-circle animated-gradient w-96 h-96 top-96 -right-48 bg-blue-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 section-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Book Appointments,<br/>
              <span className="gradient-text">Save Time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl reveal">
              AppointKaro is revolutionizing how India books appointments for doctors, salons, lawyers, and more. No more waiting in lines.
            </p>
            
            <div className="glass-card p-4 rounded-xl mb-8 inline-block reveal">
              <p className="font-medium">
                <span className="text-primary font-bold">Save 1 year 3 months</span> of your life by avoiding unnecessary waiting time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 reveal">
              <a
                href="#notify"
                className="btn-hover-effect px-8 py-4 text-white text-lg font-medium rounded-xl text-center shadow-lg"
              >
                <i className="fas fa-bell mr-2"></i> Get Notified
              </a>
              <a
                href="#learn-more"
                className="elegant-btn text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div ref={parallaxRef} className="relative z-10">
              <div className="parallax">
                <img
                  src="https://images.unsplash.com/photo-1604881989758-0b5435a4b539?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=600&q=80"
                  alt="AppointKaro interface preview"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 -right-5 bg-white py-2 px-4 rounded-xl shadow-lg transform rotate-3 animate-float">
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
