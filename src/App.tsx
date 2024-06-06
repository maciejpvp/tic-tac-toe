import { FiArrowLeft } from "react-icons/fi";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/settingsSlice";
import { RootState, AppDispatch } from "./utils/store";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const { showMenu, gameType } = useSelector(
    (state: RootState) => state.settings
  );

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="bg-stone-900 h-svh text-stone-200 flex justify-center">
      {!showMenu && (
        <button
          onClick={handleToggleMenu}
          className="text-5xl fixed left-0 m-3"
        >
          <FiArrowLeft />
        </button>
      )}
      {showMenu && !gameType && <MainMenu />}
      {!showMenu && gameType !== undefined && <Game />}
    </div>
  );
};

export default App;
