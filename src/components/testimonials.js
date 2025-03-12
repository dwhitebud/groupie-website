import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Beauty Influencer",
      quote: "Hosting a Bali retreat with my followers was a dream come true! Groupie handled everything from accommodations to activities, and I made enough to cover my entire trip plus extra income.",
      image: "testimonial1.jpg"
    },
    {
      name: "Mike T.",
      role: "Travel Blogger",
      quote: "I was skeptical at first, but the Groupie team made the whole process easy. My followers loved the Costa Rica adventure trip we planned, and I'm already organizing my next one!",
      image: "testimonial2.jpg"
    },
    {
      name: "Lisa R.",
      role: "Fitness Coach",
      quote: "As a fitness coach, I wanted to host a wellness retreat but had no idea where to start. Groupie was the perfect partner - they handled all the details while I focused on the content.",
      image: "testimonial3.jpg"
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from influencers who have hosted amazing trips with Groupie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="mb-4 text-primary">
                  <svg 
                    className="w-10 h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0 mr-3">
                  {/* Fallback div with initials if image fails to load */}
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
