import ReactGA from "react-ga4";

const downloadHandler = (link) => {
  let url = "";
  if (link === "apple") {
    url = "https://apps.apple.com/ca/app/in-a-pulse/id1634700410";
    ReactGA.event({
      category: "buttonClick",
      action: "download page",
      label: "apple",
    });
  } else {
    url =
      "https://play.google.com/store/apps/details?id=com.inapulse.customerbeta";
    ReactGA.event({
      category: "buttonClick",
      action: "download page",
      label: "google",
    });
  }
  window.open(url, "_blank");
};

export default downloadHandler;
