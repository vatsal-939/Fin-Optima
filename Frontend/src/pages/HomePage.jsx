import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import QuickAccessPanel from '../components/QuickAccessPanel'
import BankingServices from '../components/BankingServices'
import SecurityFeatures from '../components/SecurityFeatures'
import SpecialOffers from '../components/SpecialOffers'
import NewsAnnouncements from '../components/NewsAnnouncements'
import CustomerTestimonials from '../components/CustomerTestimonials'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <QuickAccessPanel />
      <BankingServices />
      <SecurityFeatures />
      <SpecialOffers />
      <NewsAnnouncements />
      <CustomerTestimonials />
      <Footer />
    </main>
  )
}

export default HomePage