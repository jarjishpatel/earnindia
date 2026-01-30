import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faLink, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

const StepCard = ({ number, icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <FontAwesomeIcon icon={icon} className="text-primary text-5xl mb-4 mt-4" />
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const HowItWorks = () => {
  return (
    <section id="affiliate" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">How Our Affiliate System Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start earning passive income with our simple 3-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <StepCard 
            number={1}
            icon={faSignInAlt}
            title="Enroll in a Package"
            description="Choose any premium package and get instant access to all courses plus your affiliate dashboard"
            delay={0}
          />
          <StepCard 
            number={2}
            icon={faLink}
            title="Get Your Referral Code"
            description="Receive a unique referral link and promotional materials to share with your network"
            delay={0.2}
          />
          <StepCard 
            number={3}
            icon={faMoneyBillWave}
            title="Earn Big Commissions"
            description="Level 1: 67% | Level 2: 10% | Level 3: 5% - Build a passive income stream that grows!"
            delay={0.4}
          />
        </div>

        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Earning?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Your dashboard tracks every referral, commission, and payout in real-time. 
            Transparent, reliable, and designed for your success.
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            View Dashboard Preview
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
