export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Download the app",
      description: "Get Find Car Sales from your app store",
      icon: "📱"
    },
    {
      number: "2", 
      title: "Search or List",
      description: "Search for cars near you or list your own",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Connect directly",
      description: "Connect directly with buyers/sellers",
      icon: "🤝"
    },
    {
      number: "4",
      title: "Buy or Sell",
      description: "Buy or sell your vehicle — quick and simple!",
      icon: "🚗"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with Find Car Sales is simple. Follow these four easy steps to buy or sell your next vehicle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:bg-blue-700 transition-colors">
                  {step.number}
                </div>
                <div className="absolute -top-2 -right-2 text-3xl">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}