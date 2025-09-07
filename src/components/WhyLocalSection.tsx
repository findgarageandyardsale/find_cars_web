import { Card, CardContent } from "./ui/card";

export function WhyLocalSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8">
          Why Local Matters
        </h2>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8">
            <p className="text-xl leading-relaxed mb-6">
              Unlike big national car sites, <span className="font-bold">Find Car Sales</span> is focused on your community. You don't need to travel across states — find deals right in your city.
            </p>
            <div className="text-2xl font-bold text-yellow-300">
              Local = Faster, Safer, More Convenient.
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="text-4xl">⚡</div>
            <h3 className="font-bold">Faster</h3>
            <p className="text-blue-100">No long distance travel required</p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🛡️</div>
            <h3 className="font-bold">Safer</h3>
            <p className="text-blue-100">Meet in familiar local areas</p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🎯</div>
            <h3 className="font-bold">Convenient</h3>
            <p className="text-blue-100">Support your local community</p>
          </div>
        </div>
      </div>
    </section>
  );
}