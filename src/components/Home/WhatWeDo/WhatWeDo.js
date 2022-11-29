import React from "react";
import ItemsCard from "./ItemsCard"
import { Grid,Box ,useMediaQuery} from "@mui/material";
import Title from "../../general/Title";
import Body from "../../general/Body";


import {
  // Liquor,
  LocalFlorist,
  Medication,
  Feed,
  Headphones,
  MoreHoriz,
} from "@mui/icons-material";
import TvIcon from '@mui/icons-material/Tv';
import flowers from "../../../images/V2/dels/flowers.jpg"
import auto from "../../../images/V2/dels/auto.jpg"
import ele from "../../../images/V2/dels/ele.jpg"
import meds from "../../../images/V2/dels/meds.jpg"

import SettingsIcon from '@mui/icons-material/Settings';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MobileSwiper from "./MobileSwiper";

const WhatWeDo = () => {
  const xs = useMediaQuery((theme) => theme.breakpoints.up("xs"));
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const xl = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const categoryList = [
    // { label: "Alcohol", icon: <Liquor /> },
    { label: "Auto Parts", icon: auto },
    { label: "Flowers", icon: flowers },
    { label: "Electronics", icon: ele },
    { label: "Pharmacy", icon: meds },
    { label: "More items", icon: meds }
   ];


  return (<>
    <Box
      m={"0% 5% 3% 5%"}
      p={"0% 4% 0% 4%"}
      width={"90%"}
      container
    >
      <Grid item xs={12} md={6} p={"0"}>
        <Title     
          title="See What We Can"
          highlight=" Deliver"
          textAlign="center"
     />
      </Grid>
      
      <Box sx={{display:"flex", justifyContent:"space-between",marginTop:"5%"}} >
        {categoryList.map(item=><div>
          
          {!(sm && xs)?null:<ItemsCard list={item} />}
          </div>)}
      </Box>
      <Box >
      {!(sm && xs)?<MobileSwiper list={categoryList} />:null}

      </Box>
      
      
    </Box>
    
    </>
  );
};

export default WhatWeDo;
