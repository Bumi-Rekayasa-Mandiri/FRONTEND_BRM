import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, HardHat } from "lucide-react";
import { serviceCategoryApi } from "../../api/serviceCategoryApi";
import type { ServiceCategory } from "../../api/serviceCategoryApi";
import ServiceCard from "../../components/cards/ServiceListCard";
import Loader from "../../components/common/Loader";

const ServiceList = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await serviceCategoryApi.getCategoryBySlug(slug);
        setCategory(data);
      } catch (err) {
        console.error("Failed to fetch category detail:", err);
        setError("Kategori tidak ditemukan atau gagal dimuat.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [slug]);

  if (loading) return <Loader />;

  if (error || !category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 font-jakarta">
        <p className="text-red-600 font-semibold mb-4 text-lg">
          {error || "Data tidak ditemukan"}
        </p>
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 bg-brm-maroon text-white rounded-md hover:bg-[#5a1e1b] transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Kembali ke Layanan
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-full font-jakarta bg-gray-50">
      <div className="relative h-[50vh] min-h-100 w-full overflow-hidden">
        <img
          src="/images/bg-hero-servicelist.png"
          alt="Service List Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#5a1e1b]/95 via-[#5a1e1b]/80 to-[#5a1e1b]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#5a1e1b]/60"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
          <div className="absolute top-24 md:top-32 left-6 md:left-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
          </div>

          <div className="mt-10 max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {category.name}
            </h1>
            <p className="text-gray-100 text-lg font-light leading-relaxed border-l-4 border-white/30 pl-4">
              These are our services list under the "{category.name}" category.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 -mt-10 relative z-20">
        {category.services && category.services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-10 text-center shadow-sm border border-gray-100">
            <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
              <HardHat size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Belum Ada Layanan
            </h3>
            <p className="text-gray-500">
              Saat ini belum ada layanan yang terdaftar dalam kategori ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
