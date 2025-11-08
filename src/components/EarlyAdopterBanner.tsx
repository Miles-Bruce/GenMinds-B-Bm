import { useEffect, useState } from "react";

const messages = [
  '⭐ Sign up today and claim your exclusive EARLY ADOPTER badge!',
  '🚀 Start your journey with ThePromptSpace and earn your EARLY ADOPTER badge.',
  '🌟 Unlock your profile\'s first badge — EARLY ADOPTER — when you join now.',
  '🔥 Your AI journey begins here. Grab the EARLY ADOPTER badge today.',
  '💡 Recognition starts early — sign up and get the EARLY ADOPTER badge.',
  '🎯 Be part of something impactful. Secure your EARLY ADOPTER badge now.'
];

const EarlyAdopterBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6 overflow-hidden h-12 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              index === currentIndex
                ? 'opacity-100 translate-y-0'
                : index === (currentIndex - 1 + messages.length) % messages.length
                ? 'opacity-0 -translate-y-8'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-base md:text-lg font-bold text-center px-4 gradient-text animate-shimmer">
              {message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarlyAdopterBanner;
