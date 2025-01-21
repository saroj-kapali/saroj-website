import React from "react";
import { Link } from "react-router-dom";
import { serviceData } from "../shared_component/sharedData";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-black to-gray-400 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl">
            Delivering exceptional services tailored to meet your needs.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card */}
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-gray-500 to to-black text-white py-12 rounded-lg shadow-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="mb-6">
              Contact us today and let’s bring your ideas to life!
            </p>
            <Link
              to={"/contact"}
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
