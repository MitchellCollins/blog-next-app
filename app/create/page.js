"use client"

import { Container, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Workshop } from "@/components/Workshop";

export default function Create() {
    const router = useRouter();
    
    // Creates new blog by updating the local storage
    function handleSubmit({ title, text }) {
        // Gets current blogs from local storage
        const currentBlogs = JSON.parse(window.localStorage.getItem("blogs")) || [];

        // Creates new blog and generates id based off last blogs id
        const newBlog = {
            id: currentBlogs[currentBlogs.length - 1]?.id + 1 || 1,
            title,
            text
        }

        // Updates local storage of blogs
        window.localStorage.setItem("blogs", JSON.stringify([...currentBlogs, newBlog]));

        // Redirects back to homepage
        router.push("/");
    }
    
    function handleCancel() {
        // Redirects back to homepage
        router.push("/");
    }

    return (
        <Container>
            <Paper sx={{ mt: 5, p: 3 }}>
                <Grid container spacing={5} flexDirection="column">
                    {/* Heading */}
                    <Grid textAlign="center">
                        <Typography variant="h2">
                            Create Blog
                        </Typography>
                    </Grid>

                    {/* Workshop */}
                    <Grid>
                        <Workshop handleSubmit={handleSubmit} handleCancel={handleCancel} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}