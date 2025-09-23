import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Find Car Sales Logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <h3 className="font-bold text-xl text-gray-900">Find Car Sales</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Part of the <span className="font-semibold">FindorLookup</span> family
            </p>
            <p className="text-gray-600">
              Your local platform for buying and selling cars. Simple, safe, and hassle-free.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/privacy-policy" className="hover:text-red-600">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-red-600">Terms of Use</a></li>
              <li><a href="#" className="hover:text-red-600">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-red-600 text-xl">📘</a>
              <a href="#" className="text-gray-600 hover:text-red-600 text-xl">📷</a>
              <a href="#" className="text-gray-600 hover:text-red-600 text-xl">🐦</a>
              <a href="#" className="text-gray-600 hover:text-red-600 text-xl">💼</a>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="text-center text-gray-600">
          <p>© {currentYear} Find Car Sales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}