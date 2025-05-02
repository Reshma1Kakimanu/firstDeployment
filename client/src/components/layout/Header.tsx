import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300", 
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-heading text-dark">
            <span className="gradient-text">Appoint</span>Karo
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-10">
          <a href="#home" className="font-medium text-gray-600 hover:text-primary transition-colors">Home</a>
          <a href="#services" className="font-medium text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="#about" className="font-medium text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#benefits" className="font-medium text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <a href="#contact" className="font-medium text-gray-600 hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <button 
          className="md:hidden text-dark focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        <div className="hidden md:block">
          <a href="#notify" className="btn-hover-effect px-6 py-3 bg-primary text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-primary/20">
            Notify Me
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden bg-white absolute w-full shadow-lg transition-all duration-300 ease-in-out", 
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
          <a href="#home" className="py-2 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Home</a>
          <a href="#services" className="py-2 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Services</a>
          <a href="#about" className="py-2 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>About</a>
          <a href="#benefits" className="py-2 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Benefits</a>
          <a href="#contact" className="py-2 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Contact</a>
          <a 
            href="#notify" 
            className="btn-hover-effect py-3 bg-primary text-white font-medium rounded-lg text-center transition-all duration-300"
            onClick={closeMobileMenu}
          >
            Notify Me
          </a>
        </div>
      </div>
    </header>
  );
}
