export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about AppointKaro? We're here to help you understand our platform better.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-xl bg-light-dark p-8 h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-envelope text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For inquiries and information, reach out to us via email.
              </p>
              <a href="mailto:ceo@appointkaro.com" className="text-primary font-medium hover:underline">ceo@appointkaro.com</a>
            </div>
          </div>
          
          <div className="md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="rounded-xl bg-light-dark p-8 h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-map-marker-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Our headquarters is located in the heart of innovation.
              </p>
              <p className="text-dark">
                Mumbai, Maharashtra<br/>
                India
              </p>
            </div>
          </div>
          
          <div className="md:w-1/3 px-4">
            <div className="rounded-xl bg-light-dark p-8 h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-share-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest news and announcements.
              </p>
              <div className="flex space-x-4">
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
      </div>
    </section>
  );
}
