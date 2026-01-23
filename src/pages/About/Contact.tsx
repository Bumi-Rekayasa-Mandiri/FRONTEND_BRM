import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <main className="w-full">
      <section className="relative h-[400px] bg-gradient-to-r from-brm-green to-brm-green-2 text-white">
        <img 
          src="/images/contact-img-1.png"
          alt="Contact Hero Image"
          className="h-full opacity-25 md:opacity-100"/>
          
        <div className="absolute inset-0 bg-black/30">
          <div className="relative z-10 max-w-6xl md:w-1/2 md:ml-[50%] mx-auto px-6 h-full flex items-center">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src="/images/location-icon.png"
                alt="Location-Icon"
                className="h-24 md:h-32 lg:h-32" />
              <div>
                <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-4">Main Office</h1>
                <p className="max-w-md text-center md:text-left">
                  Ruko Dharmawangsa Blok D-8/DC, 
                  Grand Taruna Karawang, Jawa Barat, Indonesia
                </p>
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/*
      <section className="max-w-6xl mx-auto px-6 py-16">
        <span className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#772824] to-[#C92D29] bg-clip-text text-transparent">
          Who We Are
        </span>
        <p className="text-justify text-black my-6">
          Bumi Rekayasa Mandiri adalah kontraktor yang secara legal dan kompetensi sudah memenuhi syarat untuk mendukung bisnis anda
          dari desain sampai konstruksi didukung software 3D serta tenaga ahli Struktur, Beton, M/E juga smart 
          building agar dapat bersaing di industri 4.0 dengan memperhatikan SDG’s dan safety sebagai pilar utama.
          Jasa Sipil , Konstruksi dan Kelistrikan (Mechanical & Electrical), Smart Building, IoT, Smart Factory.
          Mencakup beragam bidang kerja mulai dari umum, mekanik, kelistrikan, dan jasa layanan kontraktor.
        </p>

        <div className="">

        </div>
      </section>
      */}
      
      <section className="py-16">
        <div className="bg-[#FBF7F3] py-8 max-w-4xl mx-auto px-8 text-center rounded-xl">
          <span className="text-3xl font-bold mb-8 bg-gradient-to-r from-brm-green to-brm-green-2 bg-clip-text text-transparent">
            Business Hours
          </span>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div>
                <div className="font-medium bg-gradient-to-r from-brm-green to-brm-green-2 text-white rounded-4xl py-2 items-center shadow-md">
                  Monday - Friday
                </div>
                <h2 className="text-lg py-4 text-brm-green font-medium underline">
                  9 AM - 5 PM
                </h2>
              </div> 

              <div>
                <div className="font-medium bg-gradient-to-r from-brm-green to-brm-green-2 text-white rounded-4xl py-2 items-center shadow-md">
                  Saturday
                </div>
                <h2 className="text-lg py-4 text-brm-green font-medium underline">
                  10 AM - 2 PM
                </h2>
              </div>

              <div>
                <div className="font-medium bg-gradient-to-r from-[#772824] to-[#C92D29] text-white rounded-4xl py-2 items-center shadow-md">
                  Sunday
                </div>
                <h2 className="text-lg py-4 text-brm-maroon-2 font-medium underline">
                  Closed
                </h2>
              </div>
          </div>

        </div>
      </section>

      <section className="relative h-[600px] md:h-[400px] bg-gradient-to-r from-brm-green-2 to-brm-green text-white">
        <img 
          src="/images/contact-img-3.png" 
          alt="Contact Hero Image"
          className="absolute right-0 top-0 h-full max-w-none opacity-25 md:opacity-100"/>

        <div className="absolute inset-0 bg-black/30">
          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img 
                  src="/images/location-icon.png"
                  alt="Location-Icon" 
                  className="h-16 md:h-24" />
                <div>
                  <h1 className="text-center md:text-left text-2xl font-bold mb-4">Office 2</h1>
                  <p className="text-center md:text-left max-w-md">
                    Kawasan Industri KIIC East Ecospace II No. 2
                    Karawang 41361 Jawa Barat, Indonesia
                  </p>
                </div>
              </div>  

              <div className="flex flex-col md:flex-row items-center gap-4">
                <img 
                  src="/images/location-icon.png"
                  alt="Location-Icon"
                  className="h-16 md:h-24" />
                <div>
                  <h1 className="text-center md:text-left text-2xl font-bold mb-4">Office 3</h1>
                  <p className="text-center md:text-leftmax-w-md">
                    Cikarang - Ejip, Kawasan EJIP Jalan Cimandiri 1
                  </p>
                </div>
              </div> 
            </div>
               
          </div>
        </div>
      </section>

      <section className="relative h-[400px] bg-white text-white overflow-hidden">
        <img 
          src="/images/contact-img-2.png"
          alt="Contact Image" 
          className="absolute right-0 top-0 h-full max-w-none  opacity-15 md:opacity-100"/>

        <div className="absolute inset-0">
          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
            
              <div>
                <span className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#772824] to-[#C92D29] bg-clip-text text-transparent">
                  Contact Us on:
                </span>
                  <ul className="mt-8 space-y-3 w-full max-w-xs md:w-auto">
                    <li>
                      <a
                        href="https://wa.me/62811964060"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group p-2 rounded-xl hover:bg-white/60 transition-all border border-transparent hover:border-[#E5E0D8]"
                      >
                        <div className="h-9 w-9 rounded-full bg-brm-maroon text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#5a1e1b] transition-colors">
                          <MessageCircle size={18} />
                        </div>
                        <span className="text-[#5A2D2C] text-base font-medium group-hover:text-brm-maroon">
                          +62 811-964-060
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="mailto:bumirekayasa.mandiri@gmail.com"
                        className="flex items-center gap-4 group p-2 rounded-xl hover:bg-white/60 transition-all border border-transparent hover:border-[#E5E0D8]"
                      >
                        <div className="h-9 w-9 rounded-full bg-brm-maroon text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#5a1e1b] transition-colors">
                          <Mail size={18} />
                        </div>
                        <span className="text-[#5A2D2C] text-base font-medium group-hover:text-brm-maroon">
                          bumirekayasa.mandiri@gmail.com
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="mailto:bumirekayasa.mandiri@yahoo.com"
                        className="flex items-center gap-4 group p-2 rounded-xl hover:bg-white/60 transition-all border border-transparent hover:border-[#E5E0D8]"
                      >
                        <div className="h-9 w-9 rounded-full bg-brm-maroon text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#5a1e1b] transition-colors">
                          <Mail size={18} />
                        </div>
                        <span className="text-[#5A2D2C] text-base font-medium group-hover:text-brm-maroon">
                          bumirekayasa.mandiri@yahoo.com
                        </span>
                      </a>
                    </li>
                  </ul>
              </div>

            
          </div>
        </div>
      </section>

    </main>
  );
};
export default Contact;