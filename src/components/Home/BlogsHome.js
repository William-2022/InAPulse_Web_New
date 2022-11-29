import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  Box,
  useMediaQuery,Typography
} from "@mui/material";
import { listBlogPosts } from "../../apis/blog";
import BlogCard from "../../components/Blog/BlogCard";
import Title from "../../components/general/Title"
import { useNavigate } from "react-router-dom";


const BlogsHome = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLength, setShowLength] = useState(10);
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    listBlogPosts()
      .then((list) => {
        setBlogList(list);
        setShowLength((prev) => {
          // when posts are fetched, if post length are less than show lenth, set show length to blog length
          if (prev >= list.length) {
            return list.length;
          }
          return prev;
        });
      })
      .finally(setIsLoading(false));
  }, []);
  const slicedArray = blogList?.slice(0, 3);
 
  return (
    <Box p={xs&&sm ? "2% 6% 3% 6%" :"8% 6% 3% 6%"} width={"100%"}>
      <Title title="Our" highlight="Blogs" textAlign="center"/>
      <Button
          disableRipple
          color={"background"}
          sx={{
            position: "absolute",
            right: "10%",
            color:"primary.main",
            textTransform: "none",
            px: 0,
          }}
          onClick={() => navigate("/Blog")}
          rel="noreferrer"
        >
          View All >
        </Button>
      <Grid p={"4% 0"} container justifyContent="space-around">
        {slicedArray.map((post) => (
          <Grid item xs={12} lg={3} key={post.id}>
            <BlogCard post={post} key={post.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogsHome;
