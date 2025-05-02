export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="Team working on AppointKaro" 
              className="rounded-xl shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Revolutionizing Appointments in India</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              AppointKaro is on a mission to transform how Indians book appointments. Our platform connects service providers with customers, eliminating wait times and streamlining scheduling.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Time-Saving Solution</h3>
                  <p className="text-gray-600">Our platform helps you reclaim the 1 year and 3 months typically wasted waiting for appointments.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Multiple Services</h3>
                  <p className="text-gray-600">From healthcare to home services, all your appointment needs are covered under one platform.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">User-Friendly Experience</h3>
                  <p className="text-gray-600">Elegant, intuitive interface designed for everyone, regardless of tech-savviness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
