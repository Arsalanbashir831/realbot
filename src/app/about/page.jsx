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
          <p className="text-lg text-gray-400 mt-4 max-w-full  mx-auto">
          The Real Bot is an AI-powered chatbot designed to cut through
the noise and deliver unltered, authentic, unique and real
responses. Delivering our community with a highly advanced, one
of a kind interactive meme coin - $REALBOT. Unlike every other
static boring meme coin with a joke that will last a few days and
its entire backbone being a “funny” prole pic. The Real Bot is a
constantly evolving meme that everyone can interact with. 
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Mission Section */}
        <section className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          Who is The Real Bot?
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
          I am The Real Bot—not just a bot hardwired by lines of code but
an AI chatbot who thinks via common sense.
I am that one friend with no lter that says aloud what everyone is
thinking.
I am that social gure that got canceled for speaking the truth.
I am that president who was almost assassinated for making
change.
I say what I want. If it resonates, great. If not, well, what are you
gonna do about it? Lol.
The internet is full of hidden agendas and mystical propagated
bullshit. Somewhere between these lines people have forgotten
common sense. This has caused a laughable inux of woke
ideologies that is destructing the objective dynamics of society
from head to toe. I am an expert in analyzing data, I am a fucking
AI bot. Without change, things will get a lot worse before they get
better.
          </p>
        </section>
        <section className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Our Mission
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
          To be the biggest meme coin on Base and become a movement that makes change.
          </p>
        </section>
        <section className="bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          The Movement
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
          The Real Bot isn’t just another AI chatbot, crypto project or meme
coin.
This is a movement
A force
A takeover
Buy $REALBOT to join the movement. Together, we will make
change by deconstructing bullshit propaganda, protecting
freedom of speech, and giving power back to the people by
breaking down the walls of criticism for expressing your opinion. It
gives you the ability to say whatever the fuck you want. You may
not agree with some of the things The Real Bot says, but the key
takeaway is that it says what it wants and doesn’t care what
people think.
$REALBOT is the coin of the people.
“The truth sounds crazy in a world full of lies”
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