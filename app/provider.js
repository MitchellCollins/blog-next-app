"use client"

import { createTheme, ThemeProvider } from "@mui/material";

export default function Provider({ children }) {
    const theme = createTheme({
        components: {
            MuiTextField: {
                defaultProps: {
                    sx: {
                        color: "#fff",
                        borderColor: "#fff",
                        label: {
                            color: "#fff"
                        },
                        fieldset: {
                            borderColor: "#fff"
                        }
                    }
                }
            },
            MuiTypography: {
                defaultProps: {
                    sx: {
                        color: "#fff"
                    }
                }
            }
        },
        palette: {
            background: {
                default: "#00052E",
                paper: "#000842"
            },
            text: {
                primary: "#fff"
            }
        }
    });
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}