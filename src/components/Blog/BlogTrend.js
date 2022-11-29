import { Box, Typography, Stack, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { listPostRecord } from "../../apis/blog";
import trendImg from "../../images/trend.png";
import { useNavigate } from "react-router-dom";
const BlogTrend = ({ blogList = [] }) => {
  const [postRecord, setPostRecord] = useState([]);
  const navigate = useNavigate();

  let mergedTrendList = blogList;

  if (postRecord.length && blogList.length) {
    postRecord.forEach((record) => {
      mergedTrendList.forEach((blog) => {
        if (blog.id === record.id) blog.clickCount = record.clickCount;
      });
    });
  }
  const sortedTrendList = mergedTrendList.sort((a, b) => {
    if (b.clickCount === undefined) {
      return -1;
    }
    if (a.clickCount===undefined){
      return 1;
    }

    return b.clickCount - a.clickCount;
  });

  useEffect(() => {
    listPostRecord()
      .then((res) => setPostRecord(res.payload))
      .catch((err) => window.alert(err));
  }, []);
  return (
    <Box mt={3}>
      <Stack flexDirection="row" alignItems={"center"}>
        <Box width="30px" component={"img"} src={trendImg} />
        <Typography ml={1} my={1} variant={"h5"} fontWeight="bold">
          Trending Post
        </Typography>
      </Stack>
      {Boolean(postRecord.length) && Boolean(blogList.length) ? (
        sortedTrendList.map((post) => (
          <Box
            onClick={() => {
              navigate(`/blog/${post.id}`);
            }}
            sx={{
              cursor: "pointer",
              "&:hover h6": {
                color: "primary.main",
              },
            }}
            pb={2}
            pt={1}
            borderBottom="1px solid black"
            key={post.id}
          >
            <Typography variant="h6">{post.title}</Typography>
          </Box>
        ))
      ) : (
        <Stack minHeight={"30vh"} justifyContent={"center"} alignItems={"center"}>
          <CircularProgress size={25} />
        </Stack>
      )}
    </Box>
  );
};

export default BlogTrend;
