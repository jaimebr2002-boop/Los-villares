import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Paula Oviedo López",
      rating: 5,
      text: "Llegamos con nuestra furgo y dos perros grandes y nos quedamos dos noches. El trato por parte del personal tanto de recepción como del bar-restaurante fue de 10/10. Muy amables y atentos. Sin duda volveremos.",
      platform: "Google",
      time: "Hace 2 meses"
    },
    {
      id: 2,
      name: "Lidia Ojeda Marín",
      rating: 5,
      text: "Me ha encantado. Está en plena sierra con un paisaje espectacular. Además tienen pequeñas casitas para que los niños jueguen, muy bonito todo.",
      platform: "Google",
      time: "Hace 3 meses"
    },
    {
      id: 3,
      name: "JST Sanz",
      rating: 5,
      text: "He disfrutado mucho los días en este camping. La piscina está genial, el desayuno rico y el entorno es estupendo y tranquilo.",
      platform: "Google",
      time: "Hace 4 meses"
    },
    {
      id: 4,
      name: "María León",
      rating: 5,
      text: "Excelente camping en la sierra de Córdoba. Camping familiar y acogedor, destacando la profesionalidad y amabilidad del equipo. Limpieza de 10.",
      platform: "Google",
      time: "Hace 5 meses"
    },
    {
      id: 5,
      name: "Xabi",
      rating: 5,
      text: "Espectacular. Servicios y entorno. Un lugar perfecto para descansar y recorrer la serranía.",
      platform: "Google",
      time: "Hace 6 meses"
    },
    {
      id: 6,
      name: "El Menú de Gemma",
      rating: 5,
      text: "Estar en plena sierra a solo 25 minutos del centro de Córdoba es un lujo. El entorno es precioso y la experiencia muy agradable.",
      platform: "Google",
      time: "Hace 7 meses"
    },
    {
      id: 7,
      name: "Mel Kruse",
      rating: 4,
      text: "No te esperas una atmósfera tan tranquila tan cerca de Córdoba. Por la noche hay un silencio increíble.",
      platform: "Google",
      time: "Hace 8 meses"
    },
    {
      id: 8,
      name: "Fran Gragera",
      rating: 5,
      text: "Sitio encantador, personal muy amable, piscina muy chula y rodeado de naturaleza con senderos para caminar o ir en bici.",
      platform: "Google",
      time: "Hace 9 meses"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Handle responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  }, [maxIndex]);

  // Auto-advance every 10 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="reviews" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
            Reseñas de clientes
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
            Lo que dicen nuestros visitantes
          </h3>
          <p className="mt-6 text-lg text-stone-600">
            Descubre las experiencias de quienes ya han disfrutado del Camping Los Villares.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-50 hover:text-green-700 transition-colors border border-stone-100 focus:outline-none"
              aria-label="Anterior reseña"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-50 hover:text-green-700 transition-colors border border-stone-100 focus:outline-none"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / reviews.length)}%)`,
                width: `${(reviews.length / itemsToShow) * 100}%`
              }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="px-3 shrink-0"
                  style={{ width: `${100 / reviews.length}%` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900">{review.name}</h4>
                          <p className="text-xs text-stone-500">{review.time}</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-stone-300'}`} />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-stone-600 italic flex-grow leading-relaxed">
                      "{review.text}"
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Publicado en
                      </span>
                      <span className="text-sm font-bold text-stone-800 flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        {review.platform}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.google.es/maps/place/Camping+Los+Villares+Sierra+de+C%C3%B3rdoba/@37.9607506,-4.8147583,17z/data=!4m11!3m10!1s0xd6cd98b81b06a07:0x9e3b9e1ba12e182a!5m2!4m1!1i2!8m2!3d37.9607464!4d-4.8121834!9m1!1b1!16s%2Fg%2F11fklbfwv9?hl=es&entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white border-2 border-stone-200 text-stone-800 px-8 py-4 rounded-xl font-semibold text-lg hover:border-green-600 hover:text-green-700 transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Dejar reseña en Google
          </a>
          
          <a
            href="https://www.tripadvisor.es/UserReviewEdit-g187430-d23417617-Camping_Los_Villares_Sierra_de_Cordoba-Cordoba_Province_of_Cordoba_Andalucia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#34E0A1] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2bbd87] transition-all shadow-sm hover:shadow-md"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.33 11.52a2.14 2.14 0 00-1.08-1.85l-9.1-5.25a2.14 2.14 0 00-2.15 0l-9.1 5.25a2.14 2.14 0 00-1.08 1.85v10.5a2.14 2.14 0 001.08 1.85l9.1 5.25a2.14 2.14 0 002.15 0l9.1-5.25a2.14 2.14 0 001.08-1.85v-10.5zm-11.33 9.4a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-9.17a3.67 3.67 0 100 7.34 3.67 3.67 0 000-7.34zm-5.5-2.75a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm11 0a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z"/>
            </svg>
            Dejar reseña en TripAdvisor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
