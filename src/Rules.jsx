function Rules({ onClose }) {
  return (
    <div className="rules-container">
      <div className="rules">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Rules of Play</h2>
        <ul>
          <li>
            The goal of this game is to choose the winning door from three
            available doors. Behind the winning door is a new car, and behind
            the other two doors are goats.
          </li>
          <li>First, the player must choose one of the three doors.</li>
          <li>
            Next, the game show host will reveal a goat from behind one of the
            other two doors (the host always knows where the car is and will
            never reveal it).
          </li>
          <li>
            Lastly, the player can either open the door they chose first, or
            they can switch to the other closed door. If the door they open
            reveals a new car, the player wins!
          </li>
          <li>
            The player can play multiple rounds, and the game will keep track of
            the number of wins and losses.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
