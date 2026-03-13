import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FloatingPopup from '../components/common/FloatingPopup';
import ScrollToTop from '../components/common/ScrollToTop';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className={`grow ${isHome ? '' : 'pt-[72px] md:pt-[112px]'}`}>
        <Outlet />
      </main>
      <Footer />
      <FloatingPopup />
    </div>
  );
};

export default MainLayout;
