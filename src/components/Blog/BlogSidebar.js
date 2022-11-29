import React from "react";
import BlogSearchBar from "./BlogSearchBar";
import { Box } from "@mui/material";
import BlogTrend from "./BlogTrend";

const BlogSidebar = ({blogList}) => {
  return (
    <Box px="5%" py="15%">
      <BlogSearchBar />
      <BlogTrend blogList={blogList}/>
    </Box>
  );
};

export default BlogSidebar;
