import { Theme } from "@mui/material";

export const components = (theme: Theme): any => {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    fontSize: "1rem",
                    padding: 24,
                    borderRadius: 16,
                    backgroundColor: theme.palette.mode === "dark" ? "#222832" : "#fff",
                    boxShadow: theme.palette.mode === "light" ? "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px" : "box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    lineHeight: "1.5",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    "& .MuiDialog-paper": {
                        borderRadius: 8,
                    },
                },
            },
        },
    }
}