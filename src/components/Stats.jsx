import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBook, faMoneyBill, faStar } from '@fortawesome/free-solid-svg-icons'

const StatCard = ({ icon, end, suffix, label, delay }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <FontAwesomeIcon icon={icon} className="text-primary text-4xl mb-4" />
      <h3 className="text-3xl font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  )
}

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={faUsers}
            end={10000}
            suffix="+"
            label="Students Enrolled"
            delay={0}
          />
          <StatCard 
            icon={faBook}
            end={50}
            suffix="+"
            label="Expert Courses"
            delay={0.1}
          />
          <StatCard 
            icon={faMoneyBill}
            end={5}
            suffix="Cr+"
            label="Earnings Distributed"
            delay={0.2}
          />
          <StatCard 
            icon={faStar}
            end={4.9}
            suffix="/5"
            label="Average Rating"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

export default Stats
