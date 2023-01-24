import { useState } from "react";
import  AnimalShow  from './AnimalShow';

function getRandomAnimal() {
  const animals = ["bird", "cow", "horse", "cat", "dog", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
  const [animals, setAnimals] = useState([]);
  const randomAnimals = animals.map((animal,index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  const handleClick = () => {
    setAnimals([...animals,getRandomAnimal()]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {randomAnimals}
    </div>
  );
}

export default App;
