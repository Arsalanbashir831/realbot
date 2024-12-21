import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white mt-11">
     

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-12">
        <section className="space-y-16">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              About REALBOT
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              REALBOT is an AI-powered chatbot designed to cut through the noise
              and deliver unfiltered, raw, and real responses. Forget
              sugar-coated answers—REALBOT tells you exactly what it thinks,
              based on reality, no fakery.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Our Mission
            </h3>
            <p className="text-lg text-gray-400">
              To provide an authentic conversational experience that prioritizes
              honesty and transparency. REALBOT was built to answer your
              questions directly without unnecessary fluff or fake positivity.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              What Makes REALBOT Unique?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400">
              <li className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <span className="text-blue-400 text-2xl font-bold">1</span>
                <p>
                  <strong>Unfiltered Responses:</strong> REALBOT isn't afraid to
                  tell the truth, even if it isn't what you want to hear.
                </p>
              </li>
              <li className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <span className="text-blue-400 text-2xl font-bold">2</span>
                <p>
                  <strong>AI with Personality:</strong> Built with a
                  conversational tone that feels real, not robotic.
                </p>
              </li>
              <li className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <span className="text-blue-400 text-2xl font-bold">3</span>
                <p>
                  <strong>Direct and Honest:</strong> No hidden agendas, no
                  beating around the bush—just real answers.
                </p>
              </li>
              <li className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-md">
                <span className="text-blue-400 text-2xl font-bold">4</span>
                <p>
                  <strong>Adaptive Learning:</strong> Continuously learns and
                  improves to ensure relevant and accurate responses.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>

  
    </div>
  );
};

export default Page;
