import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import scene1 from "../assets/images/scene1.png";
import scene2 from "../assets/images/scene2.jpg";
import scene3 from "../assets/images/scene3.jpg";

export function ScenesSection() {
    const scenes = [
        {
            id: 1,
            image: scene1,
            title: "Discover Cars",
            description: "Browse through a wide selection of cars in your local area"
        },
        {
            id: 2,
            image: scene2,
            title: "Connect & Meet",
            description: "Connect directly with sellers and schedule test drives"
        },
        {
            id: 3,
            image: scene3,
            title: "Make the Deal",
            description: "Negotiate and complete your car purchase with confidence"
        }
    ];

    return (
        <section id="hero" className="relative bg-blue-50 pt-24 pb-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title and Subtitle */}
                <div className="text-center mb-16 pb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Find Your Next Ride — Fast & Local
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Discover cars for sale in your neighborhood, or list your own vehicle in minutes. Simple, safe, and hassle-free.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <span className="text-lg mr-2">📱</span>
                            Download the App
                        </Button>
                        <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <span className="mr-2">🎥</span>
                            Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Scenes Grid */}
                <div className="grid md:grid-cols-3 gap-8 pb-16">
                    {scenes.map((scene, index) => (
                        <Card key={scene.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-0">
                                {/* Image Container */}
                                <div className="relative overflow-hidden rounded-t-lg h-80">
                                    <img
                                        src={scene.image}
                                        alt={scene.title}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Overlay with step number */}
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
                                        {scene.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {scene.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
