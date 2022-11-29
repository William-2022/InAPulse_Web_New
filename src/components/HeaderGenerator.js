import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import unAuthedButtonList from "../helpers/unAuthedButtonList";
import {authButtonList} from "../helpers/authButtonList";
import { useLocation } from "react-router-dom";

const HeaderGenerator = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle(`In A Pulse`);
      return;
    } else {
      const pageList = [...unAuthedButtonList, ...authButtonList];
      const currentPath = pageList.filter(
        (page) => page.link === location.pathname
      )[0];
      if (currentPath) {
        setTitle(`${currentPath.label} - In A Pulse`);
      } else {
        setTitle(`In A Pulse`);
      }
    }
  }, [location.pathname]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HeaderGenerator;
