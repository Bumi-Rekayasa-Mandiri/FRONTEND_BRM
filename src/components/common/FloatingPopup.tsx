import { Instagram, Linkedin } from "lucide-react";

const FloatingPopup = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/bumirekayasamandiri",
      icon: <Instagram size={24} />,
      color:
        "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500",
      textColor: "group-hover:text-white text-gray-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/pt-bumi-rekayasa-mandiri/?originalSubdomain=id",
      icon: <Linkedin size={24} />,
      color: "hover:bg-[#0077b5]",
      textColor: "group-hover:text-white text-gray-600",
    },
  ];

  return (
    <div className="fixed bottom-8 right-6 md:right-10 flex flex-col gap-4 z-90">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name}`}
          className={`group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg border border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color}`}
        >
          <span
            className={`transition-colors duration-300 ${social.textColor}`}
          >
            {social.icon}
          </span>

          <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingPopup;
