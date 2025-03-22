import React, { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [hearts, setHearts] = useState([]);

  const handleClick = (event) => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * window.innerWidth, // Random X position
      top: event.clientY, // Start from click Y position
    };
    setHearts((prev) => [...prev, newHeart]);

    // Remove the heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 3000);
  };

  // const handleClick = () => {
  //   alert("Image clicked!");
  // };




  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen cursor-pointer">
      <img src="https://res.cloudinary.com/drthsaowz/image/upload/v1742668064/image-removebg-preview_frysix.png" onClick={handleClick} width="90" />
      <p className="text-lg">A gift for lil casu !</p>

      {/* Render hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -200 }}
          transition={{ duration: 3, ease: "easeOut" }} // FIXED EASING FUNCTION
          className="absolute text-3xl"
          style={{ left: `${heart.left}px`, top: `${heart.top}px` }}
        >
          ❤️‍🔥
        </motion.div>
      ))}
      </div>

    </>
  )
}

export default App
