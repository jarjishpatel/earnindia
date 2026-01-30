import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const InstructorCard = ({ photo, name, title, bio }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <img 
          src={photo} 
          alt={name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-accent font-semibold mb-2">{title}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  )
}

const Instructors = () => {
  const instructors = [
    {
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      name: "Rahul Sharma",
      title: "Digital Marketing Expert",
      bio: "10+ years helping businesses grow online with proven strategies"
    },
    {
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      name: "Priya Patel",
      title: "E-commerce Specialist",
      bio: "Built multiple 7-figure online stores from scratch"
    },
    {
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      name: "Amit Kumar",
      title: "SEO & Content Strategist",
      bio: "Ranked 1000+ websites on Google's first page"
    },
    {
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      name: "Sneha Reddy",
      title: "Social Media Guru",
      bio: "Managed campaigns for Fortune 500 companies"
    },
    {
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      name: "Vikram Singh",
      title: "Full Stack Developer",
      bio: "Senior engineer at top tech companies for 8+ years"
    },
    {
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
      name: "Anjali Mehta",
      title: "Data Science Mentor",
      bio: "PhD in AI, teaching complex concepts simply"
    },
    {
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop",
      name: "Rohan Joshi",
      title: "Affiliate Marketing Pro",
      bio: "Generated $1M+ in affiliate commissions"
    },
    {
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      name: "Neha Gupta",
      title: "Email Marketing Expert",
      bio: "Crafted campaigns with 40%+ open rates"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
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
          <h2 className="text-4xl font-bold text-primary mb-4">Our Expert Instructors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry professionals with real-world experience
          </p>
        </div>
        <Slider {...settings}>
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Instructors
