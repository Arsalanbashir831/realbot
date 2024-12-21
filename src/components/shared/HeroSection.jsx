'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <main className="container mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <AnimatedText />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl text-center font-medium"
          >
            Bringing THE REALBOT to Everyone
          </motion.h2>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
          >
            {/* Learn More Button */}
            <Button variant="link">
              <Link href="/about" className="text-xl text-white hover:text-gray-300 group">
                Learn more
              </Link>
            </Button>

            {/* Try Now Button */}
            <Button variant="link" className="text-xl text-white hover:text-gray-300 group">
              <Link href="/chat" className="flex items-center">
                Try now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
