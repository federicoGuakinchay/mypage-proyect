import { useState, useEffect } from 'react';

function Typewriter({ text, speed = 100, pauseTime = 1500 }) {
  const [displayedText, setDisplayedText] = useState(''); // Text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting or typing
  const [index, setIndex] = useState(0); // Current index of the character
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Index of the current text in case of array

  const currentText = Array.isArray(text) ? text[currentTextIndex] : text; // Handle multiple text entries

  useEffect(() => {
    let timeoutId;

    const typeWriterEffect = () => {
      if (isDeleting) {
        // Deleting phase
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
          timeoutId = setTimeout(typeWriterEffect, speed); // Use deleteSpeed here for deletion speed
        } else {
          setIsDeleting(false);
          if (Array.isArray(text)) {
            // Move to the next text in the array
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
          }
        }
      } else {
        // Typing phase
        if (index < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
          timeoutId = setTimeout(typeWriterEffect, speed); // Schedule the next character typing
        } else {
          // Pause before starting deletion
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    timeoutId = setTimeout(typeWriterEffect, speed); // Initial trigger for the typing effect

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, [index, isDeleting, speed, currentText, text, pauseTime]); // Only re-trigger on important state changes

  return <span className='text-typewriter'>Only {displayedText}<span className='blink'>_</span></span>;
}

export default Typewriter;