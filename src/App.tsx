import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";

const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [gameType, setGameType] = useState<number | undefined>(undefined);

  const GameModeHandlers = {
    handlePlayerVsComputer: () => {
      setShowMenu(false);
      setGameType(0);
    },
    handlePlayerVsPlayer: () => {
      setShowMenu(false);
      setGameType(1);
    },
  };

  const handleGoBackToMenu = () => {
    setShowMenu(true);
    setGameType(undefined);
  };

  return (
    <div className="bg-stone-900 h-screen text-stone-200 flex justify-center">
      {!showMenu && (
        <button
          onClick={handleGoBackToMenu}
          className="text-5xl fixed left-0 m-3"
        >
          <FiArrowLeft />
        </button>
      )}
      {showMenu && !gameType && (
        <MainMenu GameModeHandlers={GameModeHandlers} />
      )}
      {!showMenu && gameType !== undefined && <Game gameType={gameType} />}
    </div>
  );
};

export default App;
