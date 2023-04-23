import "./styles.css";

import { useState } from "react";

import { Game } from "./game";

interface Props {
  text?: string;
}

export const DuckShootLotto = (props: Props): JSX.Element => {
  const [numbers, setNumbers] = useState<number[]>([]);

  function handleGameFinish(numbers: number[]): void {
    setNumbers(numbers);
  }

  return (
    <div className="app">
      <p>{props.text}</p>
      <Game onFinish={handleGameFinish} />
      <div className="numbers">
        {numbers.length > 0 && (
          <>
            <div className="title">Selected Numbers:</div>
            <div className="list">{numbers.join(", ")}</div>
          </>
        )}
      </div>
    </div>
  );
};
