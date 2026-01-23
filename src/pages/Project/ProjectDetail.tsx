import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react";
import { projectApi } from "../../api/projectApi";
import type { ProjectDetailItem } from "../../api/projectApi";
import Loader from "../../components/common/Loader";

const stripHtml = (html: string) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<ProjectDetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const data = await projectApi.getProjectBySlug(slug);
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project detail:", err);
        setError("Proyek tidak ditemukan.");
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [slug]);

  const nextImage = () => {
    if (!project?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    if (!project?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1,
    );
  };

  if (loading) return <Loader />;

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50 font-jakarta">
        <p className="text-red-600 font-semibold mb-4 text-lg">
          {error || "Data tidak ditemukan"}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#5a1e1b] text-white rounded-md hover:bg-[#4a1816] transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full font-jakarta bg-white pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-6 md:mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#5a1e1b] text-[#5a1e1b] text-sm font-medium hover:bg-[#5a1e1b] hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back
          </button>
        </div>

        <div className="max-w-4xl mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#5a1e1b] mb-4 leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              {project.subtitle}
            </p>
          )}
          <div className="w-full h-px bg-gray-300 mt-8"></div>
        </div>

        <div className="w-full h-75 md:h-125 lg:h-150 rounded-xl overflow-hidden shadow-lg mb-12 bg-gray-100">
          <img
            src={project.thumbnail || "/images/placeholder-project.jpg"}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/1200x600?text=No+Image";
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 bg-[#fcf9f6] p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0e3b28] flex items-center justify-center shrink-0 text-white shadow-lg">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-[#0e3b28] font-bold text-lg mb-1">
                Location
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {project.location || "Lokasi tidak tersedia"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#fcf9f6] p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0e3b28] flex items-center justify-center shrink-0 text-white shadow-lg">
              <Calendar size={24} />
            </div>
            <div>
              <h4 className="text-[#0e3b28] font-bold text-lg mb-1">
                Construction Period
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                {project.completion_date || "Tanggal tidak tersedia"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mb-16 text-gray-600 leading-relaxed text-lg text-justify space-y-4">
          <p>
            {project.description
              ? stripHtml(project.description)
              : "Tidak ada deskripsi detail."}
          </p>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="w-full relative">
            <div className="md:hidden relative group">
              <div className="relative h-75 rounded-xl overflow-hidden shadow-md bg-gray-100">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={`Gallery ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#5a1e1b] shadow-sm hover:bg-white hover:scale-110 transition-all z-10"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/90 text-[#5a1e1b] shadow-sm hover:bg-white hover:scale-110 transition-all z-10"
              >
                <ArrowRight size={20} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.gallery.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-6 bg-[#5a1e1b]"
                        : "w-1.5 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="hidden xl:flex absolute top-1/2 -left-16 -translate-y-1/2">
                <button
                  aria-label="Previous gallery group"
                  className="p-3 rounded-full border border-gray-300 text-gray-400 hover:border-[#5a1e1b] hover:text-[#5a1e1b] transition-colors bg-white shadow-sm"
                >
                  <ArrowLeft size={24} />
                </button>
              </div>
              <div className="hidden xl:flex absolute top-1/2 -right-16 -translate-y-1/2">
                <button
                  aria-label="Next gallery group"
                  className="p-3 rounded-full border border-gray-300 text-gray-400 hover:border-[#5a1e1b] hover:text-[#5a1e1b] transition-colors bg-white shadow-sm"
                >
                  <ArrowRight size={24} />
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="group relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-100"
                  >
                    <img
                      src={imgUrl}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
