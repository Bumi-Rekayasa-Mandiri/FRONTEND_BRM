import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, HardHat } from "lucide-react";
import { serviceCategoryApi } from "../../api/serviceCategoryApi";
import type { ServiceItem } from "../../api/serviceCategoryApi";
import ProjectListCard from "../../components/cards/ProjectListCard";
import Loader from "../../components/common/Loader";

const ProjectList = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState<ServiceItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await serviceCategoryApi.getServiceBySlug(slug);
        setService(data);
      } catch (err) {
        console.error(err);
        setError("Layanan tidak ditemukan atau gagal dimuat.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [slug]);

  if (loading) return <Loader />;

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 font-jakarta">
        <p className="text-red-600 font-semibold mb-4 text-lg">
          {error || "Data tidak ditemukan"}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-brm-maroon text-white rounded-md hover:bg-[#5a1e1b] transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Kembali
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
          <div className="absolute top-20 md:top-28 left-6 md:left-12">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          </div>

          <div className="mt-10 max-w-4xl animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              <span className="opacity-70 font-normal">
                {service.category?.name || "Service"}
              </span>{" "}
              &gt; {service.name}
            </h1>
            <p className="text-gray-100 text-lg font-light leading-relaxed border-l-4 border-white/30 pl-4">
              These are our previous projects for {service.name}.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 lg:py-24">
        {service.projects && service.projects.length > 0 ? (
          <div className="flex flex-col gap-16 lg:gap-24">
            {service.projects.map((project, index) => (
              <ProjectListCard
                key={project.id}
                project={project}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-16 text-center shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="inline-block p-6 rounded-full bg-gray-50 mb-6">
              <HardHat size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-[#5a1e1b] mb-3">
              Project Coming Soon
            </h3>
            <p className="text-gray-500 text-lg">
              Saat ini belum ada data proyek yang ditampilkan untuk layanan ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
