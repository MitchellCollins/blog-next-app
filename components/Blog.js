import { Delete, Edit } from "@mui/icons-material";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export function Blog({ id, title, text, deleteBlog }) {
    const router = useRouter();
    
    const charLimit = 400;
    
    // Caps text to character limit
    if (text.length > charLimit) {
        text = text.slice(0, charLimit);
        text += " ...";
    }
    
    return (
        <Paper sx={{ p: 2 }}>
            <Grid container spacing={2} flexDirection="column">
                {/* Heading */}
                <Grid container>
                    {/* Title */}
                    <Grid flexGrow={1}>
                        <Typography variant="h4">
                            <Tooltip title="View More" placement="top" arrow>
                                <span onClick={() => router.push(`/view?id=${id}`)} style={{ cursor: "pointer" }}>
                                    {title}
                                </span>
                            </Tooltip>
                        </Typography>
                    </Grid>

                    {/* Edit Button */}
                    <Grid>
                        <Tooltip title="Edit Blog" placement="top" arrow>
                            <IconButton onClick={() => router.push(`/edit?id=${id}`)} color="primary" aria-label="Edit Blog">
                                <Edit />
                            </IconButton>
                        </Tooltip>
                    </Grid>

                    {/* Delete Button */}
                    <Grid>
                        <Tooltip title="Delete Blog" placement="top" arrow>
                            <IconButton onClick={() => deleteBlog(id)} color="error" aria-label="Delete Blog">
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>

                {/* Text */}
                <Grid>
                    <Typography variant="p">
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}