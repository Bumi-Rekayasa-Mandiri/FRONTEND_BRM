import { useEffect, useState } from "react";
import { Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { clientApi } from "../../api/clientApi";
import type { ClientItem } from "../../api/clientApi";
import Loader from "../../components/common/Loader";

const Clients = () => {
  const [clients, setClients] = useState<ClientItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientApi.getAllClients();
        setClients(data);
      } catch (err) {
        console.error("Failed to fetch clients", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen w-full font-jakarta bg-white">
      {/* HERO */}
      <div className="relative h-[50vh] min-h-100 w-full overflow-hidden bg-[#0e3b28]">
        <img
          src="/images/bg-hero-servicelist.png"
          alt="Clients Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0e3b28]/80 to-[#0e3b28] z-10"></div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center pt-32">
          <div className="mb-6 p-4 rounded-2xl border-2 border-white/20 backdrop-blur-sm bg-white/5">
            <Users size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Clients
          </h1>
          <p className="text-gray-200 text-lg font-light max-w-2xl">
            We have worked with leading companies and organizations across
            multiple sectors in Indonesia.
          </p>
        </div>
      </div>

      {/* CLIENT LIST */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {clients.map((client) => {
          const allImages = client.projects
            .flatMap((project) => [
              project.thumbnail,
              ...(project.gallery || []),
            ])
            .filter(Boolean)
            .slice(0, 2);

          return (
            <div
              key={client.id}
              className="grid lg:grid-cols-[180px_1fr_420px] gap-10 items-start"
            >
              {/* LOGO */}
              <div className="w-[180px] h-[120px] flex items-center justify-center">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="w-[140px] h-24 bg-gray-200 flex items-center justify-center text-gray-400">
                    {client.name}
                  </div>
                )}
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-bold text-[#7a1e16] mb-3">
                  {client.name}
                </h2>

                {/* WEBSITE STYLE LIKE IMAGE */}
                {client.website && (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#7a1e16] transition-colors text-base font-medium"
                  >
                    Kunjungi Website
                    <ExternalLink size={16} />
                  </a>
                )}

                {client.projects.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-gray-500 mt-6 mb-3">
                      Projects:
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {client.projects.slice(0, 3).map((project) => (
                        <li key={project.id}>
                          <Link
                            to={`/projects/${project.slug}`}
                            className="hover:text-[#7a1e16] transition-colors"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* PROJECT IMAGES */}
              <div className="flex w-full overflow-hidden rounded-2xl">
                {allImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-1/2 aspect-[4/3] group"
                  >
                    <img
                      src={img}
                      alt={client.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {clients.length === 0 && (
          <div className="text-center text-gray-500">
            Belum ada data klien.
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;