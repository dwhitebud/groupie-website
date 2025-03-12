import * as React from "react"

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    instagram: "",
    destination: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        instagram: "",
        destination: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Start Your Journey Today</h2>
          <p className="section-subtitle">
            Fill out the form below to begin planning your dream trip.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-lg text-center">
              <svg 
                className="w-16 h-16 text-green-500 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Thanks for your interest!</h3>
              <p className="mb-4">We've received your information and will be in touch soon to discuss your dream trip.</p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="btn-primary"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="bg-light p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-dark font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-dark font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="instagram"
                    className="block text-dark font-medium mb-2"
                  >
                    Instagram Handle
                  </label>
                  <input 
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formState.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="@yourhandle"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="destination"
                    className="block text-dark font-medium mb-2"
                  >
                    Dream Destination
                  </label>
                  <input 
                    type="text"
                    id="destination"
                    name="destination"
                    value={formState.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    placeholder="Bali, Paris, etc."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label 
                  htmlFor="message"
                  className="block text-dark font-medium mb-2"
                >
                  Tell us about your dream trip
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="What kind of experience are you looking for? What activities would you like to include? Any specific dates in mind?"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full py-3 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Start Planning My Trip'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
