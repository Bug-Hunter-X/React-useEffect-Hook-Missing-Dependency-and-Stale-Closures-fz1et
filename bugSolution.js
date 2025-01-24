```javascript
import React, { useState, useEffect } from 'react';

function MyComponent({ someProp }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct conditional rendering logic
    if (count > 0 && someProp) {
      console.log('Count is greater than 0 and someProp is true.');
    }
  }, [count, someProp]); // Added someProp to dependencies

  return (
    <div>
      <p>Count: {count}</p>
      <p>someProp: {someProp ? 'true' : 'false'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default MyComponent;
```