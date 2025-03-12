import * as React from "react"
import { 
  FaMoneyBillWave, 
  FaGlobeAmericas, 
  FaUserFriends, 
  FaShieldAlt 
} from "react-icons/fa"

const Benefits = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-tertiary h-12 w-12" />,
      title: "Earn Money",
      description: "Earn money from every booking. You decide your markup, and we guide you on pricing so your trip is profitable."
    },
    {
      icon: <FaGlobeAmericas className="text-tertiary h-12 w-12" />,
      title: "Travel For Free",
      description: "Your markup covers your costs, so you can travel to amazing destinations without spending a dime."
    },
    {
      icon: <FaUserFriends className="text-tertiary h-12 w-12" />,
      title: "Connect With Your Followers",
      description: "Meet your followers in person and create once-in-a-lifetime experiences together."
    },
    {
      icon: <FaShieldAlt className="text-tertiary h-12 w-12" />,
      title: "Zero Risk",
      description: "We handle all the logistics and payments. If you don't get enough sign-ups, there's no cost to you."
    }
  ];

  return (
    <section id="why-join" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Why You Should Join</h2>
          <p className="section-subtitle">
            Hosting your own trip comes with amazing benefits for influencers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-5 p-6 rounded-lg transition-all duration-300 hover:bg-light"
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-dark">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
