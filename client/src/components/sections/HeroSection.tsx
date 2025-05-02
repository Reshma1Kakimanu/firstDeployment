import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Book Appointments,<br/>
              <span className="gradient-text">Save Time</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              AppointKaro is revolutionizing how India books appointments for doctors, salons, lawyers, and more. No more waiting in lines.
            </p>
            
            <div className="bg-dark text-white p-4 rounded-lg shadow-lg mb-8 inline-block">
              <p className="font-medium">
                <span className="text-secondary font-bold">Save 1 year 3 months</span> of your life by avoiding unnecessary waiting time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#notify"
                className="btn-hover-effect px-8 py-4 bg-primary text-white text-lg font-medium rounded-lg transition-all duration-300 text-center shadow-lg shadow-primary/20"
              >
                <i className="fas fa-bell mr-2"></i> Get Notified
              </a>
              <a
                href="#learn-more"
                className="px-8 py-4 border-2 border-primary text-primary text-lg font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="animate-float relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80"
                alt="AppointKaro interface preview"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
