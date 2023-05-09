import "./styles.css";

import { useEffect, useState } from "react";

import backgroundImage from "./../assets/duck-pod-back.jpg";
import foregroundImage from "./../assets/duck-pod-front.png";
import { Game } from "./game";

export const DuckShootLotto = (): JSX.Element => {
  const [gameStarted, setGameStarted] = useState(false);
  const [bgWidth, setBgWidth] = useState(0);
  const [bgHeight, setBgHeight] = useState(0);

  const handleStartGame = (): void => {
    setGameStarted(true);
  };

  const handleEndGame = (): void => {
    setGameStarted(false);
  };
  
  useEffect(() => {
    const backgroundImg = document.getElementById("background-img");
    setBgWidth(backgroundImg ? backgroundImg.clientWidth : 0);
    setBgHeight(backgroundImg ? backgroundImg.clientHeight : 0);
  }, [gameStarted]);

  return (
    <div className="board">
      <img id="background-img" className="background-image" src={backgroundImage} alt="Background image of pond" />
      <img className="top-image" src={foregroundImage} alt="Foreground image of pond vegitation" />

      {!gameStarted ? (
        <button className="controls" onClick={handleStartGame}>
          Start Game
        </button>
      ) : (
        <Game width={bgWidth} height={bgHeight} onGameEnd={handleEndGame} />
      )}
    </div>
  );
};
