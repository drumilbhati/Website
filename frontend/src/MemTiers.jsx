// MemTiers.jsx
import React, { useState } from 'react';
import Subscription from './Subscription';
import './MemTiers.css';
import './App.css';

export default function MemTiers() {
  const [selectedLevel, setSelectedLevel] = useState('');

  return (
    <div className="membership-tiers">
      <h1>Select a Membership Tier</h1>
      <div className="buttons">
        <button onClick={() => setSelectedLevel('Level I')}>Level I</button>
        <button onClick={() => setSelectedLevel('Level II')}>Level II</button>
        <button onClick={() => setSelectedLevel('Level III')}>Level III</button>
      </div>

      {selectedLevel && <Subscription level={selectedLevel} />}
    </div>
  );
}
