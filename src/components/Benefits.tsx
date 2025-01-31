const benefits = [
  {
    title: "Streamlined Operations",
    description: "Automate routine tasks and reduce administrative overhead with our intelligent system.",
  },
  {
    title: "Enhanced Member Experience",
    description: "Provide seamless service to your members with our user-friendly interface.",
  },
  {
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and reporting tools.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose MultiSacco?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;