import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-400 mb-4 block">
              YourBrand
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Building amazing digital experiences with modern web technologies. 
              We create beautiful, fast, and user-friendly websites that drive results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.9 5.9 0 00-2.13 1.39A5.9 5.9 0 00.43 5.02c-.226.5-.348 1.074-.382 2.021C.013 8.989 0 9.396 0 13.017s.013 4.028.048 4.976c.034.947.156 1.521.382 2.021a5.9 5.9 0 001.39 2.13 5.9 5.9 0 002.13 1.39c.5.226 1.074.348 2.021.382.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.021-.382a5.9 5.9 0 002.13-1.39 5.9 5.9 0 001.39-2.13c.226-.5.348-1.074.382-2.021.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.382-2.021a5.9 5.9 0 00-1.39-2.13 5.9 5.9 0 00-2.13-1.39c-.5-.226-1.074-.348-2.021-.382C16.045.013 15.638 0 12.017 0zm0 2.162c3.555 0 3.974.014 5.368.072.946.043 1.458.202 1.8.336.45.18.771.394 1.108.731.337.337.551.658.731 1.108.134.342.293.854.336 1.8.058 1.394.072 1.813.072 5.368s-.014 3.974-.072 5.368c-.043.946-.202 1.458-.336 1.8-.18.45-.394.771-.731 1.108-.337.337-.658.551-1.108.731-.342.134-.854.293-1.8.336-1.394.058-1.813.072-5.368.072s-3.974-.014-5.368-.072c-.946-.043-1.458-.202-1.8-.336a2.97 2.97 0 01-1.108-.731 2.97 2.97 0 01-.731-1.108c-.134-.342-.293-.854-.336-1.8-.058-1.394-.072-1.813-.072-5.368s.014-3.974.072-5.368c.043-.946.202-1.458.336-1.8.18-.45.394-.771.731-1.108a2.97 2.97 0 011.108-.731c.342-.134.854-.293 1.8-.336 1.394-.058 1.813-.072 5.368-.072z" clipRule="evenodd"/>
                  <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.24-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Business St</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@yourbrand.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
