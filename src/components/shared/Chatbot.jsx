'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, ArrowLeft } from 'lucide-react'; // Added ArrowLeft for the Back button
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    { content: 'Heya wassup!?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const router = useRouter(); // Hook to navigate to other routes

  // Function to scroll to the bottom of the messages
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { content: userMessage, sender: 'user' }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setMessages((prev) => [
          ...prev,
          { content: `Error: ${error}`, sender: 'bot' },
        ]);
        setLoading(false);
        return;
      }

      const { data } = await response.json();
      const botResponse =
        data?.choices[0]?.message?.content || 'Oops! Something went wrong.';
      setMessages((prev) => [...prev, { content: botResponse, sender: 'bot' }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { content: 'Internal Server Error. Please try again later.', sender: 'bot' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full mx-auto bg-zinc-900 text-white border-zinc-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          {/* Go Back Button */}
          <Button
            onClick={() => router.push('/')} // Navigate back to the root route
            className="flex items-center space-x-2 text-white hover:text-blue-400"
            variant="solid"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </Button>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Bot className="w-6 h-6" />
            THE REALBOT
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4" ref={scrollRef}>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-2 mb-4 ${
                message.sender === 'user' ? 'justify-end' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {message.sender === 'bot' && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback>RB</AvatarFallback>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 ${
                  message.sender === 'user' ? 'bg-blue-600' : 'bg-zinc-800'
                }`}
              >
                {message.content}
              </div>
              {message.sender === 'user' && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback>U</AvatarFallback>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                </Avatar>
              )}
            </motion.div>
          ))}
          {loading && (
            <div className="flex items-center gap-2">
              <div className="bg-zinc-800 text-gray-400 p-3 rounded-lg">
                Typing...
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex w-full gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-zinc-800 border-zinc-700 text-white placeholder-zinc-400"
            disabled={loading}
          />
          <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
            <Send className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </motion.form>
      </CardFooter>
    </Card>
  );
};
