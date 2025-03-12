import * as React from "react"
import emailjs from '@emailjs/browser';

// Initialize EmailJS directly
emailjs.init("nDu7qDG5Tw671jILd");

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
  const [error, setError] = React.useState(null);
  const formRef = React.useRef();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare template parameters
      const templateParams = {
        to_email: 'hello@devandbre.com',
        from_name: formState.name,
        from_email: formState.email,
        instagram: formState.instagram || 'Not provided',
        destination: formState.destination || 'Not specified',
        message: formState.message || 'No additional message'
      };

      console.log('Sending email with parameters:', templateParams);
      
      // Send the email directly from the client with hardcoded service and template IDs
      const response = await emailjs.send(
        "service_wua4b8j",
        "template_s9wkvmo",
        templateParams
      );
      
      console.log('EmailJS response:', response);
      
      // Success! Reset form and show success message
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        instagram: "",
        destination: "",
        message: ""
      });
    } catch (err) {
      console.error('Error sending email:', err);
      setIsSubmitting(false);
      setError(`There was an error sending your message: ${err.message || 'Unknown error'}`);
    }
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
              ref={formRef}
              onSubmit={handleSubmit} 
              className="bg-light p-8 rounded-lg shadow-md"
            >
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                  <p>{error}</p>
                </div>
              )}
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
