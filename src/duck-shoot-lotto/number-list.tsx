interface NumberListProps {
  numbers: number[];
}

export const NumberList = ({ numbers }: NumberListProps): JSX.Element => {
  return (
    <div>
      <p> You have selected : {numbers.join(", ")} </p>
    </div>
  );
};
