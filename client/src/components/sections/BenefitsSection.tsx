interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => (
  <div className="bg-light-dark p-8 rounded-xl hover:shadow-lg transition-all duration-300">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
      <i className={`${icon} text-primary text-2xl`}></i>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const benefits = [
  {
    icon: "fas fa-clock",
    title: "Save Precious Time",
    description: "No more waiting in lines or reception areas. Book appointments and arrive just in time for your service."
  },
  {
    icon: "fas fa-calendar-check",
    title: "All Services in One App",
    description: "From healthcare to home services, access all appointment booking needs through a single platform."
  },
  {
    icon: "fas fa-bell",
    title: "Smart Reminders",
    description: "Never miss an appointment with our intelligent notification system that sends timely reminders."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Intuitive Interface",
    description: "Our elegant, user-friendly design makes booking appointments a breeze for everyone."
  },
  {
    icon: "fas fa-star",
    title: "Verified Providers",
    description: "Access a network of verified service providers with ratings and reviews from real customers."
  },
  {
    icon: "fas fa-lock",
    title: "Secure & Private",
    description: "Your personal information and appointment details are always protected with enterprise-grade security."
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose AppointKaro?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're bringing a revolution in appointment booking with features designed to save your time and enhance your experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
