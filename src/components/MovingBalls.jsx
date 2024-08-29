import React from 'react';
import { motion } from 'framer-motion';
import './MovingBalls.css';

const balls = Array.from({ length: 20 }, (_, i) => i); // Create an array of 10 balls

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const MovingBalls = () => {
  return (
    <>
      <div className="balls-container">
        {balls.map((ball, index) => (
          <motion.div
            key={index}
            className="ball"
            animate={{
              x: [0, getRandomInt(-500, 500), getRandomInt(-800, 800), getRandomInt(-400, 400), 0],
              y: [0, getRandomInt(-500, 500), getRandomInt(-800, 800), getRandomInt(-400, 400), 0],
            }}
            transition={{
              duration: 5 + index, // Adjusted duration for smoother animation
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MovingBalls;
