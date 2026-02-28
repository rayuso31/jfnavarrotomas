import {
  Scale,
  Menu,
  Gavel,
  BadgeCheck,
  Users,
  PenTool,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Phone,
  Smartphone,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

const team = [
  {
    name: "Juan Fco. Navarro Tomás",
    role: "Titular del Despacho",
    img: "/images/jfnt.png",
    hasLinkedin: true
  },
  {
    name: "Lydia Gómez Tellez",
    role: "",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    hasLinkedin: false
  },
  {
    name: "Esther Martínez Carne",
    role: "",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", // Fixed: Professional female photo
    hasLinkedin: false
  },
  {
    name: "Yolanda Martínez Carne",
    role: "",
    img: "/images/yolanda_martinez.png",
    hasLinkedin: false
  },
  {
    name: "Ana Belén Cárcel Milan",
    role: "",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80",
    hasLinkedin: false
  },
  {
    name: "Mariola Romero Mas",
    role: "",
    img: "/images/mariola_romero.png",
    hasLinkedin: false
  },
];

export default function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="bg-light-bg text-dark-text font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-black fill-current" />
            <h2 className="text-xl font-black tracking-tighter uppercase">TU PROCURADOR EN LLIRIA</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-bold text-gray-600 hover:text-black transition-colors uppercase tracking-wide" href="#servicios">Servicios</a>
            <a className="text-sm font-bold text-gray-600 hover:text-black transition-colors uppercase tracking-wide" href="#equipo">Equipo</a>
            <a className="px-6 py-2 rounded-full bg-black text-white text-sm font-bold hover:bg-primary transition-colors" href="#contacto">
              Contactar
            </a>
          </div>
          <button className="md:hidden">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="pill-badge">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Disponible en Llíria
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-dark-text mb-8 text-balance">
            El único despacho que garantiza presencia física total en <span className="text-primary inline-block transform hover:-rotate-2 transition-transform">Llíria.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-medium">
            Más de 25 años de ejercicio impecable. Acompañamiento total y presencial.
          </p>
          <a className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform" href="#contacto">
            <Phone className="w-5 h-5" />
            CONTACTO
          </a>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group card-hover">
              <img
                alt="Abogados en pasillo juzgado"
                className="w-full h-full object-cover grayscale-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6EOvi1iOBdm1-ukDIOWm5Dx8rCDGE0YxYjvG4w11q24ldf7thKbr_4sDS0e507PzH1dX5LiUI9kjW1bvzhu1chlJ5LPORkEFr2TCm0qBYhkaKnLwO7PfJdxjPm4un3vmgNh-nG9Tnp88EtGBIZVPHb5nDV81ewjxGbZ4vi3D4jtoSZubcz13RGzIE3Nc39fGek05b3HclryPUG3ws3ElOz52GMnGc8ykxdTZ_1-jK3dwoEvgysk3lk3kFMaBaj7AET9DQ-rjkgJw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Partido Judicial</p>
                <p className="text-sm font-black">De Llíria</p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group card-hover md:mt-12">
              <img
                alt="Profesional revisando documentos"
                className="w-full h-full object-cover grayscale-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpHFr3AW9t5Da5FxI9n9sONef0LkG33oRmUHw130C2r3An7rFoL96JZ6Rnh9tOK4KvrAC_iy_FM1KuwSTgnVEK2cLlVAjLZPlfYibZlh9hd3YgRlPn_iX_flA-M3lf7y7HXc7bPLoWPDh99I0f3rrr7XYAxEdhJVq4-G1BHQUdvnaWmP1mW22ThPTepvzU8jPygMuvtX7geE7hyBKFQh2XKUYre3tXSrDkYrYoUVqRPRYRsf-bBQDHn8gKtN2W3EAxerNBWWz8g_GT"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Enfoque</p>
                <p className="text-sm font-black">Gestión Presencial</p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group card-hover">
              <img
                alt="Libros de derecho antiguos"
                className="w-full h-full object-cover grayscale-img"
                src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?auto=format&fit=crop&w=800&q=80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Trayectoria</p>
                <p className="text-sm font-black">Desde 1988</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
            Para clientes que prefieran el <span className="text-primary">trato humano</span>. Presencia en el Partido JUDICIAL DE LLÍRIA desde <span className="text-primary">1988</span>.
          </h2>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="servicios">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="pill-badge">
              <BadgeCheck className="w-4 h-4" />
              Nuestros Pilares
            </div>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16">
            Compromiso, eficacia y cercanía.<br />Los valores que definen nuestro trabajo 👇
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`bg-black text-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px] transition-all duration-200 cursor-pointer ${activeCard === 1 ? 'scale-95 shadow-inner' : 'hover:-translate-y-1 hover:shadow-xl'}`}
              onClick={() => setActiveCard(1)}
            >
              <div>
                <span className="text-8xl font-black opacity-20 block mb-4">1</span>
                <h4 className="text-2xl font-bold mb-4">Presencialidad Real</h4>
              </div>
              <p className="text-gray-400 font-medium leading-relaxed">
                Esto no es un servicio online. Tu negocio y tú encajáis con nuestra metodología presencial. Estamos físicamente en el juzgado cada mañana.
              </p>
            </div>
            <div
              className={`bg-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px] border border-gray-200 transition-all duration-200 cursor-pointer ${activeCard === 2 ? 'scale-95 shadow-inner bg-gray-50' : 'hover:-translate-y-1 hover:shadow-xl'}`}
              onClick={() => setActiveCard(2)}
            >
              <div>
                <span className="text-8xl font-black text-gray-100 block mb-4">2</span>
                <h4 className="text-2xl font-bold mb-4">Agilidad Extrema</h4>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed">
                Gestionamos notificaciones al instante. El tiempo en los juzgados es dinero, y nosotros no dejamos que se pierda ni un euro.
              </p>
            </div>
            <div
              className={`bg-white p-10 rounded-3xl flex flex-col justify-between min-h-[400px] border border-gray-200 transition-all duration-200 cursor-pointer ${activeCard === 3 ? 'scale-95 shadow-inner bg-gray-50' : 'hover:-translate-y-1 hover:shadow-xl'}`}
              onClick={() => setActiveCard(3)}
            >
              <div>
                <span className="text-8xl font-black text-gray-100 block mb-4">3</span>
                <h4 className="text-2xl font-bold mb-4">Control Exhaustivo</h4>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed">
                Supervisión constante de plazos y trámites. Garantizamos la integridad procesal de cada procedimiento con un seguimiento minucioso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            No somos meros tramitadores, somos tu <span className="text-primary">garantía procesal</span>. Agilizamos cada paso para que tu abogado se centre en la <span className="text-primary">defensa</span> y tú en tu <span className="text-primary">tranquilidad</span>.
          </h2>
        </div>
      </section>

      <section className="py-20 bg-white" id="equipo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center gap-3 mb-16">
            <div className="pill-badge bg-black text-white">
              <Users className="w-4 h-4" />
              NUESTRO EQUIPO
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  {member.role && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {member.role}
                    </div>
                  )}
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-img"
                    src={member.img}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-black">{member.name}</h4>
                {member.hasLinkedin && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-6 bg-black text-white rounded flex items-center justify-center">
                      <Linkedin className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50" id="contacto">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-primary">
              CONSULTAS Y PRESUPUESTOS
            </h2>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nombre y apellidos*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre y apellidos*"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="cp" className="sr-only">C.P.*</label>
                <input
                  type="text"
                  id="cp"
                  placeholder="C.P.*"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">Teléfono*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Teléfono*"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Consulta</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Consulta"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Conozco y acepto las condiciones de <a href="#" className="text-black font-bold underline">Política de Privacidad</a>
                </label>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-primary text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 w-full md:w-auto"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 rounded-t-[3rem] mt-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-8 h-8 text-primary fill-current" />
                <h2 className="text-2xl font-black tracking-tighter uppercase">TU PROCURADOR EN LLIRIA</h2>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">El lugar donde nace la eficacia procesal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
              <div>
                <h5 className="text-primary font-bold mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Teléfonos
                </h5>
                <div className="space-y-2">
                  <a className="text-gray-300 hover:text-white transition-colors block flex items-center gap-2" href="tel:+34963563155">
                    <Phone className="w-3 h-3" /> +34 963 563 155
                  </a>
                  <a className="text-gray-300 hover:text-white transition-colors block flex items-center gap-2" href="tel:+34654535267">
                    <Smartphone className="w-3 h-3" /> +34 654 535 267
                  </a>
                </div>
              </div>
              <div>
                <h5 className="text-primary font-bold mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Ubicación
                </h5>
                <p className="text-gray-300">
                  Serpis nº68-2-2 Edif.Arcade<br />
                  46022 Valencia, España
                </p>
              </div>
              <div>
                <h5 className="text-primary font-bold mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Horario
                </h5>
                <p className="text-gray-300">
                  <span className="flex items-center gap-2 mb-1"><Calendar className="w-3 h-3" /> De Lunes a Viernes</span>
                  <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> De 09:00 A 20:00 Horas</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>© 2026 TU PROCURADOR EN LLIRIA. Todos los derechos reservados.</p>
            <p>Hecho con dedicación</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
