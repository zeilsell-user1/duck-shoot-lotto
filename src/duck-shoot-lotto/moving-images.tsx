import { useEffect,useState } from "react";

import { Duck } from "./duck";

interface MovingImagesProps {
  width:number;
  height:number;
  onMovingImageClick: (number: number) => void;
  availableNumbers: number[];
}

export const MovingImages = ({
  width,
  height,
  onMovingImageClick,
  availableNumbers,
}: MovingImagesProps): JSX.Element => {
  const [duck1Position, setDuck1Position] = useState({ x: 0, y: 0 });
  const [duck2Position, setDuck2Position] = useState({ x: 0, y: 0 });
  const [duck3Position, setDuck3Position] = useState({ x: 0, y: 0 });
  const [duck1Number, setDuck1Number] = useState<number>(1);
  const [duck2Number, setDuck2Number] = useState<number>(2);
  const [duck3Number, setDuck3Number] = useState<number>(3);

  const handleDuckClick = (number: number): void => {
    onMovingImageClick(number);
  };

  const getRandomNumbers = (array: number[], count: number): number[] => {
    const randomNumbers: number[] = [];
    let i = 0;

    while (i < count) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!randomNumbers.includes(array[randomIndex])) {
        randomNumbers.push(array[randomIndex]);
        i++;
      }
    }

    return randomNumbers;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (availableNumbers.length >= 3) {
        const duckNumbers = getRandomNumbers(availableNumbers, 3);
        setDuck1Number(duckNumbers[0]);
        setDuck2Number(duckNumbers[1]);
        setDuck3Number(duckNumbers[2]);

        setDuck1Position({
          x: Math.floor(Math.random() * (width-100)),
          y: Math.floor(Math.random() * (height-100)),
        });
        setDuck2Position({
          x: Math.floor(Math.random() * (width-100)),
          y: Math.floor(Math.random() * (height-100)),
        });
        setDuck3Position({
          x: Math.floor(Math.random() * (width-100)),
          y: Math.floor(Math.random() * (height-100)),
        });
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [availableNumbers]);

  return (
    <div>
      <div
        className="moving-image"
        style={{ top: duck1Position.y, left: duck1Position.x }}
      >
        <Duck number={duck1Number} onClick={handleDuckClick} />
      </div>
      <div
        className="moving-image"
        style={{ top: duck2Position.y, left: duck2Position.x }}
      >
        <Duck number={duck2Number} onClick={handleDuckClick} />
      </div>
      <div
        className="moving-image"
        style={{ top: duck3Position.y, left: duck3Position.x }}
      >
        <Duck number={duck3Number} onClick={handleDuckClick} />
      </div>
    </div>
  );
};
