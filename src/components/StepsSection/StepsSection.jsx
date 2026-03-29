// src/components/StepsSection.jsx
const StepsSection = () => {
  const steps = [
    { number: "01", title: "Choose Tool", desc: "Browse our premium AI tools" },
    { number: "02", title: "Add to Cart", desc: "Select and add to your cart" },
    { number: "03", title: "Instant Access", desc: "Get immediate access after checkout" },
  ];

  return (
    <div id="steps" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get Started in 3 Simple Steps</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 mx-auto bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-4xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;