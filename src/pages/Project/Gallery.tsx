import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { projectApi } from "../../api/projectApi";
import type { ProjectListItem } from "../../api/projectApi";
import GalleryCarousel from "../../components/gallery/GalleryCarousel";
import ProjectListCard from "../../components/cards/ProjectListCard";
import Loader from "../../components/common/Loader";

const Gallery = () => {
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const galleryData = await projectApi.getGalleryData();

        if (galleryData.length > 0) {
          const allImages = galleryData
            .flatMap((item) => item.gallery)
            .filter((url) => url !== null)
            .slice(0, 8);
          setCarouselImages(allImages);
        }

        const projectsData = await projectApi.getAllProjects();
        setProjects(projectsData);
      } catch (err) {
        console.error("Failed to load gallery data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen w-full font-jakarta">
      <div className="relative h-[50vh] min-h-100 w-full overflow-hidden bg-[#0e3b28]">
        <img
          src="/images/bg-hero-gallery.png"
          alt="Gallery Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#0e3b28]/30 to-[#0e3b28] z-10"></div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center pt-24">
          <div className="mb-6 p-4 rounded-2xl border-2 border-white/20 animate-fade-in-up backdrop-blur-sm bg-white/5">
            <ImageIcon size={48} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight animate-fade-in-up delay-100 drop-shadow-md">
            Construction Record
          </h1>
          <p className="text-gray-100 text-lg font-light max-w-2xl animate-fade-in-up delay-200 drop-shadow-sm">
            This is a showcase that contains compilations of our previous
            construction projects.
          </p>
        </div>
      </div>

      <div className="bg-[#fcfbf9] py-16 lg:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-2/3">
              <GalleryCarousel images={carouselImages} />
            </div>

            <div className="w-full lg:w-1/3 space-y-6 lg:pt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5a1e1b]">
                “The Site” Photo Gallery
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                The site changes its appearance day by day. We have decided to
                showcase photos of job sites because we are excited to share the
                sense of scale and action, as well as the scenes of people at
                work.
              </p>

              <div className="flex items-center gap-4 text-[#5a1e1b] font-medium pt-4">
                <div className="h-0.5 w-12 bg-[#5a1e1b]"></div>
                <span className="uppercase tracking-widest text-sm">
                  Latest Updates
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 bg-[#5a1e1b]/20 mt-16 md:mt-24"></div>
        </div>
      </div>

      <div className="bg-white pb-20 pt-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, index) => (
              <ProjectListCard
                key={project.id}
                project={project}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20 text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p className="text-lg font-medium text-gray-500 mb-2">
                Belum ada data proyek.
              </p>
              <p className="text-sm text-gray-400">
                Pastikan status proyek di backend sudah "Published".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
