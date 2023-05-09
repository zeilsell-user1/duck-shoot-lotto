import { useState } from "react";

import { GameOverDialog } from "./game-over-dialog";
import { MovingImages } from "./moving-images";
import { NumberList } from "./number-list";

interface GameProps {
  width:number;
  height:number;
  onGameEnd: () => void;
}

export const Game = ({ width, height, onGameEnd }: GameProps): JSX.Element => {
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    (): number[] => {
      return Array.from({ length: 49 }, (_, i) => i + 1);
    }
  );

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleMovingImageClick = (number: number): void => {
    setSelectedNumbers((prevNumbers) => {
      if (!prevNumbers.includes(number)) {
        return [...prevNumbers, number];
      }
      return prevNumbers;
    });

    setAvailableNumbers(availableNumbers.filter((num) => num !== number));
    if (selectedNumbers.length == 5) {setGameOver(true);} // 0-5 is 6 elements
  };

  return (
    <div>
      <div style={{width: width, height: height }}>
        {gameOver && (
          <GameOverDialog
            selectedNumbers={selectedNumbers}
            onRestart={():void => {
              setSelectedNumbers([]);
              setGameOver(false);
              onGameEnd();
            }}
          />
        )}
        {!gameOver && (
          <MovingImages
            width={width}
            height={height}
            onMovingImageClick={handleMovingImageClick}
            availableNumbers={availableNumbers}
          />
        )}
      </div>
      <div>
        <NumberList numbers={selectedNumbers} />
      </div>
    </div>
  );
};
