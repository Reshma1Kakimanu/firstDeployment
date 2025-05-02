import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  // Use our custom scroll animation hook
  useScrollAnimation();
  
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state for animations to start
    setIsLoaded(true);
    
    // Add mousemove parallax effect for the background elements
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const blobs = heroRef.current.querySelectorAll('.blob');
      const particles = heroRef.current.querySelectorAll('.particle');
      const hero = heroRef.current.querySelector('.hero-image');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      // Move blob backgrounds
      blobs.forEach((blob, index) => {
        const speed = 1 + index * 0.5;
        const x = (0.5 - mouseX) * speed * 40;
        const y = (0.5 - mouseY) * speed * 40;
        (blob as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
      
      // Move particles slightly
      particles.forEach((particle, index) => {
        const speed = 0.5 + (index % 5) * 0.1;
        const x = (0.5 - mouseX) * speed * 20;
        const y = (0.5 - mouseY) * speed * 20;
        (particle as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
      
      // Slight movement for the hero image - 3D effect
      if (hero) {
        const x = (0.5 - mouseX) * -10;
        const y = (0.5 - mouseY) * -10;
        (hero as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create the timed alert for the time-saving calculator - only once per visit
    const timeoutId = setTimeout(() => {
      // Check if user has already seen the alert in this session
      const hasSeenAlert = localStorage.getItem('appointKaro_alertShown');
      
      if (!hasSeenAlert) {
        // Mark as shown for this session
        localStorage.setItem('appointKaro_alertShown', 'true');
        
        const alert = document.createElement('div');
        alert.className = 'fixed bottom-4 right-4 z-50 glass-card p-4 shadow-2xl max-w-sm shimmering-border transition-all duration-500 transform translate-y-full opacity-0';
        alert.innerHTML = `
          <div class="flex items-start p-1">
            <div class="flex-shrink-0 p-2 bg-primary/10 rounded-full">
              <i class="fas fa-clock text-primary text-xl"></i>
            </div>
            <div class="ml-3 flex-1">
              <h3 class="text-sm font-medium text-gray-900">Curious about your time savings?</h3>
              <div class="mt-1 text-sm text-gray-500">
                <p>Find out how many hours of your life you could save with AppointKaro!</p>
              </div>
              <div class="mt-3 flex">
                <button onclick="document.getElementById('time-calculator').scrollIntoView({behavior: 'smooth'}); this.parentNode.parentNode.parentNode.remove();" class="text-xs text-white bg-primary px-3 py-1 rounded-full cursor-pointer">
                  Calculate Now
                </button>
              </div>
            </div>
            <button type="button" class="ml-2 text-gray-400 hover:text-gray-500" onclick="this.parentNode.parentNode.remove()">
              <i class="fas fa-times"></i>
            </button>
          </div>
        `;
        document.body.appendChild(alert);
        
        // Animate the alert in
        setTimeout(() => {
          alert.classList.remove('translate-y-full', 'opacity-0');
        }, 100);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
          alert.classList.add('translate-y-full', 'opacity-0');
          setTimeout(() => {
            alert.remove();
          }, 500);
        }, 10000);
      }
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
    >
      {/* Futuristic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-secondary/5"></div>
      
      {/* Animated background elements with royal gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob absolute top-20 -left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-5xl opacity-20 bg-primary animate-blob"></div>
        <div className="blob absolute -bottom-20 left-1/3 w-80 h-80 rounded-full mix-blend-multiply filter blur-5xl opacity-20 bg-accent animate-blob animation-delay-2000"></div>
        <div className="blob absolute top-1/3 -right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-5xl opacity-20 bg-secondary animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Subtle gradient background instead of grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      </div>
      
      {/* Moving particles effect - more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, index) => (
          <div 
            key={index}
            className={`particle absolute rounded-full ${index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-accent'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              opacity: 0.3 + Math.random() * 0.5,
              animation: `particleFloat ${Math.random() * 20 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`md:w-1/2 max-w-2xl transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Book Appointments,<br/>
              <span className="royal-gradient-text">Save Time</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              AppointKaro is revolutionizing how India books appointments for doctors, salons, lawyers, and more. No more waiting in lines.
            </p>
            
            <div className="glass-card p-4 mb-8 inline-block border-l-4 border-primary">
              <p className="font-medium">
                <span className="text-primary font-bold">Save 1 year 3 months</span> of your life by avoiding unnecessary waiting time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#notify"
                className="btn-hover-effect text-center futuristic-glow"
              >
                <i className="fas fa-bell mr-2"></i> Get Notified
              </a>
              <a
                href="#time-calculator"
                className="elegant-btn text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('time-calculator')?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative z-10">
              {/* Decorative futuristic frame */}
              <div className="absolute -z-10 inset-0 rounded-xl shimmering-border"></div>
              <div className="absolute -z-10 -inset-3 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-3xl blur-sm"></div>
              
              {/* Animated geometric patterns */}
              <div className="absolute -z-10 w-32 h-32 bg-primary/10 rounded-full blur-sm -left-10 -top-10 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -z-10 w-24 h-24 bg-secondary/10 rounded-full blur-sm -right-5 -bottom-5 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -z-10 w-20 h-20 bg-accent/10 rounded-full blur-sm right-20 -top-5 animate-pulse" style={{ animationDuration: '5s' }}></div>
              
              <div className="hero-image relative p-1 bg-white rounded-xl shadow-2xl overflow-hidden">
                <img
                  src="/appointment-calendar.svg"
                  alt="Calendar with appointment scheduling interface"
                  className="rounded-lg w-full h-auto object-contain shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-image-original.png";
                  }}
                />
                
                {/* Technical blueprint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 pointer-events-none"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '7s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '1.5s', animationDuration: '8s' }}></div>
              
              {/* "Coming Soon" badge */}
              <div className="absolute top-4 right-4 royal-gradient text-white py-2 px-5 rounded-full shadow-xl transform rotate-2 z-20">
                <span className="font-bold">Coming Soon!</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#time-calculator" 
            className="inline-block scroll-indicator text-primary cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('time-calculator')?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
