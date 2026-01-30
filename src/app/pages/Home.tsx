import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Heart, Star, Package } from "lucide-react";
import businessLogo from "../components/assets/Hero.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Turn Your Memories Into 
                  <span className="text-amber-600"> Beautiful Magnets</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Family-owned and operated. We create personalized photo magnets 
                  that bring your favorite moments to life on your fridge.
                </p>
                <Link 
                  to="/products"
                  className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
                >
                  Start Your Order
                </Link>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                  <img 
                    src={businessLogo}
                    alt="Maple Magnets - Moments That Stick"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Why Choose Maple Magnets?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Family Owned</h3>
                <p className="text-gray-600">
                  We're a small family business that takes pride in every magnet we create.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  High-quality materials ensure your memories last for years to come.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Great Pricing</h3>
                <p className="text-gray-600">
                  Affordable prices with bulk discounts to help you save more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Pricing
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              The more you order, the more you save!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">$5</div>
                <div className="text-gray-600">1 Magnet</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center border-2 border-amber-600">
                <div className="text-xs bg-amber-600 text-white px-2 py-1 rounded-full mb-2 inline-block">Popular</div>
                <div className="text-3xl font-bold text-amber-600 mb-2">$12</div>
                <div className="text-gray-600">3 Magnets</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">$22</div>
                <div className="text-gray-600">6 Magnets</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">$27</div>
                <div className="text-gray-600">9 Magnets</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">$55</div>
                <div className="text-gray-600">20 Magnets</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/products"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                See Full Details
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Preserve Your Memories?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied customers who've turned their photos into beautiful keepsakes.
            </p>
            <Link 
              to="/products"
              className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
            >
              Order Your Magnets Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}