import { Send } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";

function ChatInput({ isTyping, onSubmit }) {
  const [message, setMessage] = useState("");
  const ref = useRef();

  const onChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim().length === 0) {
      isTyping(false);
      return;
    }

    isTyping(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (message.trim().length === 0) {
      return;
    }
    setMessage("");
    isTyping(false);
    let old = {
      message,
      sender: true,
      date: new Date().toISOString(),
    };

    onSubmit(old);

    ref.current.focus();
    ref.current.scrollTo({ top: ref.current.scrollHeight });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Stack direction="row">
        <TextField
          autoFocus
          onChange={onChange}
          value={message}
          onBlur={() => isTyping(false)}
          sx={{
            flex: 1,
            bgcolor: "white",
            borderRadius: 2,
            "& input": { py: "16px !important" },
          }}
          variant="filled"
          ref={ref}
        />
        <Button
          sx={{ "& span": { m: 0 } }}
          type="submit"
          startIcon={<Send />}
        />
      </Stack>
    </form>
  );
}

export default ChatInput;
