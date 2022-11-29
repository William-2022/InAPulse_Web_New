import { Stack, Typography } from "@mui/material";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WeiboShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WeiboIcon,
  WhatsappIcon,
} from "react-share";

const SocialShare = ({ shareUrl }) => {
  const size = 32;
  return (
    <Stack
      my={4}
      flexDirection="row"
      alignItems={"center"}
      sx={{ "&>*": { marginInline: "5px" } }}
      flexWrap="wrap"
    >
      <Typography>Share To Others:</Typography>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={size} round={true} />
      </LinkedinShareButton>
      <RedditShareButton url={shareUrl}>
        <RedditIcon size={size} round={true} />
      </RedditShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={size} round={true} />
      </WhatsappShareButton>
      <LineShareButton url={shareUrl}>
        <LineIcon size={size} round={true} />
      </LineShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={size} round={true} />
      </TelegramShareButton>
      <WeiboShareButton url={shareUrl}>
        <WeiboIcon size={size} round={true} />
      </WeiboShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={size} round={true} />
      </EmailShareButton>
    </Stack>
  );
};

export default SocialShare;
