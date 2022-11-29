import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FAQsPage from "./pages/FAQsPage";
// import Quote from './pages/Quote-page/Quote'
import About from "./pages/About";
import Send from "./pages/Send";
// import Test from "./pages/Test";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import Home from "./pages/Home";
import Support from "./pages/Support";
import DoestNotExist from "./pages/DoestNotExist";
import ScrolltoTopWrapper from "./components/ScrolltoTopWrapper";
import ForgotPassword from "./pages/ForgotPassword";
import useAuth from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import PlaceAnOrder from "./pages/PlaceAnOrder";
import UserProfile from "./pages/UserProfile/UserProfile";
import OverScreenLoader from "./components/OverScreenLoader";
import OrderHistory from "./pages/Account/OrderHistory";
import OrderDetails from "./pages/Account/OrderDetails";
import UserPanel from "./pages/UserPanel";
import BlogList from "./pages/BlogList";
import Blog from "./pages/Blog";
import GoogleAnalyticsPageListener from "./components/googleAnalyticsPageListener";
import HeaderGenerator from "./components/HeaderGenerator";
import Business from "./pages/Business";
import GetQuote from "./pages/UserProfile/GetQuote";
import PaymentMethods from "./pages/UserProfile/PaymentMethods";
import { Typography, useMediaQuery } from "@mui/material";

const Router = () => {
  const { federatedSignInListner, setIsLoading, isLoading, user } = useAuth();

  useEffect(() => {
    const unsubscribe = federatedSignInListner(setIsLoading);

    return unsubscribe;
  }, [federatedSignInListner, setIsLoading, isLoading]);

  const xs = useMediaQuery((theme) => theme.breakpoints.between('xs', 'sm'));
  const md = useMediaQuery((theme) => theme.breakpoints.between('md', 'lg'));
  //const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));
 
  return (
    <>
      <HeaderGenerator />
      <GoogleAnalyticsPageListener />
      <ScrolltoTopWrapper>
        <OverScreenLoader isLoading={isLoading} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Send" element={<Send />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="/FAQs" element={<FAQsPage />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Blog" element={<BlogList />} />
          <Route path="/Blog/:postId" element={<Blog />} />
          {/* <Route path="Test" element={<Test />} /> */}
          <Route element={<ProtectedRoute user={user} isLoading={isLoading} lg={lg} xs={xs} md={md}/>}>
            <Route path="/UserPanel" element={<UserPanel />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/getquote" element={<GetQuote />} />
            <Route path="/PlaceAnOrder" element={<PlaceAnOrder />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
            <Route path="/paymentmethod" element={<PaymentMethods />} />
            <Route path="/OrderDetails/:id" element={<OrderDetails />} />
            </Route>
          <Route path="/*" element={<DoestNotExist />} />
        </Routes>
      </ScrolltoTopWrapper>
    </>
  );
};

export default Router;
