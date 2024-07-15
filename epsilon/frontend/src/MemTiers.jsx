// import './index.css'
// export default function MemTiers() {
//   return (
//     <>
//       <div className="membership-tiers">
//         <h1>Select a Membership Tier</h1>
//       </div>

//       <button onClick={() => 'Subscription.jsx'  }>Level 1</button> 
//       {/* <script src = "/frontend/src/Subscription.jsx"></script> */}
//     </>
   
//   );
// }

// MemTiers.jsx
import React, { useState } from 'react';
import './MemTiers.css';
import Subscription from './Subscription';
import Navbar from './Navbar';
import { List } from '@mui/joy';

export default function MemTiers() {
  const [selectedLevel, setSelectedLevel] = useState('');

  return (
    <div className="membership-tiers">
      <List sx={{width:"5%", paddingLeft: 5, marginTop: 5}}>
        <Navbar/>
      </List>
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

// MemTiers.jsx
// import React, { useState } from 'react';
// import './index.css';
// import Subscription from './Subscription';

// export default function MemTiers() {
//   const [showSubscription, setShowSubscription] = useState(false);

//   return (
//     <>
//       <div className="membership-tiers">
//         <h1>Select a Membership Tier</h1>
//       </div>

//       <button onClick={() => setShowSubscription(true)}>Plans</button>

//       {showSubscription && <Subscription />}
//     </>
//   );
// }
