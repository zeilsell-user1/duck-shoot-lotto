import { useState } from "react";
import { Duck } from "./duck";

interface GameProps {
  onFinish: (numbers: number[]) => void;
}

export const Game = ({ onFinish }: GameProps): JSX.Element => {
  const [selectedDucks, setSelectedDucks] = useState<number[]>([]);

  function handleDuckClick(number: number): void {
    if (selectedDucks.includes(number)) {
      setSelectedDucks(selectedDucks.filter((n) => n !== number));
    } else if (selectedDucks.length < 6) {
      setSelectedDucks([...selectedDucks, number]);
    }
  }

  function handleFinishClick(): void {
    if (selectedDucks.length === 6) {
      onFinish(selectedDucks);
    }
  }

  const ducks: JSX.Element[][] = [];
  for (let i = 1; i <= 7; i++) {
    const row: JSX.Element[] = [];
    for (let j = 1; j <= 7; j++) {
      const number = (i - 1) * 7 + j;
      const disabled = selectedDucks.length === 6 && !selectedDucks.includes(number);
      row.push(
        <Duck key={number} number={number} disabled={disabled} onClick={handleDuckClick} />
      );
    }
    ducks.push(row);
  }

  return (
    <div className="game">
      <div className="board">{ducks}</div>
      <button className="finish-button" onClick={handleFinishClick}>
        Finish
      </button>
    </div>
  );
};
