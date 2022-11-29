import { Box, Typography, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ post, main }) => {
  const { author, id, imglink, published, title } = post;
  const navigate = useNavigate();
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <Box
      width="100%"
      height="100%"
      my={1}
      px={1}
      py={2}
      key={id}
      sx={{
        borderBottomStyle: "solid",
        borderColor: "grey.300",
        borderWidth: "1px",
      }}
    >
      <Stack mb={1} flexDirection={"row"}>
        <Typography sx={{ mr: 2 }} color="primary" fontWeight="bold">
          {author.displayName}
        </Typography>
        <Typography sx={{ mx: 2 }} color="grey.500" fontWeight="400">
          {published}
        </Typography>
      </Stack>
      <Box
        width={"100%"}
        height={main || !lg ?null:"22vh"}
        referrerPolicy="no-referrer"
        component={"img"}
        src={imglink}
        alt={title}
        sx={{ cursor: "pointer",objectFit:"cover" }}
        onClick={() => handlePostClick(id)}
      />
      <Typography
        sx={{
          my:2,
          cursor: "pointer",
          "&:hover": {
            color: "primary.main",
          },
        }}
        onClick={() => handlePostClick(id)}
        variant={main && lg ? "h4" : "h5"}
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Box>
  );
};

export default BlogCard;
