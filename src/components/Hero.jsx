import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('packages')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="pt-24 pb-20 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white"
    >
      {/* Banner Image - yeh upar full horizontal */}
      <img 
        src="https://cdn.prod.website-files.com/63722c0a69a5307826c01e08/6953c287730ca7cecb9c1902_uxgirl_06884_A_modern_well-lit_tech_w%20(1).jpg" 
        alt="EarnIndia - Learn Digital Skills & Earn Money"
        className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
      />

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            India's Trusted Platform: Learn Skills & Earn Money
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Master digital skills with certified courses and build passive income through our 3-level affiliate system (up to 67% commissions). Lifetime access, certificates, and trusted by thousands.
          </p>
          <motion.button 
            onClick={scrollToPackages}
            className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero