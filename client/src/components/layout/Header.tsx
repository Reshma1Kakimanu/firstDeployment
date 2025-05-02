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
      scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-heading">
            <span className="text-primary">Appoint</span>Karo
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="font-medium text-gray-600 hover:text-primary transition-colors">Home</a>
          <a href="#services" className="font-medium text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="#about" className="font-medium text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#benefits" className="font-medium text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <a href="#contact" className="font-medium text-gray-600 hover:text-primary transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="#notify" className="btn-hover-effect">
            Notify Me
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden bg-white w-full border-t overflow-hidden transition-all duration-300", 
          mobileMenuOpen ? "max-h-80 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#home" className="py-2 px-1 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Home</a>
          <a href="#services" className="py-2 px-1 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Services</a>
          <a href="#about" className="py-2 px-1 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>About</a>
          <a href="#benefits" className="py-2 px-1 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Benefits</a>
          <a href="#contact" className="py-2 px-1 font-medium text-gray-600 hover:text-primary transition-colors" onClick={closeMobileMenu}>Contact</a>
          <div className="pt-2 pb-2">
            <a 
              href="#notify" 
              className="btn-hover-effect inline-block w-full text-center"
              onClick={closeMobileMenu}
            >
              Notify Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
