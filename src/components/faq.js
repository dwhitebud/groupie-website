import * as React from "react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "How much can I make?",
      answer: "You decide your markup! We guide you on pricing so your trip is profitable. Many influencers earn between $500-$5,000 per trip depending on the group size and destination."
    },
    {
      question: "Do I need to plan everything?",
      answer: "Not at all! We take care of the logistics – you just tell us your ideal trip vibe, and we'll handle the rest, from accommodations to activities and transportation."
    },
    {
      question: "What if my trip doesn't get enough interest?",
      answer: "No worries! If you don't get enough sign-ups to meet the minimum group size, there's no cost to you. It's a completely risk-free opportunity."
    },
    {
      question: "How far in advance should I plan my trip?",
      answer: "We recommend planning at least 3-6 months in advance to give your followers enough time to save and prepare. Some exclusive destinations may require even more advance booking."
    },
    {
      question: "What size group do I need?",
      answer: "Minimum group sizes vary by destination and package, but typically range from 8-15 people. We'll work with you to determine the ideal group size for your trip."
    },
    {
      question: "Can I customize the activities on the trip?",
      answer: "Absolutely! This is YOUR dream trip. We'll work with you to customize the itinerary to match your interests and your followers' expectations."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about hosting your own trip.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-dark">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 transition-all duration-300 overflow-hidden ${openIndex === index ? 'pb-4 max-h-96' : 'max-h-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
