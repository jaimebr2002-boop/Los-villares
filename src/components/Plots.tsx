import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Plots() {
  const plots = [
    {
      title: "Habitaciones (Glamping)",
      description: "Acogedoras carpas tipo habitación, perfectas para disfrutar de la naturaleza con todas las comodidades.",
      image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
    },
    {
      title: "Tienda de campaña",
      description: "Parcelas amplias bajo la sombra de los pinos, ideales para disfrutar del contacto directo con la naturaleza.",
      image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773136281/photo-1624923686627-514dd5e57bae_v6v6ns.avif",
      link: "https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
    },
    {
      title: "Caravanas",
      description: "Espacios nivelados y de fácil acceso, equipados con toma de electricidad para una estancia cómoda.",
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
    },
    {
      title: "Autocaravanas",
      description: "Zonas específicas con servicios de vaciado y llenado de aguas, pensadas para vehículos grandes.",
      image: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="plots" className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
            Tipos de parcelas
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Encuentra tu espacio ideal
          </h3>
          <p className="mt-6 text-lg text-stone-600">
            Disponemos de diferentes opciones para adaptarnos a tu forma de viajar.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plots.map((plot, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={plot.image} 
                  alt={plot.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-stone-900 mb-4 font-serif">
                  {plot.title}
                </h4>
                <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                  {plot.description}
                </p>
                
                <a 
                  href={plot.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full bg-stone-900 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-700 transition-colors group/btn"
                >
                  Ver disponibilidad
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
