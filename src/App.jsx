import { useState } from "react";
import Door from "./Door";
import "./styles.css";
import Rules from "./Rules";

const getRandomPrizeDoor = () => Math.floor(Math.random() * 3);

function App() {
  const [prizeDoor, setPrizeDoor] = useState(getRandomPrizeDoor);
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [revealedDoor, setRevealedDoor] = useState(null);
  const [finalChoice, setFinalChoice] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const handleDoorClick = (doorIndex) => {
    if (selectedDoor === null) {
      setSelectedDoor(doorIndex);
      const possibleDoors = [0, 1, 2].filter(
        (d) => d !== doorIndex && d !== prizeDoor
      );
      setRevealedDoor(
        possibleDoors[Math.floor(Math.random() * possibleDoors.length)]
      );
    }
  };

  const handleFinalChoice = (switchDoor) => {
    if (gameOver) return;

    const finalDoor = switchDoor
      ? [0, 1, 2].find((d) => d !== selectedDoor && d !== revealedDoor)
      : selectedDoor;

    setFinalChoice(finalDoor);
    setGameOver(true);

    if (finalDoor === prizeDoor) {
      setWins((prevWins) => prevWins + 1);
    } else {
      setLosses((prevLosses) => prevLosses + 1);
    }
  };

  const resetGame = () => {
    setPrizeDoor(getRandomPrizeDoor());
    setSelectedDoor(null);
    setRevealedDoor(null);
    setFinalChoice(null);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>
        Goat <img src="/goat.jpg" width="50px"></img> or Glory{" "}
        <img src="/car.jpg" width="50px"></img>? The Ultimate Monty Hall Game 🎭
      </h1>
      
      <button onClick={() => setShowRules(true)}>Rules</button>
      {showRules && <Rules onClose={() => setShowRules(false)} />}

      <h2>Pick a door! 🚪</h2>

      <div className="doors">
        {[0, 1, 2].map((door) => (
          <Door
            key={door}
            index={door}
            onClick={handleDoorClick}
            isSelected={door === selectedDoor}
            isRevealed={gameOver || door === revealedDoor}
            hasPrize={door === prizeDoor}
            gameOver={gameOver}
          />
        ))}
      </div>

      {selectedDoor !== null && !gameOver && (
        <div className="decision-buttons">
          <button onClick={() => handleFinalChoice(false)}>Stick</button>
          <button onClick={() => handleFinalChoice(true)}>Switch</button>
        </div>
      )}

      {gameOver && (
        <div className="result">
          {finalChoice === prizeDoor ? "🎉 You Win! 🎁" : "😢 You Lose! 🐐"}
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}

      <div className="scoreboard">
        <h2>Scoreboard 📊</h2>
        <p>✅ Wins: {wins}</p>
        <p>❌ Losses: {losses}</p>
      </div>
    </div>
  );
}

export default App;
