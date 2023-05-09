import { useEffect, useState } from "react";

import duck from "./../assets/yellow-duck.png";

interface DuckProps {
  number: number;
  onClick: (number: number) => void;
}

export const Duck = ({ number, onClick }: DuckProps): JSX.Element => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
  }, [number]);

  const handleClick = (): void => {
    if (!clicked) {
      onClick(number);
      setClicked(true);
    }
  };

  return (
    <div className={`duck ${clicked ? "disabled" : ""}`} onClick={handleClick}>
      <img src={duck} alt="duck" />
      <div className="number">{number}</div>
    </div>
  );
};
