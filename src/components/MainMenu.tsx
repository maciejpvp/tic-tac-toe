import Button from "./Button";

type MainMenuProps = {
  GameModeHandlers: {
    handlePlayerVsComputer: () => void;
    handlePlayerVsPlayer: () => void;
  };
};

const MainMenu = ({ GameModeHandlers }: MainMenuProps) => {
  return (
    <div className="justify-center flex flex-col w-full">
      <h1 className="text-center font-extrabold text-6xl mb-12 ">
        Tic Tac Toe
      </h1>
      <ul className="items-center gap-2 flex flex-col">
        <li>
          <Button onClick={GameModeHandlers.handlePlayerVsComputer}>
            Player vs Computer
          </Button>
        </li>
        <li>
          <Button onClick={GameModeHandlers.handlePlayerVsPlayer}>
            Player vs Player
          </Button>
        </li>
        <li>
          <Button onClick={() => {}}>Multiplayer (soon)</Button>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
