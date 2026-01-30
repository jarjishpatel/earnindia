import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialCard = ({ name, quote, rating, emoji }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-3xl opacity-20 absolute top-4 left-4" />
        <div className="pt-8">
          <div className="mb-4">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">"{quote}"</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-primary">{name}</p>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Verma",
      quote: "Earned ₹50K in first month via referrals! This platform changed my life completely.",
      rating: 5,
      emoji: "🚀"
    },
    {
      name: "Sunita Kapoor",
      quote: "The courses are practical and easy to understand. Already making ₹30K monthly!",
      rating: 5,
      emoji: "💰"
    },
    {
      name: "Aditya Malhotra",
      quote: "Best investment I made! The affiliate system is transparent and pays on time.",
      rating: 5,
      emoji: "⭐"
    },
    {
      name: "Kavita Desai",
      quote: "As a housewife, this gave me financial independence. Earning ₹40K+ monthly now!",
      rating: 5,
      emoji: "🙌"
    },
    {
      name: "Sanjay Rao",
      quote: "Lifetime access is a game-changer. I revisit courses whenever I need a refresher.",
      rating: 5,
      emoji: "📚"
    },
    {
      name: "Pooja Singh",
      quote: "The certificates helped me land a digital marketing job. Forever grateful!",
      rating: 5,
      emoji: "🎓"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied learners who transformed their lives with EarnIndia
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
