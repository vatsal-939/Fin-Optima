"use client"

import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const PinEntryModal = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")

  const handlePinChange = (e) => {
    const value = e.target.value
    if (/^\d{0,6}$/.test(value)) {
      setPin(value)
      setError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin.length === 6) {
      // Here you would typically validate the PIN with your backend
      console.log("PIN submitted:", pin)
      // For demo purposes, let's pretend the correct PIN is '123456'
      if (pin === "123456") {
        alert("Login successful!")
        onClose()
      } else {
        setError("Incorrect PIN. Please try again.")
      }
    } else {
      setError("Please enter a 6-digit PIN.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Enter PIN</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter 6-digit PIN"
            className="w-full p-2 mb-4 border rounded text-center text-2xl tracking-widest"
            maxLength={6}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot PIN?
          </a>
        </p>
      </div>
    </div>
  )
}

export default PinEntryModal
