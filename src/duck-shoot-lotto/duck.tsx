import { useState } from "react";

interface DuckProps {
  number: number;
  onClick: (number: number) => void;
  disabled: boolean;
}

export const Duck = ({ number, onClick, disabled }: DuckProps): JSX.Element => {
  const [selected, setSelected] = useState(false);

  function handleClick(): void {
    if (!disabled) {
      setSelected(!selected);
      onClick(number);
    }
  }

  return (
    <div className={`duck ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`} onClick={handleClick}>
      {number}
    </div>
  );
};
