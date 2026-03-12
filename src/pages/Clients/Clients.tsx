import { useEffect, useState } from "react";
import { Users, ExternalLink, ArrowRight } from "lucide-react";
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
        setLoading(true);
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
      <div className="relative h-[40vh] min-h-70 w-full overflow-hidden bg-[#0e3b28]">
        <img
          src="/images/bg-hero-servicelist.png"
          alt="Clients Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0e3b28]/80 to-[#0e3b28] z-10"></div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center pt-24">
          <div className="mb-4 p-3 rounded-2xl border-2 border-white/20 backdrop-blur-sm bg-white/5">
            <Users size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Our Clients
          </h1>
          <p className="text-gray-200 text-base font-light max-w-xl">
            We have worked with leading companies and organizations across
            multiple sectors in Indonesia.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col divide-y divide-gray-100">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-12 first:pt-0 last:pb-0"
            >
              <div className="flex flex-row lg:flex-row items-start gap-6 w-full lg:w-1/2">
                <div className="w-36 h-36 shrink-0 flex items-center justify-center">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-bold text-sm border border-gray-200 text-center px-2">
                      {client.name}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {client.name}
                  </h2>

                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-gray-500 hover:text-[#5a1e1b] transition-colors gap-1"
                    >
                      Kunjungi Website <ExternalLink size={12} />
                    </a>
                  )}

                  {client.projects.length > 0 ? (
                    <div className="mt-1">
                      <p className="text-sm font-semibold text-gray-500 mb-2">
                        Projects:
                      </p>
                      <ul className="space-y-1.5 list-disc list-inside">
                        {client.projects.map((project) => (
                          <li
                            key={project.id}
                            className="text-sm text-gray-600 leading-snug"
                          >
                            <Link
                              to={`/projects/${project.slug}`}
                              className="hover:text-[#5a1e1b] transition-colors"
                            >
                              {project.title}
                              {project.description && (
                                <span className="text-gray-400 ml-1">
                                  —{" "}
                                  {project.description
                                    .replace(/<[^>]*>?/gm, "")
                                    .slice(0, 60)}
                                  {project.description.replace(/<[^>]*>?/gm, "")
                                    .length > 60
                                    ? "..."
                                    : ""}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-gray-400 italic text-sm">
                      Belum ada proyek yang dipublikasikan untuk klien ini.
                    </p>
                  )}

                  {client.projects.length > 0 && (
                    <Link
                      to={`/clients/${client.id}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-[#5a1e1b] text-sm font-semibold hover:gap-2.5 transition-all"
                    >
                      View All Projects <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                {client.projects.length > 0 ? (
                  <div
                    className={`grid gap-3 w-full ${
                      client.projects.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-2"
                    }`}
                  >
                    {client.projects.slice(0, 2).map((project) => (
                      <Link
                        to={`/projects/${project.slug}`}
                        key={project.id}
                        className={`relative rounded-xl overflow-hidden shadow-md group block ${
                          client.projects.length === 1
                            ? "aspect-video"
                            : "aspect-video"
                        }`}
                      >
                        <img
                          src={
                            project.thumbnail ||
                            "/images/placeholder-project.jpg"
                          }
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm px-4 text-center">
                            {project.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 text-sm">
                    No Project Images Available
                  </div>
                )}
              </div>
            </div>
          ))}

          {clients.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Belum ada data klien.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
