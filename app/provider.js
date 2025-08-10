"use client"

import { createTheme, ThemeProvider } from "@mui/material";

export default function Provider({ children }) {
    const theme = createTheme();
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}