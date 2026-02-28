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
import { useState, FormEvent } from 'react';

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
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch('https://formsubmit.co/ajax/jfnavarrotomas@jfnavarrotomas.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (res.ok) {
        setFormStatus('sent');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-light-bg text-dark-text font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden">
      <header>
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" aria-label="Navegación principal">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-black fill-current" aria-hidden="true" />
              <span className="text-base sm:text-xl font-black tracking-tighter uppercase">TU PROCURADOR EN LLIRIA</span>
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
      </header>

      <main>

        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="pill-badge">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Disponible en Llíria
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-dark-text mb-8 text-balance">
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
                  alt="Abogado dando la mano a cliente"
                  className="w-full h-full object-cover grayscale-img"
                  src="/images/enfoque_gestion.png"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-lg">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Enfoque</p>
                  <p className="text-sm font-black">Gestión Presencial</p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group card-hover">
                <img
                  alt="Palacio de Justicia Valencia"
                  className="w-full h-full object-cover grayscale-img"
                  src="/images/trayectoria.png"
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8">
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
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-16">
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
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
                      className="w-full h-full object-cover object-top grayscale-img"
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
              {formStatus === 'sent' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-black mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-500">Nos pondremos en contacto contigo lo antes posible.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary font-bold underline">Enviar otra consulta</button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="Nueva consulta desde la web" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <label htmlFor="name" className="sr-only">Nombre y apellidos*</label>
                    <input
                      type="text"
                      id="name"
                      name="Nombre"
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
                      name="Email"
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
                      name="Codigo Postal"
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
                      name="Telefono"
                      placeholder="Teléfono*"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Consulta</label>
                    <textarea
                      id="message"
                      name="Consulta"
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

                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center">Ha ocurrido un error. Inténtalo de nuevo.</p>
                  )}

                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="bg-primary text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300 w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? 'ENVIANDO...' : 'ENVIAR'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-black text-white py-16 rounded-t-[3rem] mt-10" role="contentinfo">
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

      {/* WhatsApp Floating Widget */}
      <a
        href="https://wa.me/34654535267?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-20 bg-white text-dark-text text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          ¿Hablamos?
        </span>
      </a>
    </div>
  );
}
