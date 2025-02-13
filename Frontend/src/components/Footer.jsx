import { FaFacebook, FaTwitter, FaLinkedin, FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-blue-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>Phone: 1-800-123-4567</li>
              <li>Email: support@securebank.com</li>
              <li>
                <a href="/chat" className="hover:text-blue-300">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="mb-2">Bank on the go with our mobile app</p>
            <div className="flex space-x-2">
              <a
                href="#"
                className="bg-white text-blue-900 px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-200"
              >
                <FaApple size={20} />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="bg-white text-blue-900 px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-200"
              >
                <FaGooglePlay size={20} />
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; 2023 SecureBank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
