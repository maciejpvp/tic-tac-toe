import React from "react";
import Game from "./components/Game";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="bg-stone-900 h-screen text-stone-200 flex justify-center">
      <Game />
    </div>
  );
};

export default App;
