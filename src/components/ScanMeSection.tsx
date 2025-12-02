import appStore from "../assets/images/app_store.png";
import playStore from "../assets/images/play_store.png";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/common/constants";
import qrCode from '../assets/images/qrcode.jpeg';


export function ScanMeSection() {
  // QR code URL for the app

  return (
    <section id="scan" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">


        <div id="download-app" className="mt-20 text-center mt-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="font-medium text-red-700">Ready to Download</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Download the App
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Get instant access to Find Car Sales. Simply scan the QR code with your phone's camera or click the buttons below.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* QR Code */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="flex items-center justify-center">
                <img
                  src={qrCode}
                  alt="QR Code"
                  className="object-contain"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-3">Scan to download</p>
            </div>

            {/* Download Buttons */}
            <div className="space-x-4">
              <a
                href={PLAY_STORE_URL}
                className="inline-block w-36 sm:w-auto"
                target="_blank"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a
                href={APP_STORE_URL}
                className="inline-block w-36 sm:w-auto"
                target="_blank"
              >
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Additional download info */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
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