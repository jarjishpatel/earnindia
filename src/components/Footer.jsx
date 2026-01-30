import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">EarnIndia</h3>
            <p className="text-blue-200 text-sm">
              Empowering Indians with digital skills and financial opportunities through quality education and affiliate earnings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-blue-200 hover:text-white transition">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-blue-200 hover:text-white transition">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('packages')} className="text-blue-200 hover:text-white transition">Packages</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('affiliate')} className="text-blue-200 hover:text-white transition">Affiliate Program</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-2" />
                <span>support@earnindia.com</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="mt-1 mr-2" />
                <span>+91-XXX-XXXXXXX<br/>Monday-Sat: 9 AM - 5 PM IST</span>
              </li>
            </ul>
          </div>

          {/* Social & Security */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-200 hover:text-white transition text-2xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition text-2xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition text-2xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition text-2xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="flex items-center text-blue-200 text-sm">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2 text-xl" />
              <span>Secure Payments<br/>SSL Protected</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-6 text-center text-blue-200 text-sm">
          <p>&copy; 2026 EarnIndia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
