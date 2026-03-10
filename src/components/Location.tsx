import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
            Ubicación y Contacto
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Estamos aquí para ti
          </h3>
          <p className="mt-6 text-lg text-stone-600">
            Encuéntranos fácilmente en plena Sierra de Córdoba o contáctanos para cualquier duda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Dirección</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Parque Los Villares<br />
                    CO-3408 Km 5,5<br />
                    (Los Villares Bajos Camping)<br />
                    14029 Córdoba, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Teléfono</h4>
                  <a href="tel:+34857890902" className="text-stone-600 hover:text-green-700 transition-colors">
                    857 89 09 02
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Email</h4>
                  <a href="mailto:info@campinglosvillares.com" className="text-stone-600 hover:text-green-700 transition-colors">
                    info@campinglosvillares.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Horario de recepción</h4>
                  <p className="text-stone-600">
                    Lunes a Domingo: 9:00 - 21:00
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Camping+Los+Villares+Sierra+de+Córdoba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                Cómo llegar
              </a>
              <a
                href="tel:+34857890902"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-stone-800 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[600px] rounded-2xl overflow-hidden shadow-lg border border-stone-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12595.528569831518!2d-4.8121834!3d37.9607464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cd98b81b06a07%3A0x9e3b9e1ba12e182a!2sCamping%20Los%20Villares%20Sierra%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1709600000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación del Camping Los Villares"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
