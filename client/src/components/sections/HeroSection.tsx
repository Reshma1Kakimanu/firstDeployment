import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function HeroSection() {
  // Use our custom scroll animation hook
  useScrollAnimation();

  return (
    <section id="home" className="pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
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
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Team working on AppointKaro mobile app"
                className="rounded-lg shadow-xl mx-auto md:ml-auto"
              />
              
              {/* "Coming Soon" badge */}
              <div className="absolute top-4 right-4 bg-white py-2 px-4 rounded-full shadow-lg">
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
