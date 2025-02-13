"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const offers = [
  {
    title: "Diwali Loan Offer",
    description: "Get 10% Cashback on Home Loans!",
    bgColor: "bg-orange-100",
  },
  {
    title: "Festive Season FD",
    description: "Earn up to 7.5% interest on Fixed Deposits",
    bgColor: "bg-green-100",
  },
  {
    title: "Credit Card Bonanza",
    description: "5% extra cashback on all festive purchases",
    bgColor: "bg-purple-100",
  },
];

const SpecialOffers = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % offers.length);
  };

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Special Festival Offers</h2>
        <div className="relative">
          <div className={`${offers[currentOffer].bgColor} p-8 rounded-lg shadow-md text-center`}>
            <h3 className="text-2xl font-bold mb-4">{offers[currentOffer].title}</h3>
            <p className="text-xl mb-6">{offers[currentOffer].description}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Check Offer
            </button>
          </div>
          <button
            onClick={prevOffer}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <HiChevronLeft size={24} />
          </button>
          <button
            onClick={nextOffer}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
