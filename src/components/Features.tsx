import { Shield, Users, ChartBar, Globe } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Member Management",
    description: "Efficiently manage member records, contributions, and communications across multiple SACCOs.",
  },
  {
    icon: <ChartBar className="h-8 w-8 text-primary" />,
    title: "Financial Tracking",
    description: "Real-time financial monitoring and reporting for better decision-making.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Secure Operations",
    description: "Bank-grade security measures to protect your SACCO data and transactions.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Global Access",
    description: "Access your SACCO management system from anywhere, anytime.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features for Modern SACCOs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;