import AccountInfo from "./AccountInfo";
import Addresses from "./Addresses";
import PaymentMethods from "./PaymentMethods";
import { Button,Container, Stack, Typography, Box } from "@mui/material";
import Title from "../../components/general/Title";


const UserProfile = () => {
  return (
    <Box 
    sx={{width:"100%",
    }}>
      <Title title="Account" highlight="Details" />
      <Box  sx={{
          width: "100%",
          height:"60vh",
          bgcolor: "background.paper",
          borderStyle: "solid",
          borderwidth: "1px",
          borderColor: "grey.400",
          borderRadius: 3,
          }}>
        <AccountInfo />
        <Addresses />
      </Box>
    </Box>
  );
};

export default UserProfile;
