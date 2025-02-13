"use client"

import { useState } from "react"

const LoginForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    emailPhone: "",
    pin: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
    if (!formData.emailPhone || !formData.pin) {
      setError("Please fill in all fields")
      return
    }
    console.log("Login attempt:", formData)
  }

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email / Phone Number</label>
          <input
            type="text"
            name="emailPhone"
            value={formData.emailPhone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email or phone number"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">6-Digit PIN</label>
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
        <div className="text-right">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Back to Home
        </button>
      </form>
    </div>
  )
}

export default LoginForm

