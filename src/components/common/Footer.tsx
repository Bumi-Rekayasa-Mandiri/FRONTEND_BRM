import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE9E9] text-gray-800 font-jakarta mt-auto border-t border-[#E5DFDF]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
          {/* Column 1: Logo & Company Description */}
          <div className="w-full lg:w-[32%] space-y-5 flex flex-col items-start text-left">
            <img
              src="/images/logo-brm-2.png"
              alt="PT. Bumi Rekayasa Mandiri"
              className="h-20 md:h-24 w-auto object-contain"
            />
            <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed text-left max-w-sm">
              <strong className="font-bold text-gray-900">
                PT. Bumi Rekayasa Mandiri
              </strong>{" "}
              adalah perusahaan kontraktor yang bergerak di bidang jasa konstruksi,
              berkomitmen untuk menghadirkan solusi pembangunan yang berkualitas,
              efisien, dan berkelanjutan.
            </p>
          </div>

          {/* Column 2: More Information */}
          <div className="w-full lg:w-auto shrink-0 space-y-5 flex flex-col items-start text-left">
            <div className="border-b-2 border-[#782925] pb-1.5 inline-block">
              <h3 className="text-2xl md:text-3xl font-bold text-[#782925] tracking-tight">
                More Information
              </h3>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+62811964060"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105">
                  <Phone size={20} className="fill-current" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-gray-600 font-medium block">
                    Phone
                  </span>
                  <span className="text-sm md:text-base font-bold text-gray-900 group-hover:text-[#782925] transition-colors whitespace-nowrap">
                    +62 811–964–060
                  </span>
                </div>
              </a>

              {/* Fax */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone size={20} className="fill-current" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-gray-600 font-medium block">
                    Fax
                  </span>
                  <span className="text-sm md:text-base font-bold text-gray-900 whitespace-nowrap">
                    (0267)8639837
                  </span>
                </div>
              </div>

              {/* Email 1 */}
              <a
                href="mailto:bumirekayasa.mandiri@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <span className="text-xs text-gray-600 font-medium block">
                    Email
                  </span>
                  <span className="text-sm md:text-base font-bold text-gray-900 group-hover:text-[#782925] transition-colors whitespace-nowrap">
                    bumirekayasa.mandiri@gmail.com
                  </span>
                </div>
              </a>

              {/* Email 2 */}
              <a
                href="mailto:marketing@bumirekayasamandiri.co.id"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:scale-105">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <span className="text-xs text-gray-600 font-medium block">
                    Email
                  </span>
                  <span className="text-sm md:text-base font-bold text-gray-900 group-hover:text-[#782925] transition-colors whitespace-nowrap">
                    marketing@bumirekayasamandiri.co.id
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="w-full lg:w-[34%] space-y-5 flex flex-col items-start text-left">
            <div className="border-b-2 border-[#782925] pb-1.5 inline-block">
              <h3 className="text-2xl md:text-3xl font-bold text-[#782925] tracking-tight">
                Location
              </h3>
            </div>

            <div className="space-y-4">
              {/* Main Office */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                  <MapPin size={20} />
                </div>
                <p className="text-xs md:text-sm text-gray-800 leading-snug text-left">
                  Ruko Dharmawangsa Blok D-8/DC, Grand Taruma Karawang, Jawa Barat,
                  Indonesia
                  <strong className="font-bold text-gray-900 block mt-1">
                    (Main Office)
                  </strong>
                </p>
              </div>

              {/* Branch Office */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                  <MapPin size={20} />
                </div>
                <p className="text-xs md:text-sm text-gray-800 leading-snug text-left">
                  KIIC East Ecospace II No.2 Karawang 41361 Jawa Barat Indonesia
                  <strong className="font-bold text-gray-900 block mt-1">
                    (Branch Office)
                  </strong>
                </p>
              </div>

              {/* Site Office */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#782925] text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                  <MapPin size={20} />
                </div>
                <p className="text-xs md:text-sm text-gray-800 leading-snug text-left">
                  Kawasan EJIP Jalan Cimandiri 1 Cikarang
                  <strong className="font-bold text-gray-900 block mt-1">
                    (Site Office)
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-linear-to-r from-brm-maroon to-brm-maroon-2 py-5 border-t border-[#5a1e1b]">
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
