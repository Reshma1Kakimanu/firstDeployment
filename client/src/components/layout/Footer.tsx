import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold font-heading mb-6">
              <span className="text-primary">Appoint</span>Karo
            </h2>
            <p className="mb-6 text-gray-400">
              Revolutionizing appointment booking in India. Save time, book with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Doctor Appointments</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Salon & Spa</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Legal Consultations</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Educational Consultants</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Home Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">ceo@appointkaro.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-globe text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">www.appointkaro.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AppointKaro. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
