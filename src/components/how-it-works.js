import * as React from "react"
import { 
  FaMapMarkedAlt, 
  FaClipboardCheck, 
  FaShare, 
  FaPlane 
} from "react-icons/fa"

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMapMarkedAlt className="text-primary h-10 w-10" />,
      title: "Tell Us Your Dream Trip",
      description: "Fill out the quick form & tell us about your dream destination, activities, and preferred dates.",
      number: "1"
    },
    {
      icon: <FaClipboardCheck className="text-primary h-10 w-10" />,
      title: "We Plan Every Detail",
      description: "We help plan every aspect – location, events, accommodations, pricing, and more!",
      number: "2"
    },
    {
      icon: <FaShare className="text-primary h-10 w-10" />,
      title: "Promote Your Trip",
      description: "Share your unique booking link with your followers on your social platforms.",
      number: "3"
    },
    {
      icon: <FaPlane className="text-primary h-10 w-10" />,
      title: "Travel & Get Paid",
      description: "Once your group books, we handle everything – and you get paid for each booking!",
      number: "4"
    }
  ];

  return (
    <section id="how-it-works" className="section bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Four simple steps to turn your dream trip into a profitable reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105 relative"
            >
              <div className="absolute -top-4 -right-4 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
