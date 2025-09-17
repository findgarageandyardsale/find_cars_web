import { Button } from "./ui/button";
import carImage from "../assets/images/car_image.png";


export function HeroSection() {
  return (
    <section id="hero" className="relative bg-red-50 pt-24 pb-12 px-4 overflow-hidden">


      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-red-200">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">🚗 Used cars added daily</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-600 via-purple-600 to-red-800 bg-clip-text text-transparent">
                  Find Your Perfect Used Car
                </span>
                <br />
                <span className="text-red-900">
                  — Fast & Local
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover quality used cars for sale in your neighborhood, or list your own vehicle in minutes. Simple, safe, and hassle-free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="text-lg mr-2">📱</span>
                Download the App
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="mr-2">🎥</span>
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">4.8/5 rating</span>
              </div>
              <div className="text-sm text-gray-600">10k+ downloads</div>
              <div className="text-sm text-gray-600">Free to use</div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img src={carImage} alt="Car Image"
                className="object-contain"
                style={{ width: '540px', height: '540px' }} />
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

            {/* Floating icons */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <span className="text-xl">🚗</span>
            </div>
            <div className="absolute top-10 -right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-lg">💰</span>
            </div>
            <div className="absolute -bottom-4 -right-2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <span className="text-xl">⚡</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}