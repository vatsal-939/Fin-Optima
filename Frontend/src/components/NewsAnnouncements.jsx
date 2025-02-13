const NewsAnnouncements = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Latest News & Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">New Interest Rates</h3>
            <p className="text-gray-600 mb-4">
              We've updated our savings account interest rates. Check out the new rates!
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mobile App Update</h3>
            <p className="text-gray-600 mb-4">Our mobile app now includes biometric login for enhanced security.</p>
            <a href="#" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">New Branch Opening</h3>
            <p className="text-gray-600 mb-4">We're excited to announce the opening of our new branch in downtown!</p>
            <a href="#" className="text-blue-600 hover:underline">
              Find Locations
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsAnnouncements

