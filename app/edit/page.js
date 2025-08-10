"use client"

import { Container, Grid, Paper, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { Workshop } from "@/components/Workshop";

export default function Edit() {
    const router = useRouter();
    const params = useSearchParams();
    const id = parseInt(params.get("id"));

    function handleSubmit({ title, text }) {
        // Gets blogs from local storage
        const blogs = JSON.parse(window.localStorage.getItem("blogs")) || [];
        const index = blogs.findIndex((blog) => blog.id === id);

        // Implements edits
        blogs[index] = { id, title, text };

        // Updates local storage
        window.localStorage.setItem("blogs", JSON.stringify(blogs));

        // Redirects to home page
        router.push("/");
    }

    function handleCancel() {
        // Redirects to home page
        router.push("/");
    }
    
    return  (
        <Container>
            <Paper sx={{ mt: 5, p: 3 }}>
                <Grid container spacing={5} flexDirection="column">
                    {/* Heading */}
                    <Grid textAlign="center">
                        <Typography variant="h2">
                            Edit Blog
                        </Typography>
                    </Grid>

                    {/* Workshop */}
                    <Grid>
                        <Workshop id={id} handleSubmit={handleSubmit} handleCancel={handleCancel} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}