import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  async function donate() {
    const amount = document.getElementById('donationAmount').value;
    const response = await fetch('/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount })
    });
    const data = await response.json();
    alert('Donation successful: ' + JSON.stringify(data));
  }
  
  async function getDonations() {
    const address = document.getElementById('donorAddress').value;
    const response = await fetch(`/donations/${address}`);
    const data = await response.json();
    document.getElementById('donations').innerHTML = JSON.stringify(data, null, 2);
  }

  return (
    <>
      <h1>Charity Tracker</h1>
      <div>
          <h2>Donate</h2>
          <input type="text" id="donationAmount" placeholder="Amount in Ether" />
          <button onclick="donate()">Donate</button>
      </div>
      <div>
          <h2>Track Donations</h2>
          <input type="text" id="donorAddress" placeholder="Your Ethereum Address" />
          <button onclick="getDonations()">Get Donations</button>
          <div id="donations"></div>
      </div>
    </>
  )
}

export default App
