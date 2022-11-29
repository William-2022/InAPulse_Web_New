import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { 
    Stack, 
    Typography, 
    Button, 
    Container,
    Box,
    FormLabel,
    Input,
    Modal
} from "@mui/material";

const ChangePassword = ({ 
    setIsChangePassword, 
    handleClose,
    isOpen }) => {

    const { user, forgotPasswordSubmit } =  useAuth();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userEmail] = useState(user.attributes.email);
    const [confirmCode, setConfirmCode] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(isOpen);


    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
    }

    const confirmNewPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleConfirmCode = (e) => {
        setConfirmCode(e.target.value);
    }

    const addNewPassword = async (e) => {
        e.preventDefault();
    
        try {
          await forgotPasswordSubmit(userEmail, confirmCode, confirmPassword)
          .then((res) => {
            //console.log("Password has been changed successfully!");
            setIsChangePassword(false);
            setIsModalOpen(false);
            handleClose();
          })
        } catch (error) {
          console.log(error);
        }
      }
    
    return (
        <Modal
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box 
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 350,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    borderRadius: "10px",
                    p: 4,
                }}>
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2" 
                    sx={{ 
                        fontWeight: "bold", 
                        textAlign: "center", 
                        textTransform: "uppercase" 
                        }}>
                        Change Password
                </Typography>

             
                <Stack id="modal-modal-description" spacing={2} sx={{ mt: 2 }}>

                <InputGroup 
                    label={"Confirm code"} 
                    onChange={handleConfirmCode} 
                    value={confirmCode} 
                    type="text" 
                />
                <InputGroup 
                    label={"New password"} 
                    onChange={handleNewPassword} 
                    value={newPassword} 
                    type="text" 
                />
                <InputGroup 
                    label={"Confirm new password"} 
                    onChange={confirmNewPassword} 
                    value={confirmPassword} 
                    type="text" 
                />

                </Stack>
                
                <Container sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "20px 0 0 0"
                }} >
                    <Button
                        disableRipple
                        type="submit"
                        onClick={addNewPassword}
                        variant="contained"
                        size="small"
                        sx={{ textTransform: "uppercase", fontWeight: "bold"}}
                    >
                        Submit
                    </Button>
                </Container>
                
            </Box>


        </Modal>
    )

}

export default ChangePassword;


const InputGroup = ({ label, value, onChange }) => {
    return (
        <Box
          sx={{
            width: "100%",
            maxWidth: "350px",
            display: "flex",
            flexDirection: "column"
          }}
          >
            <FormLabel sx={{ marginRight: "auto" }}>
                {label || "Label"}
            </FormLabel>
          <Input 
            fullWidth 
            type="text"
            value={value}
            onChange={onChange}
            disableUnderline
            sx={{
                border: 1,
                borderRadius: 1,
                paddingX: "0.6rem",
                paddingY: "0.3rem",
                borderColor: "#aaa"
            }}
            
            />
          </Box>
    )
}


