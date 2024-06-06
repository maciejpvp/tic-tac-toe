// import Modal from "./Modal";
// import InputSelect from "./Input";
// import { AppDispatch } from "../utils/store";
// import Button from "./Button";
// import { setGame } from "../utils/settingsSlice";
// import { useDispatch } from "react-redux";
// import { useRef } from "react";

// type SettingsModalProps = {
//   show: boolean;
// };

// const SettingsModal = ({ show }: SettingsModalProps) => {
//   const dispatch: AppDispatch = useDispatch();

//   const difficultyRef = useRef<"easy" | "medium" | "hard" | "impossible">(
//     "medium"
//   );
//   const startAsRef = useRef<string>("X");

//   const difficultyOptions = [
//     { value: "easy", label: "Easy" },
//     { value: "medium", label: "Medium" },
//     { value: "hard", label: "Hard" },
//     { value: "impossible", label: "Impossible" },
//   ];
//   const startAs = [
//     { value: "X", label: "X" },
//     { value: "O", label: "O" },
//   ];

//   const handleSetupGame = (gameType: number) => {
//     const isPlayingX = startAsRef.current === "X";
//     dispatch(
//       setGame({
//         gameType: gameType,
//         difficulty: difficultyRef.current,
//         isPlayingX: isPlayingX,
//       })
//     );
//   };

//   const handleDifficultyRefChange = (
//     value: "easy" | "medium" | "hard" | "impossible"
//   ) => {
//     difficultyRef.current = value;
//   };
//   const handleStartAsRefChange = (value: string) => {
//     startAsRef.current = value;
//   };

//   return (
//     <Modal show={show}>
//       <h1 className="text-2xl">Settings</h1>
//       <InputSelect
//         options={difficultyOptions}
//         label="Difficuly"
//         defaultValue={difficultyRef.current}
//         onChange={handleDifficultyRefChange}
//       />
//       <InputSelect
//         options={startAs}
//         label="Start As"
//         defaultValue={startAsRef.current}
//         onChange={handleStartAsRefChange}
//       />
//       <Button
//         onClick={() => {
//           handleSetupGame(0);
//         }}
//       >
//         Start
//       </Button>
//     </Modal>
//   );
// };

// export default SettingsModal;
import Modal from "./Modal";
import InputSelect from "./Input";
import { AppDispatch } from "../utils/store";
import Button from "./Button";
import { setGame } from "../utils/settingsSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

type SettingsModalProps = {
  show: boolean;
};

const SettingsModal = ({ show }: SettingsModalProps) => {
  const dispatch: AppDispatch = useDispatch();

  const difficultyRef = useRef<string>("medium");
  const startAsRef = useRef<string>("X");

  const difficultyOptions = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
    { value: "impossible", label: "Impossible" },
  ];
  const startAsOptions = [
    { value: "X", label: "X" },
    { value: "O", label: "O" },
  ];

  const handleSetupGame = (gameType: number) => {
    const isPlayingX = startAsRef.current === "X";
    dispatch(
      setGame({
        gameType: gameType,
        difficulty: difficultyRef.current,
        isPlayingX: isPlayingX,
      })
    );
  };

  const handleDifficultyRefChange = (value: string) => {
    difficultyRef.current = value;
  };

  const handleStartAsRefChange = (value: string) => {
    startAsRef.current = value;
  };

  return (
    <Modal show={show}>
      <h1 className="text-2xl">Settings</h1>
      <InputSelect
        options={difficultyOptions}
        label="Difficulty"
        defaultValue={difficultyRef.current}
        onChange={handleDifficultyRefChange}
      />
      <InputSelect
        options={startAsOptions}
        label="Start As"
        defaultValue={startAsRef.current}
        onChange={handleStartAsRefChange}
      />
      <Button
        onClick={() => {
          handleSetupGame(0);
        }}
      >
        Start
      </Button>
    </Modal>
  );
};

export default SettingsModal;
