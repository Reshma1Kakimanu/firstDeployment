import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  imageSrc: string;
  iconClass: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imageSrc, iconClass, title, description }: ServiceCardProps) => (
  <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
    <div className="h-48 overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <i className={`${iconClass} text-primary text-xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="pt-2">
        <span className="text-primary font-medium">Coming Soon</span>
      </div>
    </div>
  </div>
);

const services = [
  {
    imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-user-md",
    title: "Doctor Appointments",
    description: "Book appointments with specialists without waiting in long queues. Save time and focus on your health."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-cut",
    title: "Salon & Spa",
    description: "Schedule your beauty treatments and spa sessions at your convenience. No more waiting."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-balance-scale",
    title: "Legal Consultations",
    description: "Connect with lawyers and legal experts. Schedule consultations that respect your time."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-graduation-cap",
    title: "Educational Consultants",
    description: "Schedule meetings with educational experts and counselors for career guidance and admissions advice."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-home",
    title: "Home Services",
    description: "Book appointments for plumbers, electricians, housekeeping, and other home services with ease."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    iconClass: "fas fa-dumbbell",
    title: "Fitness & Wellness",
    description: "Schedule sessions with personal trainers, nutritionists, and wellness coaches on your schedule."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Book Appointments For Any Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AppointKaro brings multiple service categories under one platform, revolutionizing how India books appointments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#notify"
            className="btn-hover-effect px-8 py-4 bg-primary text-white text-lg font-medium rounded-lg transition-all duration-300 inline-block shadow-lg shadow-primary/20"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}
