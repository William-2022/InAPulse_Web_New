import {
  Box,
  Stack,
  Button,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import UseOrder from "../../hooks/useOrder";
import GoogleAutoComplete from "../../components/Calculator/GoogleAutoComplete";
import { useState } from "react";
import handleAddressBreakDown from "../../helpers/handleAddressBreakDown";
import useApi from "../../hooks/useApi";

const AddNewAddress = ({ isOpen, handleClose, updateAddressList, address }) => {
  const { coverage } = UseOrder();
  const { createAddresss, updateAddress } = useApi();
  const [state, setState] = useState(() => {
    if (address) {
      const { city, province, postalCode } = address;
      return {
        ...address,
        fullAddress: `${address.address}, ${city}, ${province}, Canada ${postalCode} `,
      };
    }
    return {
      fullAddress: "",
      name: "",
      adddressType: "",
      address: "",
      address2: "",
      latitude: 0,
      longitude: 0,
      city: "",
      province: "",
      postalcode: "",
      contactName: "",
      contactPhone: "+1",
    };
  });

  const handleNameAddress = (e) => {
    setState((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleAddAddress = async (e) => {
    try {
      await createAddresss(state).then((res) => {
        //console.log("New address added successfully!!!!");
        updateAddressList();
        handleClose();
      });
    } catch (error) {
      //console.error(error.response.data);
    }
  };
  const handleUpdateAddress = async () => {
    try {
      await updateAddress(address.id, state).then(() => {
        updateAddressList();
        handleClose();
      });
    } catch (error) {
      //console.log(error);
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Stack direction="column" spacing={4}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: "10px",
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "1em",
              }}
            >
              Add New Address
            </Typography>
            <TextField
              sx={{
                width: "100%",
                marginBottom: "1em",
              }}
              label="Address Name*"
              value={state.name}
              onChange={handleNameAddress}
            />
            {Boolean(coverage.length) && (
              <GoogleAutoComplete
                value={state.fullAddress}
                coverage={coverage}
                handleChange={(
                  address,
                  latitude,
                  longitude,
                  address_components
                ) => {
                  //console.log(address_components);
                  const addressObj = handleAddressBreakDown(address_components);

                  setState((prev) => ({
                    ...prev,
                    fullAddress: address,
                    city: addressObj.city,
                    province: addressObj.province,
                    postalcode: addressObj.postalcode,
                    ...addressObj,
                    latitude,
                    longitude,
                  }));
                }}
              />
            )}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                my: 3,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              gap="10px"
            >
              <TextField
                label="Contact Name"
                value={state.contactName}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, contactName: e.target.value }))
                }
              />
              <TextField
                label="Contact Phone"
                value={state.contactPhone}
                inputProps={{ maxLength: 12 }}
                onChange={(e) => {
                  let value = e.target.value;
                  if (value.length >= 2) {
                    setState((prev) => ({
                      ...prev,
                      contactPhone: value,
                    }));
                  } else {
                    setState((prev) => ({ ...prev, contactPhone: "+1" }));
                  }
                }}
              />
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Button
                disableRipple
                onClick={() => handleClose()}
                variant="outlined"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  width: "16em",
                  marginRight: "15px",
                }}
              >
                Cancel
              </Button>

              <Button
                disableRipple
                type="submit"
                onClick={address ? handleUpdateAddress : handleAddAddress}
                variant="contained"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  width: "16em",
                  bgcolor: "primary.main",
                }}
              >
                {address ? "Update" : "Add"}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

export default AddNewAddress;
