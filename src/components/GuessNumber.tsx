"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const GuessNumber = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber);
  const [guess, setGuess] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(0);
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  const handleGuess = () => {
    if (gameOver) return;
    if (!guess) {
      toast.error("please enter valid number");
    }

    if (guess == randomNumber) {
      toast.success("Congratulation ons! You guessed the number!");
      setGameOver(true);
    } else if (guess < randomNumber) {
      toast.error("The number is greater than your guess");
    } else {
      toast.error("The number is smaller than your guess");
    }

    setAttempts(attempts + 1);
    if (attempts + 1 >= 3 && guess !== randomNumber) {
      toast.error(
        `Game Over! The was ${randomNumber}. Click 'Start Over' to try again`
      );
      setGameOver(true);
    }
  };

  const handleStartOver = () => {
    setRandomNumber(generateRandomNumber());
    setGuess(0);
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <>
      <Toaster />
      <h1 className="font-bold text-xl text-center mb-4">
        Guess the number between 1 to 100
      </h1>
      <div className="flex justify-center gap-6 mb-2">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value as any)}
          placeholder="Enter your guess"
          className="input input-bordered"
          autoFocus
          disabled={gameOver}
        />
        <button
          className="btn btn-primary"
          disabled={gameOver}
          type="submit"
          onClick={handleGuess}
        >
          Submit
        </button>
      </div>
      {gameOver && (
        <button
          className="btn btn-accent text-center mx-auto flex"
          onClick={handleStartOver}
        >
          Start Over
        </button>
      )}
    </>
  );
};

export default GuessNumber;
