import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  const benefits = [
    {
      icon: "🚘",
      title: "Users Friendly for Car buyers and sellers",
      description: "Buy easily – Sell quickly",
      color: "bg-blue-500"
    },
    {
      icon: "📍",
      title: "Location-based results",
      description: "Find nearby deals",
      color: "bg-blue-600"
    },
    {
      icon: "⚡",
      title: "Fast listings & quick sales",
      description: "List in minutes",
      color: "bg-blue-700"
    },
    {
      icon: "🤝",
      title: "Direct connections",
      description: "Connect buyers & sellers",
      color: "bg-blue-800"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-sm font-medium text-blue-700">Why Choose Us</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-blue-900">
            About the App
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Skip the endless browsing and confusing marketplaces. With <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Find Car Sales</span>, you get a <span className="font-semibold bg-yellow-50 px-2 py-1 rounded">dedicated local platform</span> for car buying and selling.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a buyer searching for an affordable car or a seller looking to reach local buyers, our app makes it easy to connect.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Find Car Sales?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                <CardContent className="p-6 text-center space-y-4 relative overflow-hidden">
                  {/* Background on hover */}
                  <div className={`absolute inset-0 ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${benefit.color} flex items-center justify-center text-2xl shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>

                    <h4 className="font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats counter */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-gray-600">Listed Cars</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">5K+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}