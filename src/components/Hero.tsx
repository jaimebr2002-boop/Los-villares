import { MapPin, Phone, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773135151/Piscina-los-Villares_hpkdyn.jpg"
          alt="Camping Los villares"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight"
        >
          Camping Los villares <br className="hidden sm:block" />
          <span className="text-green-300">Naturaleza en la Sierra de Cordoba</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto font-medium drop-shadow-md"
        >
          Disfruta de la tranquilidad del Parque Los Villares y vive una experiencia única en plena naturaleza.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar size={20} />
            Ver disponibilidad
          </a>
          
          <a
            href="#location"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            <MapPin size={20} />
            Cómo llegar
          </a>

          <a
            href="tel:+34857890902"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            <Phone size={20} />
            Contactar
          </a>
        </motion.div>
      </div>
    </div>
  );
}
