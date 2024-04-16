
const primary = {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
};

const secondary = {
    main: '#dc004e',
    light: '#ff5c8d',
    dark: '#d6004b',
    contrastText: '#fff',
};

const palette = {
    primary,
    secondary,
};

export const lightPalette = {
    mode: "light",
    ...palette,
};

export const darkPalette = {
    mode: "dark",
    ...palette,
};
