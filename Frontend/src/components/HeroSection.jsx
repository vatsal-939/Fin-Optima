"use client"

import { useState } from "react"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

const HeroSection = () => {
  const [activeForm, setActiveForm] = useState(null) // null, 'login', or 'signup'

  const handleBack = () => {
    setActiveForm(null)
  }

  const renderContent = () => {
    switch (activeForm) {
      case "login":
        return <LoginForm onBack={handleBack} />
      case "signup":
        return <SignupForm onBack={handleBack} onLoginClick={() => setActiveForm("login")} />
      default:
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Secure & Fast Banking at Your Fingertips</h1>
            <p className="text-xl mb-8">Experience the future of banking with SecureBank</p>
            <div className="space-x-4">
              <button
                onClick={() => setActiveForm("login")}
                className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
              >
                Login
              </button>
              <button
                onClick={() => setActiveForm("signup")}
                className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto px-6">{renderContent()}</div>
    </section>
  )
}

export default HeroSection

