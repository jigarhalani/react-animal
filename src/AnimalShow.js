import cat from "./svg/cat.svg";
import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import "./AnimalShow.css"
import { useState } from "react";

const svgImage = {
  cat,
  bird,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
        <img className="animal" src={svgImage[type]} alt="animal"></img>
        <img  className="heart" src={heart} alt="total likes" 
            style={{ width: 10 + 10 * clicks + "px"}}
        ></img>
    </div>
  );
}

export default AnimalShow;
