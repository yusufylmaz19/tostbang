"use client";

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { useAppSelector } from "../lib/hooks";
import themesOptions from "./themeOptions";
import RootStyleRegistry from "./EmotionCache";
import { components } from "./overideComponents";
import merge from "lodash/merge";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAppSelector((state) => state.theme);

  const options = themesOptions[theme ? "light" : "dark"];

  const themeOptions: any = {
    palette: {
      ...options.palette,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  };

  
  const mergedThemeOptions = merge({}, themeOptions);
  
  const themes = createTheme(mergedThemeOptions);
  themes.components = components(themes);

  return (
    <RootStyleRegistry>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RootStyleRegistry>
  );
}
