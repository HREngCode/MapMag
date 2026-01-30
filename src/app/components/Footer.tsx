export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Maple Magnets</h3>
            <p className="text-gray-600 text-sm">
              Creating personalized photo magnets to cherish your memories.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
            <p className="text-sm text-gray-600">
              A family-owned business bringing your memories to life.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Maple Magnets. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
