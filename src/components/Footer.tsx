import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773136272/Domus_Beticae._Camping_Los_Villares_xnmco0.png" 
                alt="Logo Camping Los Villares" 
                className="w-10 h-10 object-contain bg-white rounded-full p-1"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold text-white">
                Camping Los Villares
              </span>
            </a>
            <p className="text-stone-400 max-w-sm leading-relaxed mb-6">
              Tu refugio natural en la Sierra de Córdoba. Disfruta de la tranquilidad y vive una experiencia única en plena naturaleza.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Enlaces rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-green-400 transition-colors">El Camping</a></li>
              <li><a href="#facilities" className="hover:text-green-400 transition-colors">Instalaciones</a></li>
              <li><a href="#plots" className="hover:text-green-400 transition-colors">Parcelas</a></li>
              <li><a href="#gallery" className="hover:text-green-400 transition-colors">Galería</a></li>
              <li><a href="#reviews" className="hover:text-green-400 transition-colors">Reseñas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-green-400 transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Condiciones de Reserva</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Camping Los Villares Sierra de Córdoba. Todos los derechos reservados.
          </p>
          <p className="text-sm flex items-center gap-1">
            Diseñado con <span className="text-green-500">♥</span> en plena naturaleza
          </p>
        </div>
      </div>
    </footer>
  );
}
