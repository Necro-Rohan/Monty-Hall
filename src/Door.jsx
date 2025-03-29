import React from "react";

export default function Door({
  index,
  onClick,
  isSelected,
  isRevealed,
  hasPrize,
  gameOver,
}) {
  const handleClick = () => {
    if (!gameOver && !isSelected) {
      onClick(index);
    }
  };

  return (
    <div
      className={`door ${isRevealed ? "flipped" : ""}`}
      onClick={handleClick}
    >
      {isRevealed ? (
        <img
          src={hasPrize ? "/car.jpg" : "/goat.jpg"}
          alt={hasPrize ? "Prize" : "Goat"}
          width="100%"
        />
      ) : (
        ""
      )}
    </div>
  );
}
