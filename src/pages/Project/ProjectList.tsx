import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
        window.scrollTo(0, 0);
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
          className="px-6 py-2 bg-[#5a1e1b] text-white rounded-md hover:bg-[#8a2f2b] transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="w-full font-jakarta bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#5a1e1b] text-[#5a1e1b] font-medium hover:bg-[#5a1e1b] hover:text-white transition-all duration-300 w-fit text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="text-gray-500 text-sm font-medium">
            <Link to="/" className="hover:text-[#5a1e1b]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-[#5a1e1b]">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#5a1e1b] font-bold">{service.name}</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5a1e1b] mb-10">
            {service.name}
          </h1>

          <div className="relative w-full h-75 md:h-125 rounded-2xl overflow-hidden shadow-lg mb-12">
            <img
              src={service.thumbnail || "/images/placeholder-service.jpg"}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="w-full mx-auto text-left text-gray-600 leading-relaxed space-y-6 mb-12 text-base md:text-lg prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: service.description || "" }}
          />

          {service.gallery && service.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto">
              {service.gallery.slice(0, 3).map((imgUrl, index) => (
                <div
                  key={index}
                  className="h-48 md:h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <img
                    src={imgUrl}
                    alt={`${service.name} gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-24 pt-16 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5a1e1b] mb-3">
              Our Projects
            </h2>
            <p className="text-gray-500 text-lg">
              These are our previous projects for {service.name}.
            </p>
          </div>

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
            <div className="bg-gray-50 rounded-xl p-16 text-center shadow-sm border border-dashed border-gray-200 max-w-2xl mx-auto">
              <div className="inline-block p-6 rounded-full bg-white mb-6 shadow-sm">
                <HardHat size={48} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#5a1e1b] mb-3">
                Project Coming Soon
              </h3>
              <p className="text-gray-500 text-lg">
                Saat ini belum ada data proyek yang ditampilkan untuk layanan
                ini.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
