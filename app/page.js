"use client"

import { Button, ButtonGroup, Container, Grid, IconButton, InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import { Add, Clear, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Blog } from "@/components/Blog";

export default function Home() {
  const [query, setQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const router = useRouter();

  // Sets blogs useState to blogs from local storage 
  useEffect(() => {
    setBlogs(JSON.parse(window.localStorage.getItem("blogs")) || []);
  }, []);

  // Updates filtered blogs and local storage when blogs useState is changed
  useEffect(() => {
    setFilteredBlogs(blogs);
    window.localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  // Filters the blogs based off the query
  function filterBlogs() {
    setFilteredBlogs(blogs.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase())));
  }

  // Clears the query and blog filter
  function clearSearch() {
    setFilteredBlogs(blogs);
    setQuery("");
  }

  // Deletes blog by filtering out the blog with the specified id
  function deleteBlog(id) {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  }
  
  return (
    <Container>
      <Grid container spacing={5} sx={{ flexDirection: "column", mx: "auto" }}>
        {/* Heading */}
        <Grid textAlign="center">
          <Typography variant="h2">
            Blogs
          </Typography>
        </Grid>

        {/* Options */}
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
          {/* Search Bar */}
          <Grid flexGrow={1}>
            <TextField 
              type="text"
              variant="outlined"
              label="Search Blogs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <ButtonGroup>
                        {/* Search Button */}
                        <Tooltip title="Search" placement="top" arrow>
                          <IconButton onClick={filterBlogs}>
                            <Search color="primary" />
                          </IconButton>
                        </Tooltip>

                        {/* Clear Search Button */}
                        <Tooltip title="Clear Search" placement="top" arrow>
                          <IconButton onClick={clearSearch}>
                            <Clear color="error" />
                          </IconButton>
                        </Tooltip>
                      </ButtonGroup>
                    </InputAdornment>
                  )
                }
              }}
              fullWidth
            />
          </Grid>
          
          {/* Create Blog Button */}
          <Grid>
            <Tooltip title="Create Blog" placement="top" arrow>
              <Button 
                onClick={() => router.push("/create")} 
                variant="contained" 
                color="success" 
                aria-label="Create Blog"
                sx={{ height: "100%" }} 
                endIcon={<Add />}
              >
                Create
              </Button>
            </Tooltip>
          </Grid>
        </Grid>

        {/* Blogs */}
        <Grid container spacing={2}>
          {filteredBlogs.map((blog) => (
            <Grid key={`blog-${blog.id}`} size={{ xs: 12, md: 4 }}>
              <Blog {...blog} deleteBlog={deleteBlog} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}