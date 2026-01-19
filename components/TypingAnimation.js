'use client';
import { useState, useEffect } from 'react';

export default function TypingAnimation({ titles }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
      
      const deleteTimer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 70);
      
      return () => clearTimeout(deleteTimer);
    } else {
      if (displayText === currentTitle) {
        setIsPaused(true);
        return;
      }
      
      const typeTimer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 100);
      
      return () => clearTimeout(typeTimer);
    }
  }, [displayText, isDeleting, isPaused, currentTitleIndex, titles]);

  return (
    <span className="inline-block whitespace-nowrap">
      {displayText}
      <span className={isPaused ? 'inline-block ml-1 animate-[blink_0.6s_ease-in-out_infinite]' : 'inline-block ml-1'}>|</span>
    </span>
  );
}