export default function CtaSection() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Revolutionize Your Appointment Experience?</h2>
            
            <p className="text-xl mb-8 text-white/90">
              AppointKaro is launching soon. Be among the first to experience the future of appointment booking in India.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#notify" 
                className="btn-hover-effect px-8 py-4 bg-white text-primary text-lg font-medium rounded-lg transition-all duration-300 text-center shadow-lg"
              >
                <i className="fas fa-bell mr-2"></i> Get Early Access
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-primary transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=700&q=80" 
                alt="AppointKaro mobile app preview" 
                className="rounded-3xl shadow-2xl border-8 border-white transform rotate-3 animate-float"
              />
              <div className="absolute -top-6 -right-6 bg-white text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg rotate-12">
                Coming Soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
