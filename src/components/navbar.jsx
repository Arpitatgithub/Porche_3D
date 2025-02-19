export default function Navbar() {
          return (
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-gray-900/30 via-gray-800/40 to-gray-900/30 shadow-md">
              <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-white text-2xl font-semibold">Porsche 3D</h1>
        
                {/* Navigation Links */}
                <ul className="flex space-x-6">
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white transition">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white transition">Models</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white transition">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white transition">Contact</a>
                    
                  </li>
                </ul>
              </div>
            </nav>
          );
        }
        