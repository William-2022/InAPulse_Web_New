import { Grid } from "@mui/material";
import React from "react";

import BlogCard from "../Blog/BlogCard";

const BlogBottomBar = ({ currentId,blogList=[] }) => {

  const showLength = blogList < 3 ? blogList.length : 3;
  const filteredListWithoutId = blogList.filter(({ id }) => currentId !== id);
  const showList = filteredListWithoutId.slice(0, showLength);

 

  return (
    <Grid container gap="5px">
      {showList.map((post) => (
        <Grid item xs={12} lg={4} key={post.id}>
          <BlogCard post={post} key={post.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogBottomBar;
