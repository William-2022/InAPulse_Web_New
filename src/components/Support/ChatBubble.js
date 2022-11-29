import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dateTimeFormat } from "../../helpers/formatter";

function ChatBubble({ data }) {
  const { sender, name, message, date, pulse } = data;
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    setNewMessage(true);
  }, [newMessage]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (pulse) {
        setNewMessage((old) => !old);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [newMessage, pulse]);


  return (
    <Box
      sx={{
        width: "fit-content",
        bgcolor: sender ? "#010123" : "#272944",
        py: 2,
        alignSelf: sender ? "flex-end" : undefined,
        px: 3,
        borderRadius: 2,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        maxWidth: "60%",
        opacity: newMessage ? 1 : 0,
        transition: ".6s",
      }}
    >
      <Typography variant="h5" color="white">
        {name}
      </Typography>
      <Typography color="white">{message}</Typography>
      {date && (
        <Typography mt={2} variant="caption" color="white">
          sent at: {dateTimeFormat(date)}
        </Typography>
      )}
    </Box>
  );
}

export default ChatBubble;
