
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
    ...palette,
    mode: "light",
    background: { default: "#fefefe", paper: "#fefefe" },
    fontColor: { primary: "#000000DE", secondary: "#000" }
};


export const darkPalette = {
    ...palette,
    mode: "dark",
    background: { default: "#161a22", paper: "#161a22" },
    fontColor: { primary: "#fff", secondary: "#e3e3e3" }
};
