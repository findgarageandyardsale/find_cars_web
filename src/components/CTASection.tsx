import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pink-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/10 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="relative inline-block">
          <div className="text-6xl mb-6 animate-bounce">🚘</div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
          Save Time & Energy – Buy or Sell Vehicles the Smart Way!
        </h2>
        <h4 className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Convenient, secure, and hassle-free.
        </h4>


        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Download <span className="font-bold text-blue-300">Find Car Sales</span> today and discover your next great deal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-2xl">📱</span>
            Download on App Store
          </Button>
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-2xl">🤖</span>
            Get it on Google Play
          </Button>
        </div>

        <div className="space-y-4 pt-8">
          <p className="text-sm text-gray-400">
            Free to download • Available on iOS and Android
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No registration required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>100% free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Instant notifications</span>
            </div>
          </div>
        </div>

        {/* Download stats */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-300">4.8★</div>
              <div className="text-sm text-gray-300">App Store Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-300">10K+</div>
              <div className="text-sm text-gray-300">Downloads</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-300">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}