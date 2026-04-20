import { useState } from 'react';
import { Instagram, Linkedin, MessageCircle, X, FileText } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.656-1.757-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.573c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FloatingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'WhatsApp',
      label: 'Hubungi Kami',
      url: 'https://wa.me/62811964060',
      icon: <WhatsAppIcon />,
      color: 'hover:bg-[#25D366]',
      textColor: 'group-hover:text-white text-gray-600',
    },
    {
      name: 'Instagram',
      label: 'Instagram',
      url: 'https://instagram.com/bumirekayasamandiri',
      icon: <Instagram size={24} />,
      color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500',
      textColor: 'group-hover:text-white text-gray-600',
    },
    {
      name: 'LinkedIn',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/pt-bumi-rekayasa-mandiri/?originalSubdomain=id',
      icon: <Linkedin size={24} />,
      color: 'hover:bg-[#0077b5]',
      textColor: 'group-hover:text-white text-gray-600',
    },
    {
      name: 'Company Profile',
      label: 'Company Profile',
      url: '/pdf/compro-brm.pdf',
      icon: <FileText size={24} />,
      color: 'hover:bg-brm-green',
      textColor: 'group-hover:text-white text-gray-600',
    },
  ];

  return (
    <div className="fixed bottom-8 right-6 md:right-10 flex flex-col items-center gap-4 z-[90]">
      {/* Expanding Social Links Wrapper */}
      <div className={`flex flex-col gap-3 items-end transition-all duration-300 origin-bottom ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-8 pointer-events-none'}`}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${social.name}`}
            className={`group flex items-center gap-4 pl-5 pr-6 py-4 w-56 bg-white rounded-full shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl ${social.color}`}
          >
            <span className={`shrink-0 transition-colors duration-300 ${social.textColor}`}>{social.icon}</span>
            <span className={`text-base font-semibold whitespace-nowrap transition-colors duration-300 ${social.textColor}`}>
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 pl-5 pr-6 py-4 bg-brm-green hover:opacity-90 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Toggle contact menu"
      >
        <span className="relative w-7 h-7 flex items-center justify-center shrink-0">
          <span className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
            <MessageCircle size={28} />
          </span>
          <span className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
            <X size={28} />
          </span>
        </span>
        <span className="text-base font-semibold whitespace-nowrap">Kontak Kami</span>
      </button>
    </div>
  );
};

export default FloatingPopup;
