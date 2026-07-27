import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsConditions from "./pages/TermsConditions";
import AccountDeletion from "./pages/AccountDeletion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="account-deletion" element={<AccountDeletion />} />
      </Route>
    </Routes>
  );
}

export default App;