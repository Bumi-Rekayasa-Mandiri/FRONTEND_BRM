import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "../../api/serviceCategoryApi";

interface ServiceListCardProps {
  service: ServiceItem;
}

const ServiceListCard = ({ service }: ServiceListCardProps) => {
  return (
    <div className="group flex flex-col h-full bg-transparent">
      <div className="relative h-52 md:h-64 w-full overflow-hidden rounded-lg mb-4 md:mb-6">
        <img
          src={service.thumbnail || "/images/placeholder-service.jpg"}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/600x400?text=No+Image";
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="flex flex-col grow">
        <h3 className="text-lg md:text-xl font-bold text-[#5a1e1b] mb-2 md:mb-3 group-hover:text-red-800 transition-colors line-clamp-2">
          {service.name}
        </h3>

        <div
          className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-6 grow line-clamp-3 text-justify prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              service.excerpt ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel justo vel ligula malesuada tincidunt.",
          }}
        />

        <div className="mt-auto">
          <div className="flex justify-end mb-4 md:mb-6">
            <Link
              to={service.slug}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2 rounded-full border border-gray-400 text-gray-700 text-xs md:text-sm font-medium transition-all duration-300 hover:border-[#5a1e1b] hover:bg-[#5a1e1b] hover:text-white group-hover:border-[#5a1e1b]"
            >
              See More
              <ArrowRight size={14} className="md:w-4 md:h-4" />
            </Link>
          </div>

          <div className="w-full border-b border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceListCard;
