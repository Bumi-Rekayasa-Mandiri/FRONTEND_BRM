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
        className="fixed bottom-6 right-6 z-[99999] group"
      >
        <div
          className="
            flex items-center gap-3
            bg-gradient-to-r from-emerald-500 via-green-500 to-green-600
            px-6 py-3
            rounded-full
            shadow-[0_10px_30px_rgba(16,185,129,0.35)]
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)]
            active:scale-95
          "
        >
          <div className="bg-white/20 p-2 rounded-full">
            <img
              src="/images/whatsapp.png"
              className="w-5 h-5"
              alt="WhatsApp"
            />
          </div>

          <span
            className="
              text-amber-300
              font-bold
              text-sm
              tracking-wide
              whitespace-nowrap
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
            "
          >
            Konsultasi via WhatsApp
          </span>
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default MainLayout;