import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left hero-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Turn Your Dream Trip Into Reality – And Get Paid For It!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Travel with your biggest GROUPIEs, create unforgettable memories, and make money – all with zero risk!
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/#contact"
                className="btn-secondary text-center text-lg px-6 py-3"
              >
                Get Started
              </Link>
              <Link
                to="/#how-it-works"
                className="bg-white text-primary font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-center text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              {/* This is a placeholder - replace with your actual image */}
              <div className="bg-white/20 p-2 rounded-lg shadow-xl">
                <StaticImage
                  src="../images/hero-placeholder.jpg"
                  alt="Group of friends traveling together"
                  placeholder="blurred"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  onError={(e) => {
                    // Fallback if the image doesn't exist
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg transform rotate-3">
                <p className="font-bold">Earn While Traveling!</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-primary p-4 rounded-lg shadow-lg transform -rotate-3">
                <p className="font-bold">Zero Risk!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
