import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faHeadset, faInfinity, faMoneyCheckAlt, faMobileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <FontAwesomeIcon icon={icon} className="text-primary text-4xl mb-4" />
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const WhyChooseUs = () => {
  const features = [
    {
      icon: faCertificate,
      title: "Government-Style Trusted Certificates",
      description: "Get recognized certificates upon completion of every course"
    },
    {
      icon: faHeadset,
      title: "24/7 Friendly Support",
      description: "Our support team is always ready to help you succeed"
    },
    {
      icon: faInfinity,
      title: "Lifetime Course Access",
      description: "Learn at your own pace with unlimited access to all content"
    },
    {
      icon: faMoneyCheckAlt,
      title: "Earn Up to 67% Commissions",
      description: "Build passive income through our 3-level affiliate system"
    },
    {
      icon: faMobileAlt,
      title: "Mobile Responsive Learning",
      description: "Access courses anytime, anywhere on any device"
    },
    {
      icon: faShieldAlt,
      title: "Secure Payments",
      description: "Your transactions are safe with our encrypted payment gateway"
    }
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Why EarnIndia?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
