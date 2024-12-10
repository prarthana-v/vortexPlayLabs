import React, { useEffect, useState } from "react";
import "./Type.css";

const TypingEffect = () => {
  const textArray = ["hard", "fun", "a journey", "LIFE"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text

  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (isTyping && charIndex < textArray[textArrayIndex].length) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + textArray[textArrayIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingDelay);
    } else if (!isTyping && charIndex > 0) {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          prev.slice(0, prev.length - 1)
        );
        setCharIndex((prev) => prev - 1);
      }, erasingDelay);
    } else if (isTyping && charIndex === textArray[textArrayIndex].length) {
      timer = setTimeout(() => {
        setIsTyping(false);
      }, newTextDelay);
    } else if (!isTyping && charIndex === 0) {
      setIsTyping(true);
      setTextArrayIndex((prev) =>
        prev + 1 < textArray.length ? prev + 1 : 0
      );
    }
    return () => clearTimeout(timer);
  }, [charIndex, isTyping, textArray, textArrayIndex, typingDelay, erasingDelay, newTextDelay]);

  return (
    <p className="effect text-white text-center text-4xl sm:text-5xl lg:text-7xl font-semibold poppins" style={{ lineHeight: '70px' }}>
      Your Gateway to Digital  <span className="text-red-500 font-semibold bg-blur"> Innovation {currentText}</span>
      <span className={`cursor ${isTyping ? "typing" : ""}`}>&nbsp;</span>
    </p>
  );
};

export default TypingEffect;
