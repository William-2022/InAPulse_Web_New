import React, { useEffect, useState } from "react";
import { Grid, Box, useMediaQuery, Stack } from "@mui/material";
import { Phone, Mail, LocationOn } from "@mui/icons-material";

import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import ContactText from "../components/ContactText";

import facebook from "../images/facebook_icon.png";
import * as Icon from "../images/Contact/";
import Socials from "../components/general/Socials";
import { getIapContact } from "../apis/iapContact";
import Title from "../components/general/Title";
import Body from "../components/general/Body";
import ResponsiveSection from "../layout/ResponsiveSection";

export default function Contact() {
  const [contact, setContact] = useState(null);
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  // const smbreakPoint = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const fetchContactMethods = async () => {
      try {
        let res = await getIapContact();
        let list = {};
        
        const payload=res.payload
        // sort by order
        payload.sort((a,b)=>a.order-b.order)

        payload.map((item) => {
          if (list[item.type]) {
            return (list[`${item.type}1`] = item.method);
          }
          return (list[item.type] = item.method);
        });

        setContact(list);
      } catch (error) {
        //console.log(error);
      }
    };
    fetchContactMethods();
  }, []);

  const mainContact = [
    {
      value: contact?.phone || "",
      icon: <Phone />,
      format: "phone",
    },
    {
      value: contact?.phone1 || "",
      icon: <Phone />,
      format: "phone",
    },
    {
      value: contact?.email || "info@inapulse.com",
      icon: <Mail />,
    },
    {
      value:  "Unit 2301, 5650 Yonge St, Toronto ON",
      icon: <LocationOn />,
    },
  ];

  return (
    <Box>
      <ResponsiveSection bgcolor="background.main" py={10}>
        <Grid container justifyContent={md ? "center" : undefined}>
          <Grid
            item
            xs={12}
            md={6}
            container
            alignContent="center"
            pr={md ? 3 : 0}
          >
            <Title>
              Get in touch with
              <span> In A Pulse </span>
              doorstep delivery
            </Title>
            <Body my={3}>
              If you have any questions or concerns about our services, feel
              free to fill out the form below and we will get back to you as
              soon as we can!
            </Body>

            {contact && (
              <Box width="100%">
                <Stack>
                  {mainContact.map(({ value, icon, format }, index) => {
                    if (!value) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }
                    return (
                      <ContactText key={index} text={value} format={format}>
                        {icon}
                      </ContactText>
                    );
                  })}
                </Stack>

                <Stack
                  direction="row"
                  mb={4}
                  mt={8}
                  justifyContent="space-evenly"
                  width="80%"
                  mx="auto"
                >
                  <Socials icon={facebook} link={contact?.facebook} dark />
                  <Socials
                    icon={Icon.instagram}
                    link={contact?.instagram}
                    dark
                  />
                  <Socials icon={Icon.twitter} link={contact?.twitter} dark />
                  <Socials icon={Icon.discord} link={contact?.discord} dark />
                  <Socials icon={Icon.youtube} link={contact?.youtube} dark />
                  <Socials icon={Icon.linkedin} link={contact?.linkedin} dark />
                  <Socials icon={Icon.reddit} link={contact?.reddit} dark />
                  <Socials icon={Icon.tiktok} link={contact?.tiktok} dark />
                  <Socials icon={Icon.wechat} link={contact?.wechat} dark />
                  <Socials icon={Icon.whatsapp} link={contact?.whatsapp} dark />
                  <Socials icon={Icon.snapchat} link={contact?.snapchat} dark />
                </Stack>
              </Box>
            )}
          </Grid>
          <Grid item container xs={12} md={6} justifyContent="center">
            <ContactForm />
          </Grid>
        </Grid>
      </ResponsiveSection>

      <Box mt={10} mb="-5px">
        <Map />
      </Box>
    </Box>
  );
}
