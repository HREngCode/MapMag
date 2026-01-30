import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LogOut, Package, DollarSign, Users, TrendingUp } from "lucide-react";

// Mock data for demonstration
const mockOrders = [
  { id: "1", name: "Sarah Johnson", quantity: 3, total: 12, status: "Processing", date: "2026-01-28" },
  { id: "2", name: "Mike Chen", quantity: 6, total: 22, status: "Shipped", date: "2026-01-27" },
  { id: "3", name: "Emily Davis", quantity: 20, total: 55, status: "Completed", date: "2026-01-26" },
  { id: "4", name: "James Wilson", quantity: 9, total: 27, status: "Processing", date: "2026-01-25" },
  { id: "5", name: "Lisa Brown", quantity: 1, total: 5, status: "New", date: "2026-01-30" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      navigate("/admin");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  if (!isAuthenticated) {
    return null;
  }

  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = mockOrders.length;
  const totalMagnets = mockOrders.reduce((sum, order) => sum + order.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your orders and business</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${totalRevenue}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Magnets Sold</p>
                  <p className="text-2xl font-bold text-gray-900">{totalMagnets}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Order Value</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${(totalRevenue / totalOrders).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {order.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {order.quantity} magnets
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        ${order.total}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "New" ? "bg-blue-100 text-blue-800" :
                          order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                          order.status === "Shipped" ? "bg-purple-100 text-purple-800" :
                          "bg-green-100 text-green-800"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">Note: Demo Data</h3>
            <p className="text-blue-800 text-sm">
              This dashboard currently displays mock data for demonstration purposes. 
              Connect to Supabase to enable real order management, authentication, and data persistence.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
