export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about AppointKaro? We're here to help you understand our platform better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <i className="fas fa-envelope text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Email Us</h3>
            <p className="text-gray-600 mb-3">
              For inquiries and information, reach out to us via email.
            </p>
            <a href="mailto:ceo@appointkaro.com" className="text-primary font-medium hover:underline inline-flex items-center">
              ceo@appointkaro.com
              <i className="fas fa-arrow-right ml-2 text-xs"></i>
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <i className="fas fa-map-marker-alt text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Visit Us</h3>
            <p className="text-gray-600 mb-3">
              Our headquarters is located in the heart of innovation.
            </p>
            <p className="text-gray-800">
              Mumbai, Maharashtra<br/>
              India
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <i className="fas fa-share-alt text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <p className="text-gray-600 mb-3">
              Stay updated with our latest news and announcements.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
