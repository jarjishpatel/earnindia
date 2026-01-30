import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
        onClick={onClick}
      >
        <span className="font-semibold text-primary text-lg">{question}</span>
        <FontAwesomeIcon 
          icon={isOpen ? faChevronUp : faChevronDown} 
          className="text-accent"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 text-gray-600 border-t">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is EarnIndia?",
      answer: "EarnIndia is India's premier platform that combines quality digital skill education with a lucrative affiliate earning system. We offer certified courses with lifetime access and help you build passive income through our 3-level commission structure."
    },
    {
      question: "How does the affiliate earning system work?",
      answer: "When you enroll in any premium package, you receive a unique referral code. Share it with others and earn: 67% commission on Level 1 (direct referrals), 10% on Level 2 (referrals from your referrals), and 5% on Level 3. All commissions are tracked in real-time in your dashboard."
    },
    {
      question: "Do I get certificates after completing courses?",
      answer: "Yes! Every course completion awards you with a professional, government-style certificate that you can share on LinkedIn, add to your resume, or showcase to potential employers. These certificates are recognized and trusted across industries."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including Credit/Debit Cards, UPI, Net Banking, and popular digital wallets. All transactions are secured with industry-standard encryption for your safety."
    },
    {
      question: "Is the platform mobile-friendly?",
      answer: "Absolutely! EarnIndia is fully responsive and optimized for mobile devices. Learn on-the-go from your smartphone or tablet with the same seamless experience as desktop. All features including videos, quizzes, and your affiliate dashboard work perfectly on mobile."
    },
    {
      question: "How can I contact support?",
      answer: "Our friendly support team is available 24/7 via email at support@earnindia.com or call us at +91-XXX-XXXXXXX (Monday-Saturday, 9 AM - 5 PM IST). We typically respond within 2-4 hours."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
