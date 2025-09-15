import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function ScanMeSection() {
  // QR code URLs for App Store and Google Play Store
  const appStoreQR = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/app/find-car-sales";
  const playStoreQR = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.findcarsales";

  return (
    <section id="scan" className="py-20 px-4 bg-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-red-300/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-red-500/30 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="font-medium text-red-700">Ready to Download</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-red-900">
            Scan & Download Now!
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Get instant access to Find Car Sales. Simply scan the QR code with your phone's camera or click the buttons below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS App Store */}
          <Card className="bg-white/80 backdrop-blur-lg border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* iOS Icon */}
                <div className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-3xl">🍎</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Download for iOS</h3>

                {/* QR Code */}
                <div className="bg-white p-6 rounded-3xl shadow-inner mb-8 inline-block border-4 border-gray-100">
                  <img
                    src={appStoreQR}
                    alt="iOS App Store QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">Scan with your iPhone camera</p>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">📱</span>
                      <div className="text-left">
                        <div className="text-sm opacity-90">Download on the</div>
                        <div className="font-bold">App Store</div>
                      </div>
                    </div>
                  </Button>

                  <p className="text-sm text-gray-500">iOS 12.0 or later required</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Play Store */}
          <Card className="bg-white/80 backdrop-blur-lg border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
            <CardContent className="p-8 text-center relative overflow-hidden">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Android Icon */}
                <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-3xl">🤖</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Download for Android</h3>

                {/* QR Code */}
                <div className="bg-white p-6 rounded-3xl shadow-inner mb-8 inline-block border-4 border-gray-100">
                  <img
                    src={playStoreQR}
                    alt="Google Play Store QR Code"
                    className="w-48 h-48 mx-auto"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">Scan with your camera app</p>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">📱</span>
                      <div className="text-left">
                        <div className="text-sm opacity-90">Get it on</div>
                        <div className="font-bold">Google Play</div>
                      </div>
                    </div>
                  </Button>

                  <p className="text-sm text-gray-500">Android 6.0 or later required</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional download info */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
            <h4 className="font-bold text-gray-900 mb-4">Why Download Find Car Sales?</h4>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-xl">🆓</span>
                </div>
                <div className="font-medium text-gray-900">100% Free</div>
                <div className="text-sm text-gray-600">No hidden costs</div>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="font-medium text-gray-900">Instant Setup</div>
                <div className="text-sm text-gray-600">Ready in seconds</div>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-xl">🔒</span>
                </div>
                <div className="font-medium text-gray-900">Secure</div>
                <div className="text-sm text-gray-600">Safe transactions</div>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-xl">🎯</span>
                </div>
                <div className="font-medium text-gray-900">Local Focus</div>
                <div className="text-sm text-gray-600">Nearby listings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}