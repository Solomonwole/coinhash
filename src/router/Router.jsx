import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Redirect from "../pages/404/redirect";
import EmailVerification from "../pages/EmailVerify/EmailVerification";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import LandingPage from "../pages/LandingPage/Landing";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BtcPackage from "../pages/UserDashboard/Packages/BtcPackage";
import EthPackage from "../pages/UserDashboard/Packages/EthPackage";
import Settings from "../pages/UserDashboard/Settings";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import BtcWallet from "../pages/WalletAddress/BtcWallet";
import EthWallet from "../pages/WalletAddress/EthWallet";
import Bitcoin from "../pages/WalletInput/Bitcoin";
import ETH from "../pages/WalletInput/ETH";
import { RequireLoggedIn } from "../utils/Protect";

const RouterPage = () => {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          {/* Protected Links for Users Only  */}


          {/* <PrivateRoute exact path="/dashboard" component={UserDashboard} /> */}
    <Route element={<RequireLoggedIn />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/bitcoin" element={<Bitcoin />} />
          <Route path="/ethereum" element={<ETH />} />
          <Route path="/deposit-btc" element={<BtcWallet />} />
          <Route path="/deposit-eth" element={<EthWallet />} />
          <Route path="/btc-package" element={<BtcPackage />} />
          <Route path="/eth-package" element={<EthPackage />} />
          </Route>
          {/* Protected Links for Users Only  */}
          <Route path="*" element={<Redirect />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterPage;
