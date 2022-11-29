import { Button, Typography } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import API, { graphqlOperation } from "@aws-amplify/api";
import parse from "html-react-parser";

// import useApi from "../hooks/useApi";
// import UseOrder from "../hooks/useOrder";
// import useAuth from "../hooks/useAuth";

// Page for Pure Testing!!!!!
const Test = () => {
  // const { createAddresss } = useApi();
  // const [state] = useState({
  //   fullAddress: "",
  //   name: "HOME",
  //   adddressType: "home",
  //   address: "",
  //   address2: "",
  //   latitude: 0,
  //   longitude: 0,
  //   city: "",
  //   province: "",
  // });

//   const onCreateMessage = `subscription MySubscription($channelID: ID = "") {
//     createMessageInChannel(channelID: $channelID) {
//       author
//       body
//       channelID
//       createdAt
//       id
//     }
//   }

// `;

  // const { coverage } = UseOrder();
  // const { signIn,facebookSignIn,signOut } = useAuth();
  // const { sendSupportEmail } = useApi();
  const onClick = () => {
    // createAddresss(state)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.response.date));
  };

  // useEffect(() => {
  //   const subscription = API.graphql(
  //     graphqlOperation(onCreateMessage, { channelID: "1" })
  //   ).subscribe({
  //     next: (event) => {
  //       console.log(event.value.data);
  //     },
  //   });
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [onCreateMessage]);

  return (
    <>
      <Button variant="contained" onClick={onClick}>
        Test
      </Button>
      <Typography textAlign={"left"}>
        {parse(
          "\u003cp\u003e\u003c/p\u003e&nbsp;Thanks for stopping by our blog. If you’re looking for more information about In A Pulse - Delivery Service, you’ve come to the right place.\u003cp\u003e\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eIn A Pulse - Delivery Service\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eEstablished in 2022, we are a mom-and-pop style cannabis delivery service serving the Greater Toronto Area with luxury cannabis products. From flowers to concentrates, pre-rolls, and edibles, we deliver it all along with the best experience.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eOur professional dispatch team operates Monday through Sunday from 08 AM to 8 PM and is happy to help you find exactly what suits your needs and ensure a seamless process. Similarly, your privacy is important to us, so all information is kept confidential, and our delivery drivers are discreet and prompt, providing you with estimated arrival times along the way. Not to mention we offer free same-day delivery and promotional offers you simply can’t refuse.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eIn A Pulse - Delivery Service Difference\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eOur client base consists of people from every walk of life, background, and culture. Naturally, most are located in the Greater Toronto Area, but as we offer mail order delivery across Canada, our reach is pretty much nationwide.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eOne aspect that makes us second to none is we are still in a state of growth, primarily because our customers can’t get enough of our products and services.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eWhat sets us apart from the rest of our competitors is that our superior product and services make you want to come back. We also offer deals and daily promos plus cashback in bonus points earned on every order. We are professional, discreet, offering luxury cannabis delivery services and “flavors for the elite.”\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eOur most significant achievements have been our consolidation as a trusted business, retention and expansion of our customer base, and streamlining our process.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eOur dream for the future is to continue to offer our clients the best quality products and services and to hopefully expand our home base to serve other communities.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eWhile we are passionate about what we do, we also care about protecting the environment. To save our forests, we use recycled paper in our packaging and also recycle what we can.\u003c/p\u003e\u003cp\u003e\u003cbr /\u003e\u003c/p\u003e\u003cp\u003eWe also believe in giving back to society and support local causes and community initiatives as part of that belief.\u003c/p\u003e\u003cdiv class=\"separator\" style=\"clear: both; text-align: center;\"\u003e\u003ca href=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglTIuqTp_FFqUGpUbt16jcoRlpk_am1iXgkxuUmz-GVQemkceHRcRsLEKU5ejgJacv3w--AfWMkITQl8l8K4M94wrVSApE1lX0KRqRz4mKIlY2H8M403Oa67YvRL98sxPsId8BV0lWcHBBME6qo3IFEouAuA1QbYf7AgYWwFMcxCy1FY74te6pUWstZw/s2904/Rectangle%208.png\" style=\"margin-left: 1em; margin-right: 1em;\"\u003e\u003cimg border=\"0\" data-original-height=\"1732\" data-original-width=\"2904\" height=\"191\" src=\"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglTIuqTp_FFqUGpUbt16jcoRlpk_am1iXgkxuUmz-GVQemkceHRcRsLEKU5ejgJacv3w--AfWMkITQl8l8K4M94wrVSApE1lX0KRqRz4mKIlY2H8M403Oa67YvRL98sxPsId8BV0lWcHBBME6qo3IFEouAuA1QbYf7AgYWwFMcxCy1FY74te6pUWstZw/s320/Rectangle%208.png\" width=\"320\" /\u003e\u003c/a\u003e\u003c/div\u003e\u003cp\u003e\u003c/p\u003e"
        )}
      </Typography>
    </>
  );
};

export default Test;
