import {
  Info,
  Phone,
  LiveHelp,
  Work,
  Store,
  ChromeReaderMode,
} from "@mui/icons-material";

const unAuthedButtonList = [
  { label: "Pricing", link: "/Business", Icon: Store },
  {
    label: "About Us",
    link: "/AboutUs",
    Icon: Info,
    subItems: [
      { label: "About Us", link: "/AboutUs", Icon: Info },
      { label: "Blog", link: "/Blog", Icon: ChromeReaderMode },
    ],
  },
  {
    label: "Contact Us",
    link: "/ContactUs",
    Icon: Phone,
    subItems: [
      { label: "Contact Us", link: "/ContactUs", Icon: Phone },
      { label: "Careers", link: "/Careers", Icon: Work },
      { label: "FAQs", link: "/FAQs", Icon: LiveHelp },
    ],
  },
];

export default unAuthedButtonList;
