import {
  // Liquor,
  LocalFlorist,
  // Medication,
  Feed,
  Key,
  Headphones,
  CarRepair,
} from "@mui/icons-material";

const categoryList = [
  // { label: "Alcohol", icon: <Liquor /> },
  { label: "Flowers", icon: <LocalFlorist />, key: "flowers" },
  // { label: "Pharmacy", icon: <Medication /> },
  { label: "Documents", icon: <Feed />, key: "document" },
  { label: "Keys", icon: <Key />, key: "key" },
  { label: "Electronics", icon: <Headphones />, key: "electronic" },
  { label: "Auto Parts", icon: <CarRepair />, key: "auto parts" },
];

export default categoryList;
