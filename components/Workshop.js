"use client"

import { Button, Grid, TextareaAutosize, TextField } from "@mui/material";
import { East } from "@mui/icons-material";
import { useEffect, useState } from "react";

export function Workshop({ id, handleSubmit, handleCancel }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    // TODO: Implement Error Handling when no title and text is found going by provided id
    useEffect(() => {
        // Gets title and text if id is provided
        if (id) {
            const blogs = JSON.parse(window.localStorage.getItem("blogs")) || [];
            const { title, text } = blogs.find((blog) => blog.id === id);

            setTitle(title);
            setText(text);
        }
    }, []);

    return (
        <Grid container spacing={5} flexDirection="column">
            {/* Title Input */}
            <Grid>
                <TextField 
                    type="text"
                    variant="outlined"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    required
                />
            </Grid>

            {/* Text Input */}
            <Grid>
                <TextareaAutosize
                    placeholder="Body Text..."
                    minRows={3}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ width: "100%", resize: "vertical", color: "#fff", backgroundColor: "#000842" }}
                />
            </Grid>

            {/* Buttons */}
            <Grid container spacing={2} justifyContent="flex-end">
                {/* Submit Button */}
                <Grid>
                    <Button onClick={() => handleSubmit({ title, text })} variant="contained" color="success" endIcon={<East />}>
                        Submit
                    </Button>
                </Grid>

                {/* Cancel Button */}
                <Grid>
                    <Button onClick={handleCancel} variant="contained" color="error">
                        Cancel
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}