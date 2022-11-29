import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  useMediaQuery,
  CircularProgress,
  Stack,
} from "@mui/material";
import { getBlogPostbyPostId, incrementPostRecord } from "../apis/blog";
import { listBlogPosts } from "../apis/blog";
import SocialShare from "../components/SocialShare";
import BlogSidebar from "../components/Blog/BlogSidebar";
import CustomHelmet from "../components/CustomHelmet";
import BlogBottomBar from "../components/Blog/BlogBottomBar";
import ErrorPage from "./ErrorPage";
const Blog = () => {
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const { postId } = useParams();
  const [blogList, setBlogList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [post, setPost] = useState({});
  const { author, imglink, published, title, content } = post;
  
  useEffect(() => {
    setTimeout(() => {
      setIsError(true);
  }, 5000);
    getBlogPostbyPostId(postId).then((blogPost) => setPost(blogPost));
    incrementPostRecord(postId).catch((err) => console.log(err));
    listBlogPosts().then((list) => {
      setBlogList(list);
    });
  }, [postId]);


  return (
    <>
      <CustomHelmet
        title={title && `${title} - In A Pulse Blog`}
        url={window.location.href}
        image={imglink}
      />
      <Grid my={3} px="10%" minHeight="80vh" container>
        <Grid item xs={12} lg={9} py="3%">
          {author ? (
            <>
              <Box
                sx={{
                  borderBottomStyle: "solid",
                  borderColor: "grey.300",
                  borderWidth: "1px",
                }}
              >
                <Box
                  width={"100%"}
                  height="50vh"
                  sx={{ objectFit: "cover" }}
                  component={"img"}
                  src={imglink}
                  alt={title}
                />
                <Typography sx={{ my: 2 }} variant={"h4"} fontWeight="600">
                  {title}
                </Typography>
                <Box>{content}</Box>
                <Stack mt={5} flexDirection={"row"}>
                  <Typography
                    sx={{ ml: "auto", mr: 2 }}
                    color="primary"
                    fontWeight="bold"
                  >
                    {author.displayName}
                  </Typography>
                  <Typography sx={{ ml: 2 }} color="grey.500" fontWeight="400">
                    {published}
                  </Typography>
                </Stack>
              </Box>
              <SocialShare shareUrl={window.location.href} />
              <BlogBottomBar blogList={blogList} currentId={postId} />
            </>
          ) : (
            <Box
              width="100%"
              height={"80vh"}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              {isError ? (<ErrorPage/>): (<CircularProgress sx={{ width: "50px" }} />)}
            </Box>
          )}
        </Grid>
        <Grid item className="right-grid" display={lg ? null : "none"} lg={3}>
          <BlogSidebar blogList={blogList} />
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
