import { MapPin, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'El Camping', href: '#about' },
    { name: 'Instalaciones', href: '#facilities' },
    { name: 'Parcelas', href: '#plots' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Reseñas', href: '#reviews' },
    { name: 'Contacto', href: '#location' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773136272/Domus_Beticae._Camping_Los_Villares_xnmco0.png" 
                alt="Logo Camping Los Villares" 
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl font-bold text-green-900">
                Camping Los Villares
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-green-800 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Ver disponibilidad
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-green-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-green-800 hover:bg-stone-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Ver disponibilidad
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
