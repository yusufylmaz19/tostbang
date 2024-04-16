"use client";

import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { siwtchTheme } from "../lib/slices/themeSlice";

export default function Home() {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <Box>
      Home
      <button onClick={() => dispatch(siwtchTheme(!theme))}>
        Change Theme
      </button>
    </Box>
  );
}
