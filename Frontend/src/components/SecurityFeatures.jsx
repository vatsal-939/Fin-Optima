import { FaShieldAlt, FaLock, FaExclamationTriangle } from "react-icons/fa";

const SecurityFeatures = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Security Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p>SSL encryption and Two-Factor Authentication for all transactions</p>
          </div>
          <div className="text-center">
            <FaLock className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
            <p>Adherence to RBI, FDIC, and PCI DSS standards</p>
          </div>
          <div className="text-center">
            <FaExclamationTriangle className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Fraud Protection</h3>
            <p>Advanced cybersecurity measures to protect your accounts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
