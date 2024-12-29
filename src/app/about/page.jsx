'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutUsPage = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white mt-10">
      {/* Header Section */}
      <header className=" py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            About REALBOT
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Your unfiltered AI companion, delivering raw, authentic, and no-nonsense responses to your questions. Forget sugar-coating—REALBOT keeps it real.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Mission Section */}
        <section className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Our Mission
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            At REALBOT, we aim to revolutionize online interactions by offering a genuine conversational experience. Honesty and transparency are our core values—we’re here to answer your questions with directness, accuracy, and zero fluff.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-4xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Why Choose REALBOT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                title: "Unfiltered Responses",
                description:
                  "REALBOT isn't afraid to tell the truth, even when it’s hard to hear. You’ll always get straight answers."
              },
              {
                id: 2,
                title: "AI with Personality",
                description:
                  "Forget boring chatbots. REALBOT has a conversational tone that feels human and relatable."
              },
              {
                id: 3,
                title: "Direct and Honest",
                description:
                  "No hidden agendas or sugar-coating—REALBOT tells it like it is."
              },
              {
                id: 4,
                title: "Adaptive Learning",
                description:
                  "REALBOT continuously learns and improves, ensuring that it stays relevant and accurate."
              }
            ].map(feature => (
              <div
                key={feature.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-400 text-3xl font-bold">{feature.id}</div>
                <h3 className="text-xl font-semibold text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Join the REALBOT Revolution
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-xl mx-auto">
            Ready to experience unfiltered, authentic AI conversations? Dive in and discover the truth, one question at a time.
          </p>
          <button onClick={()=>router.push('/chat')} className="mt-6 px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300">
            Start Chatting Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
