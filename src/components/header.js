import * as React from "react"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="font-bold text-2xl text-primary flex items-center"
          >
            {siteTitle}
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/#how-it-works"
              className="text-dark hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/#why-join"
              className="text-dark hover:text-primary transition-colors"
            >
              Why Join
            </Link>
            <Link
              to="/#faq"
              className="text-dark hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/#contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/#how-it-works"
                className="text-dark hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/#why-join"
                className="text-dark hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Join
              </Link>
              <Link
                to="/#faq"
                className="text-dark hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/#contact"
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
