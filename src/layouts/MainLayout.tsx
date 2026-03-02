import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      {/* FLOATING WHATSAPP BUTTON GLOBAL */}
      <a
        href="https://wa.me/62811964060"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[99999] inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-105"
      >
        <img
          src="/images/IconCall.png"
          className="w-5 h-5"
        />
        <span className="font-semibold text-sm whitespace-nowrap">
          Konsultasi via WhatsApp
        </span>
      </a>

      <Footer />
    </div>
  );
};

export default MainLayout;