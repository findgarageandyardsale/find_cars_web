import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturesSection() {
  const buyerBenefits = [
    "Browse cars, trucks, and SUVs near you",
    "Use filters (make, model, year, mileage, price) to find the right fit",
    "View detailed photos and descriptions before you visit",
    "Connect directly with sellers to negotiate a fair deal"
  ];

  const sellerBenefits = [
    "List your car in minutes with photos & details",
    "Reach serious buyers in your area",
    "No middlemen, no hidden fees",
    "Update or remove listings anytime"
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Buyers */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">For Buyers</CardTitle>
              <p className="text-xl text-gray-600">Find your perfect car without the stress.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="mb-6">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1585937169521-4428971aaab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZWFsZXJzaGlwJTIwbG90fGVufDF8fHx8MTc1NjUyNzU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Car dealership lot"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
              <ul className="space-y-3">
                {buyerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* For Sellers */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">For Sellers</CardTitle>
              <p className="text-xl text-gray-600">Selling your car has never been easier.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="mb-6">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1653565217811-85b41bcd1edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBrZXlzJTIwaGFuZHxlbnwxfHx8fDE3NTY1Mjc1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Car keys in hand"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
              <ul className="space-y-3">
                {sellerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}