import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F2ED] font-jakarta mt-auto border-t border-[#E5E0D8]">
      <div className="container mx-auto px-6 md:px-12 py-8 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-20">
          <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="shrink-0">
              <img
                src="/images/logo-brm.png"
                alt="PT. Bumi Rekayasa Mandiri"
                className="h-18 md:h-44 w-auto object-contain"
              />
            </div>

            <div className="max-w-md space-y-3">
              {/* Lokasi 1 */}
                <p className="text-[#5A2D2C] text-base md:text-lg leading-relaxed font-medium">
                  Head Office:  
                <br />
                  Ruko Dharmawangsa Blok D-8/DC, Grand Taruna  
                <br />
                  Karawang, Jawa Barat, Indonesia
                </p>

              {/* Lokasi 2 */}
                <p className="text-[#5A2D2C] text-base md:text-lg leading-relaxed font-medium">
                  Kawasan Industri KIIC East Ecospace II No. 2  
                <br />
                  Karawang, Jawa Barat, Indonesia
                </p>

              {/* Lokasi 3 */}
                <p className="text-[#5A2D2C] text-base md:text-lg leading-relaxed font-medium">
                  Ejip Kawasan EJIP  
                <br />
                  Cikarang, Jalan Cimandiri 1
                </p>
            </div>
          </div>

          <div className="w-full md:w-auto min-w-75 flex flex-col items-start md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-brm-maroon mb-4 border-b-2 border-brm-maroon/30 pb-1 px-2 md:px-0 inline-block self-center md:self-start">
              More Information
            </h3>

            <ul className="space-y-3 w-full max-w-xs md:w-auto">
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
                    +62 811–964–060
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

      <div className="bg-gradient-to-r from-brm-maroon to-brm-maroon-2 py-5 border-t border-[#5a1e1b]">
        <div className="container mx-auto px-6 flex flex-col items-center gap-3 text-center">
          <a
            href="https://www.instagram.com/kodekita.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-all backdrop-blur-sm border border-white/10"
          >
            <div className="bg-white rounded-full h-5 w-5 flex items-center justify-center overflow-hidden p-0.5">
              <img
                src="/images/logo-kodekita.png"
                alt="K"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerText = "K";
                    parent.style.color = "#772824";
                    parent.style.fontWeight = "bold";
                    parent.style.fontSize = "10px";
                    parent.style.display = "flex";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                  }
                }}
              />
            </div>
            <span className="text-white text-xs font-semibold tracking-wide">
              Powered by <span className="font-bold">Kodekita</span>
            </span>
          </a>

          <p className="text-white/60 text-xs font-medium">
            &copy; {currentYear} - PT. Bumi Rekayasa Mandiri. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}