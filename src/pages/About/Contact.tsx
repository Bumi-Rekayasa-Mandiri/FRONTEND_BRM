const BUSINESS_HOURS = [
  { day: "Monday - Friday", time: "8 AM - 4 PM", isClosed: false },
  { day: "Saturday", time: "8 AM - 1 PM", isClosed: false },
  { day: "Sunday", time: "Closed", isClosed: true },
];

const Contact = () => {
  return (
    <main className="w-full">
      {/* ================= HERO / OFFICE SECTION ================= */}
      <section className="relative min-h-[650px] bg-linear-to-r from-brm-green to-brm-green-2 text-white flex items-center py-20 overflow-hidden">
        <img
          src="/images/contact-img-1.png"
          alt="Office Building"
          className="absolute inset-0 w-full h-full object-cover opacity-20 md:opacity-100"
        />

        <div className="absolute inset-0 bg-black/50 md:bg-linear-to-r md:from-black/20 md:to-black/70"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">

            {/* ================= MAIN OFFICE ================= */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center space-y-6">
              <img
                src="/images/location-icon.png"
                alt="Location Icon"
                className="h-16"
              />

              <h2 className="text-2xl font-bold tracking-wide">
                Main Office
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Ruko Dharmawangsa Blok D-8/DC <br />
                Grand Taruna Karawang, Jawa Barat, Indonesia
              </p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=Ruko Dharmawangsa Blok D-8/DC Grand Taruna Karawang Jawa Barat Indonesia"
                alt="QR Main Office"
                className="bg-white p-2 rounded-lg shadow-md"
              />
            </div>

            {/* ================= BRANCH OFFICE ================= */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center space-y-6">
              <img
                src="/images/location-icon.png"
                alt="Location Icon"
                className="h-16"
              />

              <h2 className="text-2xl font-bold tracking-wide">
                Branch Office
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Kawasan Industri KIIC East Ecospace II No. 2 <br />
                Karawang 41361 Jawa Barat, Indonesia
              </p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=KIIC East Ecospace II No.2 Karawang 41361 Jawa Barat Indonesia"
                alt="QR Branch Office"
                className="bg-white p-2 rounded-lg shadow-md"
              />
            </div>

            {/* ================= SIDE OFFICE ================= */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center space-y-6">
              <img
                src="/images/location-icon.png"
                alt="Location Icon"
                className="h-16"
              />

              <h2 className="text-2xl font-bold tracking-wide">
                Side Office
              </h2>

              <p className="text-sm md:text-base leading-relaxed text-white/90">
                Cikarang - EJIP <br />
                Kawasan EJIP Jalan Cimandiri 1
              </p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=Kawasan EJIP Jalan Cimandiri 1 Cikarang"
                alt="QR Side Office"
                className="bg-white p-2 rounded-lg shadow-md"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= BUSINESS HOURS ================= */}
      <section className="py-20 px-6 bg-[#FBF7F3]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 bg-linear-to-r from-brm-green to-brm-green-2 bg-clip-text text-transparent inline-block">
            Business Hours
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {BUSINESS_HOURS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4"
              >
                <div
                  className={`w-full text-white font-semibold rounded-full py-2 px-6 shadow-sm ${
                    item.isClosed
                      ? "bg-linear-to-r from-[#772824] to-[#C92D29]"
                      : "bg-linear-to-r from-brm-green to-brm-green-2"
                  }`}
                >
                  {item.day}
                </div>

                <p
                  className={`text-lg font-medium ${
                    item.isClosed
                      ? "text-brm-maroon-2"
                      : "text-brm-green"
                  }`}
                >
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;