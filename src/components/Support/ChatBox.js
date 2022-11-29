import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

function ChatBox({ id }) {
  const [isTyping, setIsTyping] = useState(false);
  const [chat, setChat] = useState(null);

  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTo({ top: ref.current.scrollHeight });
  }, [id]);

  const onCreateMessage = `subscription MySubscription($channelID: ID = "1") {
    createMessageInChannel(channelID: $channelID) {
      author
      body
      createdAt
      channelID
    }
  }
`;

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage, { channelID: "1" })
    ).subscribe({
      next: (event) => {
        console.log(event.value.data);
        let { author, body, createdAt } =
          event.value.data.createMessageInChannel;
        let newMessage = {
          message: body,
          sender: author === 2 ? true : false,
          date: createdAt,
        };
        setChat((old) => [...old, newMessage]);
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [onCreateMessage, chat]);

  const handleSubmit = (message) => {
    let old = chat || [];
    old.push(message);
    setChat(old);
    ref.current.scrollTo({ top: ref.current.scrollHeight });
  };

  return (
    <>
      <Box
        ref={ref}
        sx={{
          height: 450,
          maxHeight: 520,
          overflowY: "scroll",
          px: 10,
          mt: 4,
          flex: 1,
          pb: 15,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {chat?.map((message, index) => (
          <ChatBubble key={index} data={message} />
        ))}
        {isTyping && (
          <ChatBubble data={{ sender: true, message: "...", pulse: true }} />
        )}
      </Box>

      <ChatInput onSubmit={handleSubmit} isTyping={setIsTyping} />
    </>
  );
}

export default ChatBox;
