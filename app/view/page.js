"use client"

import { Delete, Edit, West } from "@mui/icons-material";
import { Button, Container, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function View() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    const router = useRouter();
    const params = useSearchParams();
    const id = parseInt(params.get("id"));

    useEffect(() => {
        // Gets blog from local storage using id
        const blogs = JSON.parse(window.localStorage.getItem("blogs")) || [];
        const blog = blogs.find((blog) => blog.id === id);

        setTitle(blog.title);
        setText(blog.text);
    }, []);

    function deleteBlog() {
        // Filters out the blog using id from local storage to delete it
        const blogs = JSON.parse(window.localStorage.getItem("blogs")) || [];
        window.localStorage.setItem("blogs", JSON.stringify(blogs.filter((blog) => blog.id !== id)));

        // Redirects to homepage
        router.push("/");
    }

    return (
        <Container>
            <Paper sx={{ mt: 5, p: 3 }}>
                <Grid container spacing={5} flexDirection="column">
                    {/* Header */}
                    <Grid container spacing={2} alignItems="center">
                        {/* Title */}
                        <Grid flexGrow={1}>
                            <Typography variant="h2">
                                {title}
                            </Typography>
                        </Grid>

                        {/* Edit Button */}
                        <Grid>
                            <Tooltip title="Edit Blog" placement="top" arrow>
                                <IconButton onClick={() => router.push(`/edit?id=${id}`)} aria-label="Edit Blog" color="primary">
                                    <Edit fontSize="large" />
                                </IconButton>
                            </Tooltip>
                        </Grid>

                        {/* Delete Button */}
                        <Grid>
                            <Tooltip title="Delete Blog" placement="top" arrow>
                                <IconButton onClick={deleteBlog} aria-label="Delete Blog" color="error">
                                    <Delete fontSize="large" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>

                    {/* Body Text */}
                    <Grid>
                        <Typography variant="p" fontSize={18}>
                            {text}
                        </Typography>
                    </Grid>

                    {/* Return Home Button */}
                    <Grid>
                        <Tooltip title="Return to Homepage" placement="top" arrow>
                            <Button onClick={() => router.push("/")} variant="contained" startIcon={<West />}>
                                Return
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}