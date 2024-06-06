import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  showMenu: boolean;
  gameType: number | undefined;
  isPlayingX: boolean;
  gamedifficulty: string;
}

const initialState: SettingsState = {
  showMenu: true,
  gameType: undefined,
  isPlayingX: true,
  gamedifficulty: "medium",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
      state.gameType = undefined;
    },
    setGame: (
      state,
      action: PayloadAction<{
        gameType?: number | undefined;
        difficulty: string;
        isPlayingX: boolean;
      }>
    ) => {
      if (action.payload.gameType === undefined) {
        state.showMenu = true;
      } else {
        state.showMenu = false;
      }

      state.gameType = action.payload.gameType;
      state.isPlayingX = action.payload.isPlayingX;
      state.gamedifficulty = action.payload.difficulty;
    },
  },
});

export const { toggleMenu, setGame } = settingsSlice.actions;
export default settingsSlice.reducer;
