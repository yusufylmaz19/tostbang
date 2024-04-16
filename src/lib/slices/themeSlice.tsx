import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Props {
  theme?: boolean;
}

export const initialState: Props = {
  theme: true, // true for light theme and false for dark theme
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    siwtchTheme: (state, Action: PayloadAction<boolean>) => {
      state.theme = Action.payload;
    },
  },
});

export const { siwtchTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
