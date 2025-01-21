import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl">
            A passionate web developer and translator striving to create
            beautiful and functional digital experiences.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Who Am I?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Hello! My name is [Your Name]. I have a diverse background as a
            translator with 5 years of experience in South Korea and expertise
            in web development. With skills in React, Tailwind CSS, and more, I
            love building responsive, user-friendly applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HTML & CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Git & GitHub",
              "Microsoft Office",
              "Translation (Korean, Hindi, Nepali, English)",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center"
              >
                <span className="text-lg font-semibold text-gray-700">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            My Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I aim to create meaningful digital products and bridge linguistic
            gaps through translation. My mission is to make technology more
            accessible and impactful for everyone.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
