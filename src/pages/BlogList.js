import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { listBlogPosts } from "../apis/blog";
import BlogCard from "../components/Blog/BlogCard";
import BlogSidebar from "../components/Blog/BlogSidebar";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLength, setShowLength] = useState(10);
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const blogLength = blogList.length;

  //show # of blogs based on current showLength
  const showList = blogList.slice(
    0,
    blogLength === 0 ? blogLength : showLength
  );
    //
  /**
   * For pagination ,adding 9 post per button click
   */
  const onIncreasePostLength = () => {
    //if incrementing show lenght will be larger than the amount of blog fetched, display all blogs
    if (showLength + 9 >= blogLength) {
      setShowLength(blogLength);
    } else {
      //else just increment by 9
      setShowLength((prev) => (prev += 9));
    }
  };

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
  return (
    <Grid my={3} px={"10%"} minHeight="80vh" container>
      <Grid className="left-grid" item xs={12} lg={9}>
        <Grid container >
          {!isLoading ? (
            showList.map((post, index) => {
              let width = 4;
              let main = false;
              if (index === 0) {
                main = true;
                width = 12;
              }
              return (
                <Grid item xs={12} lg={width} key={post.id}>
                  <BlogCard post={post} key={post.id} main={main} />
                </Grid>
              );
            })
          ) : (
            <Stack
              justifyContent={"center"}
              alignItems="center"
              width="100%"
              minHeight={"80vh"}
            >
              <CircularProgress size={80} />
            </Stack>
          )}
        </Grid>
        <Stack
          my={5}
          flexDirection="column"
          alignItems="center"
          display={
            showLength === blogLength || blogLength === 0 ? "none" : null
          }
        >
          <Button
            sx={{ fontSize: "20px", width: "30%", textTransform: "none" }}
            variant={"contained"}
            onClick={onIncreasePostLength}
          >
            Load More
          </Button>
          <ArrowDownwardIcon color="primary" sx={{ fontSize: "50px", mt: 5 }} />
        </Stack>
      </Grid>
      <Grid item className="right-grid" display={lg ? null : "none"} lg={3}>
        <BlogSidebar blogList={blogList} />
      </Grid>
    </Grid>
  );
};

export default BlogList;
