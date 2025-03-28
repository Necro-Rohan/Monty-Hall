function Rules({ onClose }) {
  return (
    <div className="rules-container">
      <div className="rules">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Rules of Play</h2>
        <ul>
          <li>Pick one of the three doors.</li>
          <li>Behind one door is a car, the others have goats.</li>
          <li>The host will reveal a goat from the remaining doors.</li>
          <li>You can stick with your choice or switch doors.</li>
          <li>If you choose the car, you win!</li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
