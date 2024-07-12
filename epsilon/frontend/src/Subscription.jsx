// import React from 'react';

// export default function Subscription() {
//   return (
//     <div>
//       <h2>Subscription Details</h2>
//       <p>Here are the details for the subscription...</p>
//       <button>Level I</button>
//       <button>Level II</button>
//       <button>Level III</button>

//     </div>
//   );
// }

// Subscription.jsx
import React from 'react';

export default function Subscription({ level }) {
  const subscriptionDetails = {
    'Level I': {
      price: '$5/month',
      benefits: ['Access to basic content', 'Standard Definition'],
    },
    'Level II': {
      price: '$10/month',
      benefits: ['Access to all content', 'High Definition', 'No ads'],
    },
    'Level III': {
      price: '$15/month',
      benefits: ['Access to all content', 'Ultra High Definition', 'No ads', 'Offline download'],
    },
  };

  const details = subscriptionDetails[level];

  return (
    <div className="subscription-details">
      <h2>{level} Subscription</h2>
      <p>Price: {details.price}</p>
      <h3>Benefits:</h3>
      <ul>
        {details.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
}
