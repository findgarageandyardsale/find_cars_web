import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function VideoSection() {
  const scrollToScan = () => {
    const element = document.querySelector("#scan");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="video" className="py-20 px-4 bg-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-yellow-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            <span className="font-medium text-white">Live Demo</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            See Find Car Sales in Action
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Watch how easy it is to find your perfect car or sell your vehicle with our intuitive mobile app
          </p>
        </div>

        {/* Main Video Container */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-white/20 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23374151'/%3E%3Cstop offset='100%25' stop-color='%23111827'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23bg)'/%3E%3Ccircle cx='400' cy='225' r='60' fill='%23ffffff' opacity='0.9'/%3E%3Cpolygon points='385,205 385,245 420,225' fill='%23374151'/%3E%3Ctext x='400' y='300' text-anchor='middle' fill='%23ffffff' font-size='24' font-weight='bold'%3EFind Car Sales Demo%3C/text%3E%3Ctext x='400' y='330' text-anchor='middle' fill='%23d1d5db' font-size='16'%3EClick to play%3C/text%3E%3C/svg%3E"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>
          
          {/* Floating elements around video */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-200 mb-6">Ready to get started?</p>
          <Button 
            onClick={scrollToScan}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="text-lg mr-2">📱</span>
            Download Now - It's Free!
          </Button>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-gray-300">Cars Listed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">5K+</div>
            <div className="text-gray-300">Happy Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}