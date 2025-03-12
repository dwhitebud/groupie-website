import * as React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Groupie</h2>
            <p className="text-gray-300 mb-4">
              Turn your dream trip into reality and get paid for it!
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="mailto:info@groupie.travel" aria-label="Email">
                <FaEnvelope className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#why-join" className="text-gray-300 hover:text-white transition-colors">
                  Why Join
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              Have questions? Reach out!
            </p>
            <p className="text-gray-300 mb-4">
              Email: info@groupie.travel
            </p>
            <Link to="/#contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Groupie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
