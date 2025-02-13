"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-300">
              About Us
            </Link>
            <Link href="/services" className="hover:text-blue-300">
              Services
            </Link>
            <button onClick={openPinModal} className="hover:text-blue-300">
              Online Banking
            </button>
            <Link href="/contact" className="hover:text-blue-300">
              Contact Us
            </Link>
            <Link href="/faq" className="hover:text-blue-300">
              FAQ
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/" className="block py-2 hover:text-blue-300">
              Home
            </Link>
            <Link href="/about" className="block py-2 hover:text-blue-300">
              About Us
            </Link>
            <Link href="/services" className="block py-2 hover:text-blue-300">
              Services
            </Link>
            <button onClick={openPinModal} className="block py-2 hover:text-blue-300 w-full text-left">
              Online Banking
            </button>
            <Link href="/contact" className="block py-2 hover:text-blue-300">
              Contact Us
            </Link>
            <Link href="/faq" className="block py-2 hover:text-blue-300">
              FAQ
            </Link>
          </div>
        )}
      </nav>
      <PinEntryModal isOpen={isPinModalOpen} onClose={closePinModal} />
    </header>
  )
}

export default Header

