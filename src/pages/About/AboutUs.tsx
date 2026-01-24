import { CheckCircle as CheckIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { certificateApi } from "../../api/certificateApi";
import type { CertificateItem } from "../../api/certificateApi";

const About = () => {

  const [certificates, setCertificates] = useState<CertificateItem[]>([]);
  const [loadingCertificates, setLoadingCertificates] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  useEffect(() => {
      const fetchCertificates = async () => {
        try {
          const data = await certificateApi.getAllCertificates();
          setCertificates(data);
          if (data.length > 0) setActiveIndex(Math.floor(data.length / 2));
        } catch (error) {
          console.error("Failed to fetch certificates:", error);
        } finally {
          setLoadingCertificates(false);
        }
      };
      fetchCertificates();
    }, []);

  return (
    <main className="w-full">
      <section className="h-[250px] md:h-[350px] lg:h-[350px] bg-gradient-to-l from-white to-brm-beige-2 flex items-center pt-16 md:pt-24 lg:pt-24 py-4">
        <img
          src="/images/logo-brm-2.png" 
          alt="Logo BRM"
          className="h-32 md:h-40 lg:h-40 mx-auto"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex gap-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#772824] to-[#C92D29] bg-clip-text text-transparent whitespace-nowrap">
              Who We Are
            </h1>
          <div className="flex-1 h-[1.5px] bg-[#C92D29] mt-6"></div>  
        </div>
          
        <p className="text-justify text-black">
          Bumi Rekayasa Mandiri adalah kontraktor yang secara legal dan kompetensi sudah memenuhi syarat untuk mendukung bisnis anda
          dari desain sampai konstruksi didukung software 3D serta tenaga ahli Struktur, Beton, M/E juga smart 
          building agar dapat bersaing di industri 4.0 dengan memperhatikan SDG's dan safety sebagai pilar utama.
          Jasa Sipil , Konstruksi dan Kelistrikan (Mechanical & Electrical), Smart Building, IoT, Smart Factory.
          Mencakup beragam bidang kerja mulai dari umum, mekanik, kelistrikan, dan jasa layanan kontraktor.
        </p>
      
        <div className="flex flex-col md:flex-row lg:flex-row mt-8 justify-between items-center">
          <div className="max-w-xl font-medium text-white rounded-full py-2 px-10 shadow-md mb-4 bg-gradient-to-r from-brm-green to-brm-green-2 hover:scale-[1.03] transition">
            <CheckIcon className="w-5 h-5 text-white inline mr-4" />
            <span>Quality Driven</span>
          </div>

          <div className="max-w-xl font-medium text-white rounded-full py-2 px-10 shadow-md mb-4 bg-gradient-to-r from-brm-green to-brm-green-2 hover:scale-[1.03] transition">
            <CheckIcon className="w-5 h-5 text-white inline mr-4" />
            <span>Professional Team</span>
          </div>

          <div className="max-w-xl font-medium text-white rounded-full py-2 px-10 shadow-md mb-4 bg-gradient-to-r from-brm-green to-brm-green-2 hover:scale-[1.03] transition">
            <CheckIcon className="w-5 h-5 text-white inline mr-4" />
            <span>Safety First</span>
          </div>

          <div className="max-w-xl font-medium text-white rounded-full py-2 px-10 shadow-md mb-4 bg-gradient-to-r from-brm-green to-brm-green-2 hover:scale-[1.03] transition">
            <CheckIcon className="w-5 h-5 text-white inline mr-4" />
            <span>Sustainable Development</span>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-12 md:pt-6 md:pb-24 flex flex-row gap-16">
        <div className="md:pl-40 lg:pl-40 py-4 md:py-16 px-6 max-w-2xl mx-auto gap-12 flex flex-col">
          <div>
            <div className="flex gap-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#772824] to-[#C92D29] bg-clip-text text-transparent whitespace-nowrap">
                  Our Vision
                </h1>
              <div className="flex-1 h-[1.5px] bg-[#C92D29] mt-6"></div>  
            </div>
            <p className="text-justify text-black">
              Membangun Indonesia dari sisi 
              <span className="font-semibold"> infrastruktur yang terjamin mutunya</span>  dan ramah lingkungan serta 
              berkontribusi pada <span className="font-semibold">SDGs (Sustainable Development Goals)</span>.
            </p>
          </div>

          <div>
            <div className="flex gap-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#772824] to-[#C92D29] bg-clip-text text-transparent whitespace-nowrap">
                  Our Mission
                </h1>
              <div className="flex-1 h-[1.5px] bg-[#C92D29] mt-6"></div>  
            </div>
            <p className="text-justify text-black">
              <span className="font-semibold">Memuaskan konsumen</span> dengan berkarya di bidang <span className="font-semibold">sipil, konstruksi, dan infrastruktur menuju Industri 4.0 </span>
              melalui layanan bermutu, tepat waktu, harga bersaing, mengutamakan keselamatan (safety), serta ramah lingkungan.
            </p>
          </div>
        </div>

        <div className="hidden md:block lg:block relative h-auto w-full">
          <img
            src="/images/about-img-1.png"
            alt="About Us Image" 
            className="right-0 absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/0 to-white/100"></div>
        </div>
      </section>

      <section className="relative h-auto w-full bg-brm-green pt-16 pb-24 px-4 md:px-6 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('/images/about-img-2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay' 
          }}
        ></div>

        <div className="relative z-10 mx-auto md:mx-36 max-w-7xl">
          <div className="flex flex-col gap-4 items-center md:mb-4">
            <img
              src="/images/license-icon.png"
              alt="License Icon"
              className="w-24 h-24"
            />
            <h1 className="text-2xl md:text-4xl font-bold">Our Certificates</h1>
          </div>

          {loadingCertificates ? (
            <p className="text-center text-white/80">Loading certificates...</p>
          ) : certificates.length === 0 ? (
            <p className="text-center text-white/80">No certificates available</p>
          ) : (
            <div className="relative w-full">
              
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-20 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20"
              >
                <ChevronLeft className="w-4 h-4 md:w-8 md:h-8" />
              </button>

              <div className="relative h-[380px] md:h-[450px] overflow-hidden">
                <div 
                  className="flex items-center transition-transform duration-500 ease-out h-full"
                  style={{

                    transform: `translateX(calc(50% - ${
                      window.innerWidth < 768 
                      ? (activeIndex * 280) + 140 
                      : (activeIndex * 320) + 160
                    }px))` 
                  }}
                >
                  {certificates.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveIndex(index)}
                        className={`flex-shrink-0 w-[280px] md:w-[320px] px-4 transition-all duration-500 cursor-pointer flex flex-col items-center ${
                          isActive ? "scale-105 md:scale-110 opacity-100" : "scale-90 opacity-40"
                        }`}
                      >
                        {item.thumbnail && (
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-40 md:h-56 w-auto shadow-2xl mb-6 object-cover"
                          />
                        )}
                        
                        <div className={`text-center transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                          <h3 className="font-bold text-base md:text-lg leading-tight px-2">{item.title}</h3>
                          <p className="text-xs md:text-sm text-white/80 mt-1">
                            {item.issued_by} • {item.issued_year}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-20 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20"
              >
                <ChevronRight className="w-4 h-4 md:w-8 md:h-8" />
              </button>

              <div className="flex justify-center gap-1.5">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 transition-all rounded-full ${
                      index === activeIndex ? "bg-white w-8" : "bg-white/30 w-2"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-4 md:mt-8 max-w-4xl mx-auto px-4">
                <p className="opacity-90 leading-relaxed text-center md:text-center text-justify">
                  {certificates[activeIndex]?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {certificates.map((item) => (
            <div key={item.id} className="flex flex-col items-center px-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-24 md:h-48 w-full object-cover mb-2 hover:scale-[1.03] transition shadow-lg mb-6"
              />
              
              <div className="flex flex-col items-center text-center">
                <h3 className="font-bold text-sm md:text-lg text-brm-green mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-lg text-brm-green mb-2">
                  {item.issued_by} • {item.issued_year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};
export default About;