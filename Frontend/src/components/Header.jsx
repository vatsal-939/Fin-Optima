"use client"

import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import PinEntryModal from "./PinEntryModal"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPinModalOpen, setIsPinModalOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openPinModal = () => setIsPinModalOpen(true)
  const closePinModal = () => setIsPinModalOpen(false)

  return (
    <header className="bg-blue-900 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">SecureBank</div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-blue-300">Home</a>
            <a href="/about" className="hover:text-blue-300">About Us</a>
            <a href="/services" className="hover:text-blue-300">Services</a>
            <button onClick={openPinModal} className="hover:text-blue-300">Online Banking</button>
            <a href="/contact" className="hover:text-blue-300">Contact Us</a>
            <a href="/faq" className="hover:text-blue-300">FAQ</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <a href="/" className="block py-2 hover:text-blue-300">Home</a>
            <a href="/about" className="block py-2 hover:text-blue-300">About Us</a>
            <a href="/services" className="block py-2 hover:text-blue-300">Services</a>
            <button onClick={openPinModal} className="block py-2 hover:text-blue-300 w-full text-left">
              Online Banking
            </button>
            <a href="/contact" className="block py-2 hover:text-blue-300">Contact Us</a>
            <a href="/faq" className="block py-2 hover:text-blue-300">FAQ</a>
          </div>
        )}
      </nav>
      <PinEntryModal isOpen={isPinModalOpen} onClose={closePinModal} />
    </header>
  )
}

export default Header
