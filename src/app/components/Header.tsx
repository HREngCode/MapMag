import { Link } from "react-router";
import { ShoppingCart, User } from "lucide-react";
import Logo from "./assets/Logo.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Maple Magnets Logo" className="logo-size" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-amber-600 transition-colors">
              Order Now
            </Link>
            <Link to="/admin" className="text-gray-400 hover:text-gray-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>
          </nav>

          <Link 
            to="/products" 
            className="md:hidden flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Order
          </Link>
        </div>
      </div>
    </header>
  );
}
