import { useEffect, useState } from "react";
import { Users } from "lucide-react";
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
    <div className="w-full min-h-screen bg-[#f5f5f5] font-jakarta">
      
      {/* HEADER */}
      <div className="py-16 text-center bg-[#0e3b28] text-white">
        <Users size={40} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Our Clients</h1>
        <p className="mt-2 text-gray-200">
          We have worked with leading companies across Indonesia.
        </p>
      </div>

      {/* CLIENT LIST */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-4">

        {clients.map((client) => (
          <div
            key={client.id}
            className="grid lg:grid-cols-[160px_1fr_420px] gap-10 items-start"
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

            {/* TEXT CONTENT */}
            <div>
              <h2 className="text-2xl font-semibold text-[#5a1e1b] mb-4">
                {client.name}
              </h2>

              {client.projects.length > 0 && (
                <>
                  <p className="text-sm font-semibold text-gray-500 mb-3">
                    Projects:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {client.projects.slice(0, 3).map((project) => (
                      <li key={project.id}>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="hover:text-[#5a1e1b] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* PROJECT IMAGES (2 gambar: thumbnail + gallery pertama) */}
            <div className="flex w-full overflow-hidden rounded-2xl">
              {client.projects.slice(0, 1).flatMap((project) =>
                [project.thumbnail, ...(project.gallery || [])]
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((img, index) => (
                    <Link
                      key={`${project.id}-${index}`}
                      to={`/projects/${project.slug}`}
                      className="relative w-1/2 aspect-[4/3] group"
                    >
                    <img
                      src={img}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                    </Link>
                  ))
                )}
              </div>

            
          </div>
        ))}

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
