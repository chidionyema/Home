import React, { useState } from 'react';

function Donation() {
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Integrate with payment gateway here
    console.log("Submitted donation amount: ", amount);
    setSubmitted(true);
  };

  return (
    <div className="donation-container">
      <h2>Support Our Cause</h2>
      <p>Your generous donation helps us continue our work.</p>

      {submitted ? (
        <div>
          <h3>Thank you for your donation!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Donation Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
          <button type="submit">Donate</button>
        </form>
      )}
    </div>
  );
}

export default Donation;
