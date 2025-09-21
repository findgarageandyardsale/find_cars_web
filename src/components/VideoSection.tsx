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
    <section id="video" className="py-20 px-4 bg-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-400/20 rounded-full animate-pulse"></div>
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
            Used Car Buying and Selling in a Glance
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Watch how easy it is to find your perfect used car or sell your vehicle with our intuitive mobile app
          </p>
        </div>

        {/* Main Video Container */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-white/20 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group">
                <iframe
                  src="https://player.vimeo.com/video/1120534565?dnt=1&title=0&byline=0&portrait=0&sidedock=0&color=ffffff"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title="Findor App Demo Video"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Floating elements around video */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-2 w-10 h-10 bg-red-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-200 mb-6">Ready to get started?</p>
          <Button
            onClick={scrollToScan}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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