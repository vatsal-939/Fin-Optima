"use client"

import { useState } from "react"

const SignupForm = ({ onBack, onLoginClick }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pin: "",
    confirmPin: "",
    agreeToTerms: false,
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your signup validation logic here
    if (!formData.fullName || !formData.email || !formData.phone || !formData.pin || !formData.confirmPin) {
      setError("Please fill in all fields")
      return
    }
    if (formData.pin !== formData.confirmPin) {
      setError("PINs do not match")
      return
    }
    if (!formData.agreeToTerms) {
      setError("Please agree to the Terms & Conditions")
      return
    }
    console.log("Signup attempt:", formData)
  }

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Create 6-Digit PIN</label>
          <input
            type="password"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            maxLength={6}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter 6-digit PIN"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Confirm PIN</label>
          <input
            type="password"
            name="confirmPin"
            value={formData.confirmPin}
            onChange={handleChange}
            maxLength={6}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm 6-digit PIN"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">I agree to the Terms & Conditions</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Back to Home
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <button type="button" onClick={onLoginClick} className="text-blue-600 hover:underline">
            Login
          </button>
        </p>
      </form>
    </div>
  )
}

export default SignupForm

