import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PricingCalculator } from "../components/PricingCalculator";
import { Upload, CheckCircle } from "lucide-react";
import  ExampleImage from "../components/assets/Example.jpg";

export default function Products() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, this would send to backend/Supabase
    setOrderSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
      });
      setOrderSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Your Custom Photo Magnets
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your quantity and provide your details. We'll contact you to arrange photo uploads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Product Info & Pricing */}
            <div>
              <div className="mb-8">
                <img
                  src={ExampleImage}
                  alt="Family memories"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>High-quality, durable magnet material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Vibrant, long-lasting photo prints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Standard size: 2 x 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Perfect for refrigerators, lockers, and metal surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Family business - personal care with every order</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Quantity</h2>
              <PricingCalculator />
            </div>

            {/* Right Column - Order Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
              
              {orderSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Order Received!</h3>
                  <p className="text-green-700">
                    Thank you for your order. We'll contact you shortly to arrange photo uploads.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                      Shipping Address *
                    </label>
                    <textarea
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="123 Main St, City, State, ZIP"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Any special requests or notes about your order..."
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                    <Upload className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <strong>Photo Upload:</strong> After submitting your order, we'll send you a link to upload your photos securely.
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
                  >
                    Place Order
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By placing an order, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
