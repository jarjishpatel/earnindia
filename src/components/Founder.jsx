import { motion } from 'framer-motion'

const Founder = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:flex items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
            alt="Founder"
            className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 mb-6 md:mb-0"
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-primary mb-2">Your Name</h3>
            <p className="text-accent font-semibold mb-4">CEO & Founder, EarnIndia</p>
            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in digital education and online entrepreneurship, 
              I've had the privilege of empowering 10,000+ students to master in-demand digital skills 
              and build sustainable income streams. My mission is to democratize quality education 
              and create financial opportunities for every Indian who dreams of success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Founder
