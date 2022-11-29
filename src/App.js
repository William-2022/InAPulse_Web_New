import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Amplify from "aws-amplify";
import { useMediaQuery} from "@mui/material";

import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";
import Router from "./Router";
import { customTheme } from "./theme/theme";
import awsconfig from "./aws-exports";
import { UserContextProvider } from "./context/UserContextProvider";
import { useJsApiLoader } from "@react-google-maps/api";
import QuotationContextProvider from "./context/QuotationContextProvider";
import OrderContextProvider from "./context/OrderContextProvider";
import { HelmetProvider } from "react-helmet-async";

import ReactGA from "react-ga4";

ReactGA.initialize("G-MK2TB0X90L");
Amplify.configure(awsconfig);

const libraries = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDImAROf3jn2icvHwfc-aZV3jjpKoy81j8",
    libraries: libraries,
  });
  const xs = useMediaQuery(customTheme.breakpoints.between('xs', 'sm'));
  
  return (
    <HelmetProvider>
      <ThemeProvider theme={customTheme}>
        <UserContextProvider>
          <QuotationContextProvider>
            <OrderContextProvider>
              <div className="App">
                <CustomNavbar />
                <Box
                  sx={{
                    pt: "8vh",
                    minHeight: xs ?"88vh" :"72vh" ,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowX:"hidden"
                    
                  }}
                >
                  {isLoaded&&<Router />}
                </Box>
                <Footer />
              </div>
            </OrderContextProvider>
          </QuotationContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
