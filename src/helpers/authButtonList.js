import DashboardIcon from "@mui/icons-material/Dashboard";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const authButtonList = [
  {
    id: "userpanel",
    Icon: DashboardIcon,
    label: "Dashboard",
    link: "/userpanel",
  },
  {
    id: "getquote",
    Icon: FormatQuoteIcon,
    label: "Get Quote",
    link: "/getquote",
  },
  {
    id: "placeanorder",
    Icon: BrandingWatermarkIcon,
    label: "Place Order",
    link: "/placeanorder",
  },
  {
    id: "orderhistory",
    Icon: HistoryIcon,
    label: "Order History",
    link: "/orderhistory",
  }
];

export const userArray = [
  {
    id: "userprofile",
    Icon: PersonIcon,
    label: "My Profile",
    link: "/userprofile",
  },
  {
    id: "paymentmethod",
    Icon: BrandingWatermarkIcon,
    label: "Payment Method",
    link: "/paymentmethod",
  },
  { id: "logout", Icon: LogoutIcon, label: "Log out", link: "/" },
];


