
import { useState } from 'react';
import Greeting from './Greeting';
import { useEffect } from 'react';

export default function App() {
  // let name = "MD AFFAN ANWAR";
  const [name, setName] = useState("MD AFFAN ANWAR");
  const [color, setColor] = useState("White");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  });

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName("SHEIKH")}>click for change</button>

      <h2>My rfav color is {color}!</h2>
      <button onClick={() => setColor("Black")}>Reveal color</button>

      <h2>The count is {count}!</h2>
      <button onClick={() => setCount(count + 1)}>Increase count</button>

      <h1>The time start now {count} !</h1>
    </div>
  );
}