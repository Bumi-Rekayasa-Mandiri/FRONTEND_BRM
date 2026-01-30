const BUSINESS_HOURS = [
  { day: "Monday - Friday", time: "9 AM - 5 PM", isClosed: false },
  { day: "Saturday", time: "10 AM - 2 PM", isClosed: false },
  { day: "Sunday", time: "Closed", isClosed: true },
];

const SECONDARY_OFFICES = [
  {
    title: "Office 2",
    address:
      "Kawasan Industri KIIC East Ecospace II No. 2 Karawang 41361 Jawa Barat, Indonesia",
  },
  {
    title: "Office 3",
    address: "Cikarang - Ejip, Kawasan EJIP Jalan Cimandiri 1",
  },
];

const Contact = () => {
  return (
    <main className="w-full">
      <section className="relative h-125 bg-linear-to-r from-brm-green to-brm-green-2 text-white flex items-center">
        <img
          src="/images/contact-img-1.png"
          alt="Main Office Building"
          className="absolute inset-0 w-full h-full object-cover opacity-25 md:opacity-100"
        />

        <div className="absolute inset-0 bg-black/40 md:bg-linear-to-r md:from-black/10 md:to-black/60"></div>

        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="md:w-1/2 md:ml-auto flex items-center justify-center md:justify-start">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <img
                src="/images/location-icon.png"
                alt="Location Icon"
                className="h-24 w-auto object-contain"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Main Office
                </h1>
                <p className="max-w-md text-lg leading-relaxed">
                  Ruko Dharmawangsa Blok D-8/DC, <br />
                  Grand Taruna Karawang, Jawa Barat, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="bg-[#FBF7F3] py-12 max-w-5xl mx-auto px-6 md:px-12 text-center rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold mb-10 bg-linear-to-r from-brm-green to-brm-green-2 bg-clip-text text-transparent inline-block">
            Business Hours
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {BUSINESS_HOURS.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-full font-medium text-white rounded-full py-2 px-6 shadow-md mb-4 ${
                    item.isClosed
                      ? "bg-linear-to-r from-[#772824] to-[#C92D29]"
                      : "bg-linear-to-r from-brm-green to-brm-green-2"
                  }`}
                >
                  {item.day}
                </div>
                <p
                  className={`text-lg font-medium underline underline-offset-4 ${
                    item.isClosed ? "text-brm-maroon-2" : "text-brm-green"
                  }`}
                >
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-115 bg-linear-to-r from-brm-green-2 to-brm-green text-white">
        <img
          src="/images/contact-img-3.png"
          alt="Contact Hero Image"
          className="absolute right-0 top-0 h-full w-full md:w-auto max-w-none object-cover opacity-25 md:opacity-100"
        />

        <div className="absolute inset-0 bg-black/30">
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="space-y-12 w-full max-w-lg">
              {SECONDARY_OFFICES.map((office, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
                >
                  <img
                    src="/images/location-icon.png"
                    alt="Location-Icon"
                    className="h-16 md:h-24 shrink-0"
                  />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{office.title}</h2>
                    <p className="max-w-md text-gray-100 text-lg">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
