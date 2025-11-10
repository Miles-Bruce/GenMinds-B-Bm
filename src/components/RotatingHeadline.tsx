import { useEffect, useState } from "react";

interface RotatingHeadlineProps {
  staticText: string;
  words: string[];
  intervalMs?: number;
}

const RotatingHeadline = ({ staticText, words, intervalMs = 1500 }: RotatingHeadlineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [words.length, intervalMs, isPaused]);

  return (
    <h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {staticText}{" "}
      <span className="relative inline-block min-w-[200px] md:min-w-[300px]">
        {words.map((word, index) => (
          <span
            key={index}
            className={`absolute left-0 gradient-text transition-all duration-400 ${
              index === currentIndex
                ? 'opacity-100 translate-y-0'
                : index === (currentIndex - 1 + words.length) % words.length
                ? 'opacity-0 -translate-y-4'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {word}
          </span>
        ))}
      </span>
    </h1>
  );
};

export default RotatingHeadline;
