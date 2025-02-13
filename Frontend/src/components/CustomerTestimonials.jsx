const CustomerTestimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "SecureBank has made managing my finances so much easier. Their mobile app is intuitive and secure!"
            </p>
            <p className="font-semibold">- Sarah J.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "I've been a customer for over 10 years, and the service has always been top-notch. Highly recommended!"
            </p>
            <p className="font-semibold">- Michael T.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              "The loan process was smooth and quick. The staff was very helpful throughout."
            </p>
            <p className="font-semibold">- Emily R.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials

