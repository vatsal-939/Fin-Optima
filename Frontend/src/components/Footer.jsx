import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-blue-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>Phone: 1-800-123-4567</li>
              <li>Email: support@securebank.com</li>
              <li>
                <Link href="/chat" className="hover:text-blue-300">
                  Live Chat
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Linkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="mb-2">Bank on the go with our mobile app</p>
            <div className="flex space-x-2">
              <a href="#" className="bg-white text-blue-900 px-4 py-2 rounded">
                App Store
              </a>
              <a href="#" className="bg-white text-blue-900 px-4 py-2 rounded">
                Google Play
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2023 SecureBank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

