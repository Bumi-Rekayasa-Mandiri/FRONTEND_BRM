import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingPopup from "../components/common/FloatingPopup";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingPopup/>
    </div>
  );
};

export default MainLayout;
