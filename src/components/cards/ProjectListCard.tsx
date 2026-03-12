import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ProjectItem } from "../../api/serviceCategoryApi";

interface ProjectListCardProps {
  project: ProjectItem;
  isReversed: boolean;
}

const ProjectListCard = ({ project, isReversed }: ProjectListCardProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="w-full lg:w-1/2 block group cursor-pointer"
      >
        <div className="relative h-64 md:h-80 lg:h-100 w-full overflow-hidden rounded-xl shadow-lg">
          <img
            src={project.thumbnail || "/images/placeholder-project.jpg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/800x600?text=No+Image";
            }}
          />
        </div>
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        <Link
          to={`/projects/${project.slug}`}
          className="group-hover:opacity-80 transition-opacity"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#5a1e1b] mb-3 hover:underline decoration-[#5a1e1b] underline-offset-4">
            {project.title}
          </h3>
        </Link>

        {project.subtitle && (
          <p className="text-[#5a1e1b]/80 font-medium mb-4 text-lg">
            {project.subtitle}
          </p>
        )}

        <div
          className="text-gray-600 leading-relaxed mb-8 line-clamp-4 text-justify prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{
            __html: project.description || "Deskripsi proyek belum tersedia.",
          }}
        />

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-8 py-2 rounded-full border border-gray-400 text-gray-700 font-medium transition-all duration-300 hover:border-[#5a1e1b] hover:bg-[#5a1e1b] hover:text-white group"
        >
          See More
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectListCard;
