import { useState } from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      src: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773136281/photo-1624923686627-514dd5e57bae_v6v6ns.avif",
      alt: "Tienda de campaña"
    },
    {
      src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Parcelas rodeadas de árboles"
    },
    {
      src: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Entorno natural"
    },
    {
      src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Instalaciones del camping"
    },
    {
      src: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ambiente relajado"
    },
    {
      src: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Atardecer en la sierra"
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
            Galería
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Descubre nuestro entorno
          </h3>
          <p className="mt-6 text-lg text-stone-600">
            Un vistazo a la experiencia que te espera en el Parque Los Villares.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg tracking-wide px-4 text-center">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
