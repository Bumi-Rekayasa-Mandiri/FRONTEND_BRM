import { useNavigate } from "react-router-dom";
import { Construction, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-12 md:py-20 text-center font-jakarta bg-gray-50/50">
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-brm-maroon/10 rounded-full blur-xl group-hover:bg-brm-maroon/20 transition-all duration-500"></div>
        <div className="relative bg-[#F5F2ED] p-6 md:p-8 rounded-full border border-[#E5E0D8] shadow-sm animate-bounce-slow">
          <Construction size={64} className="text-brm-maroon md:w-20 md:h-20" />
        </div>
      </div>

      <h1 className="text-8xl md:text-9xl font-extrabold text-brm-maroon tracking-tighter mb-2 drop-shadow-sm">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-500 max-w-lg mb-10 leading-relaxed text-sm md:text-base">
        Mohon maaf, halaman yang Anda cari mungkin sedang dalam konstruksi,
        telah dipindahkan, atau tidak tersedia saat ini.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} />
          <span>Kembali</span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-brm-maroon text-white hover:bg-[#5a1e1b] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl shadow-brm-maroon/20 active:scale-95"
        >
          <Home size={18} />
          <span>Ke Beranda</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
