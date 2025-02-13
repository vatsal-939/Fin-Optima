const QuickAccessPanel = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="/login"
            className="bg-blue-100 p-6 rounded-lg text-center hover:bg-blue-200 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Login/Register</h3>
            <p>Access your account securely</p>
          </a>
          <a
            href="/balance"
            className="bg-green-100 p-6 rounded-lg text-center hover:bg-green-200 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Check Balance</h3>
            <p>View your account balance</p>
          </a>
          <a
            href="/transfer"
            className="bg-yellow-100 p-6 rounded-lg text-center hover:bg-yellow-200 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Transfer Money</h3>
            <p>Send money securely</p>
          </a>
          <a
            href="/loan"
            className="bg-purple-100 p-6 rounded-lg text-center hover:bg-purple-200 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">Loan Applications</h3>
            <p>Apply for loans easily</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default QuickAccessPanel

