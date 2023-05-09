import type { FC } from "react";

interface GameOverDialogProps {
  selectedNumbers: number[];
  onRestart: () => void;
}

export const GameOverDialog: FC<GameOverDialogProps> = ({
  selectedNumbers,
  onRestart,
}) => {
  return (
    <div className="dialog-container">
      <div className="dialog">
        <h2>Game Over</h2>
        <p> You have selected : {selectedNumbers.join(", ")} </p>
        <button onClick={onRestart}>Close</button>
      </div>
    </div>
  );
};
