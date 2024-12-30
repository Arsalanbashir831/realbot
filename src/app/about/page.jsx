'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutUsPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white font-sans mt-24">
      {/* Header Section */}
      <header className="py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            About REALBOT
          </h1>
          <p className="text-xl text-gray-400 mt-6 max-w-4xl mx-auto">
            Your ultimate AI companion, cutting through the noise with raw, authentic, and unfiltered responses. Say goodbye to fluff—REALBOT delivers truth and clarity.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-8 py-16 space-y-20">
        {/* Mission Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-10 shadow-lg">
          <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Our Mission
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            REALBOT is here to redefine online interactions with honesty and transparency at the forefront. Our mission is to provide a genuine, no-nonsense conversational experience that keeps authenticity at its core.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Why Choose REALBOT?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
            ].map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-900 p-8 rounded-lg shadow-md flex flex-col items-start space-y-4 hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-blue-400 text-4xl font-extrabold">{feature.id}</div>
                <h3 className="text-2xl font-semibold text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Join the REALBOT Revolution
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Ready to experience unfiltered, authentic AI conversations? Embark on a journey to discover the truth—one question at a time.
          </p>
          <button
            onClick={() => router.push('/chat')}
            className="mt-8 px-10 py-4 bg-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Start Chatting Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;
