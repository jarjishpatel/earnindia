import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'

const PackageCard = ({ title, originalPrice, discountPrice, courses, rating, delay, image }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
    >
      {/* Image added here - top of the card */}
      <img 
        src={image} 
        alt={`${title} - EarnIndia Package`}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-gray-400 line-through text-lg">₹{originalPrice}</span>
          <span className="text-accent text-3xl font-bold ml-3">₹{discountPrice}</span>
        </div>
        <div className="mb-4">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon 
              key={i} 
              icon={faStar} 
              className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-gray-600">{rating}/5</span>
        </div>
        <ul className="mb-6 space-y-2">
          {courses.map((course, index) => (
            <li key={index} className="flex items-start">
              <FontAwesomeIcon icon={faCheck} className="text-accent mt-1 mr-2" />
              <span className="text-gray-700">{course}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Enroll Now
        </button>
      </div>
    </motion.div>
  )
}

const Packages = () => {
  const packages = [
    {
      title: "Basic Package",
      originalPrice: 1999,
      discountPrice: 999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", // Digital Marketing theme
      courses: [
        "Digital Marketing Fundamentals",
        "Social Media Marketing",
        "Email Marketing Mastery",
        "Affiliate Marketing Basics"
      ]
    },
    {
      title: "Pro Package",
      originalPrice: 3999,
      discountPrice: 1999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", // SEO & Analytics theme
      courses: [
        "Advanced SEO Strategies",
        "Content Marketing",
        "Google Ads Mastery",
        "Analytics & Conversion Optimization"
      ]
    },
    {
      title: "Premium Package",
      originalPrice: 5999,
      discountPrice: 2999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", // E-commerce & Shopify theme
      courses: [
        "E-commerce Business Setup",
        "Amazon FBA Complete Guide",
        "Shopify Store Development",
        "Dropshipping Strategies"
      ]
    },
    {
      title: "Ultimate Package",
      originalPrice: 9999,
      discountPrice: 4999,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800", // Full Stack & Development theme
      courses: [
        "Full Stack Development",
        "Python Programming",
        "Data Science & AI Basics",
        "Web Design with Figma"
      ]
    }
  ]

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a bundle of 3-4 courses for full access and affiliate eligibility. Single courses available but less featured.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages