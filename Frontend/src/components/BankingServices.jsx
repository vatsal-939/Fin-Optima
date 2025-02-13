const BankingServices = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Banking Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Personal Banking</h3>
            <ul className="list-disc list-inside">
              <li>Savings Accounts</li>
              <li>Current Accounts</li>
              <li>Fixed Deposits</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Loans & Credit</h3>
            <ul className="list-disc list-inside">
              <li>Personal Loans</li>
              <li>Home Loans</li>
              <li>Business Loans</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Investment Options</h3>
            <ul className="list-disc list-inside">
              <li>Mutual Funds</li>
              <li>Stock Trading</li>
              <li>Retirement Planning</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Corporate Banking</h3>
            <ul className="list-disc list-inside">
              <li>Business Accounts</li>
              <li>Payment Solutions</li>
              <li>Trade Finance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BankingServices

