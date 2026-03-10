import { Tent, Caravan, Bath, TreePine, Map, ParkingCircle, Coffee, Utensils } from 'lucide-react';
import { motion } from 'motion/react';

export default function Facilities() {
  const facilities = [
    {
      icon: <Utensils className="w-10 h-10 text-green-700" />,
      title: "Bar - Restaurante",
      description: "Disfruta de la gastronomía local sin salir del camping."
    },
    {
      icon: <Tent className="w-10 h-10 text-green-700" />,
      title: "Parcelas para tiendas",
      description: "Zonas amplias y sombreadas para acampar."
    },
    {
      icon: <Caravan className="w-10 h-10 text-green-700" />,
      title: "Parcelas para caravanas",
      description: "Espacios adaptados con toma de luz."
    },
    {
      icon: <Caravan className="w-10 h-10 text-green-700" />,
      title: "Zona autocaravanas",
      description: "Área específica con servicios de vaciado."
    },
    {
      icon: <Bath className="w-10 h-10 text-green-700" />,
      title: "Baños y duchas",
      description: "Instalaciones limpias y modernas."
    },
    {
      icon: <TreePine className="w-10 h-10 text-green-700" />,
      title: "Entorno natural",
      description: "Rodeado de vegetación autóctona."
    },
    {
      icon: <Map className="w-10 h-10 text-green-700" />,
      title: "Senderismo y rutas",
      description: "Acceso directo a caminos de la sierra."
    },
    {
      icon: <ParkingCircle className="w-10 h-10 text-green-700" />,
      title: "Aparcamiento",
      description: "Zona segura para vehículos."
    },
    {
      icon: <Coffee className="w-10 h-10 text-green-700" />,
      title: "Zona de descanso",
      description: "Áreas comunes para relajarse."
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
            Instalaciones y Servicios
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Todo lo que necesitas para tu estancia
          </h3>
          <p className="mt-6 text-lg text-stone-600">
            Nuestro camping cuenta con instalaciones pensadas para tu comodidad, integradas perfectamente en el entorno natural.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group bg-stone-50 rounded-2xl p-8 text-center hover:bg-green-50 transition-colors duration-300 border border-stone-100 hover:border-green-200"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {facility.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">
                {facility.title}
              </h4>
              <p className="text-stone-600">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
