import { useDispatch } from "react-redux";
import Button from "./Button";
import { AppDispatch } from "../utils/store";
import { setGame } from "../utils/settingsSlice";
import { useState } from "react";
import SettingsModal from "./SettingsModal";

const MainMenu = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const handleShowSettings = () => {
    setShowSettings((prev) => !prev);
  };
  const handleSetupGame = (gameType: number) => {
    dispatch(
      setGame({ gameType: gameType, difficulty: "medium", isPlayingX: true })
    );
  };

  return (
    <div className="justify-center flex flex-col w-full">
      <h1 className="text-center font-extrabold text-6xl mb-12 ">
        Tic Tac Toe
      </h1>
      <SettingsModal show={showSettings} />
      <ul className="items-center gap-2 flex flex-col">
        <li>
          <Button onClick={handleShowSettings}>Player vs Computer</Button>
        </li>
        <li>
          <Button onClick={() => handleSetupGame(1)}>Player vs Player</Button>
        </li>
        <li>
          <Button onClick={() => {}}>Multiplayer (soon)</Button>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
