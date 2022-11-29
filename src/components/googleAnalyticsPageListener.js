import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GoogleAnalyticsPageListener = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]);
  return <></>;
};

export default GoogleAnalyticsPageListener;
