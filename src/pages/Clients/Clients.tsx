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
      <div className="relative h-[50vh] min-h-100 w-full overflow-hidden bg-[#0e3b28]">
        <img
          src="/images/bg-hero-servicelist.png"
          alt="Clients Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0e3b28]/80 to-[#0e3b28] z-10"></div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center pt-32">
          <div className="mb-6 p-4 rounded-2xl border-2 border-white/20 animate-fade-in-up backdrop-blur-sm bg-white/5">
            <Users size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight animate-fade-in-up delay-100">
            Our Clients
          </h1>
          <p className="text-gray-200 text-lg font-light max-w-2xl animate-fade-in-up delay-200">
            We have worked with leading companies and organizations across
            multiple sectors in Indonesia.
          </p>
        </div>
      </div>

      <div className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border-b border-gray-100 pb-20 last:border-0 last:pb-0"
            >
              <div className="w-full lg:w-1/3 flex flex-col justify-center items-start space-y-6">
                <div className="h-32 md:h-40 w-auto mb-2">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-full w-auto object-contain object-left"
                    />
                  ) : (
                    <div className="h-full w-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold text-xl border border-gray-200">
                      {client.name}
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#5a1e1b] mb-2">
                    {client.name}
                  </h2>
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-500 hover:text-[#5a1e1b] transition-colors gap-1 mb-4"
                    >
                      Kunjungi Website <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {client.projects.length > 0 ? (
                  <div className="space-y-4 w-full">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Selected Projects:
                    </h4>
                    <ul className="space-y-3">
                      {client.projects.map((project) => (
                        <li key={project.id} className="group">
                          <Link
                            to={`/projects/${project.slug}`}
                            className="flex items-start gap-3 hover:bg-gray-50 p-2 -ml-2 rounded-lg transition-colors"
                          >
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5a1e1b] shrink-0 group-hover:scale-125 transition-transform" />
                            <div>
                              <span className="text-gray-700 font-medium group-hover:text-[#5a1e1b] transition-colors block">
                                {project.title}
                              </span>
                              {project.description && (
                                <p className="text-sm text-gray-500 line-clamp-1 mt-0.5">
                                  {project.description.replace(
                                    /<[^>]*>?/gm,
                                    "",
                                  )}
                                </p>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-400 italic">
                    Belum ada proyek yang dipublikasikan untuk klien ini.
                  </p>
                )}

                {client.projects.length > 0 && (
                  <Link
                    to={`/projects`}
                    className="mt-4 inline-flex items-center gap-2 text-[#5a1e1b] font-semibold hover:gap-3 transition-all"
                  >
                    View All Projects <ArrowRight size={18} />
                  </Link>
                )}
              </div>

              <div className="w-full lg:w-2/3 max-w-4xl">
                {" "}
                {client.projects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {client.projects.slice(0, 2).map((project) => (
                      <Link
                        to={`/projects/${project.slug}`}
                        key={project.id}
                        className={`relative rounded-2xl overflow-hidden shadow-lg group block aspect-video ${
                          client.projects.length === 1
                            ? "md:col-span-2 aspect-21/9"
                            : ""
                        }`}
                      >
                        <img
                          src={
                            project.thumbnail ||
                            "/images/placeholder-project.jpg"
                          }
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg px-6 text-center">
                            {project.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
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
