import { MapPin, TreePine, Users, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    {
      icon: <TreePine className="w-8 h-8 text-green-700" />,
      title: "Plena Naturaleza",
      description: "Situado en el corazón del Parque Los Villares, rodeado de un entorno natural inigualable."
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-700" />,
      title: "Cerca de Córdoba",
      description: "A pocos minutos de la ciudad, combinando la tranquilidad rural con la comodidad urbana."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-700" />,
      title: "Entorno Tranquilo",
      description: "Un oasis de paz y silencio, perfecto para desconectar del estrés diario."
    },
    {
      icon: <Users className="w-8 h-8 text-green-700" />,
      title: "Para Todos",
      description: "Ideal para familias, parejas y viajeros que buscan una experiencia auténtica."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
                Sobre el camping
              </h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Tu refugio natural en la Sierra de Córdoba
              </h3>
            </div>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              El Camping Los Villares es el destino perfecto para quienes buscan una escapada rural sin alejarse demasiado de la ciudad. Ubicado en plena naturaleza, nuestro camping ofrece un entorno tranquilo y seguro, ideal para disfrutar en familia, en pareja o con amigos.
            </p>
            
            <p className="text-lg text-stone-600 leading-relaxed">
              Despierta con el sonido de los pájaros, respira aire puro y descubre los senderos que recorren el Parque Los Villares. Una experiencia única que te conectará con la naturaleza.
            </p>

            <div className="pt-6">
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800 transition-colors group"
              >
                Ver galería de fotos
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
