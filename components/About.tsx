import { CheckCircle, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Orientados a resultados",
    description:
      "Cada estrategia está diseñada para lograr objetivos medibles y tangibles.",
  },
  {
    icon: Lightbulb,
    title: "Innovación continua",
    description:
      "Estamos siempre actualizados con las últimas tendencias del marketing digital.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description:
      "Tu éxito es nuestro éxito. Nos comprometemos como si fuera nuestro negocio.",
  },
  {
    icon: CheckCircle,
    title: "Transparencia total",
    description:
      "Reportes claros, métricas reales y comunicación honesta en todo momento.",
  },
];

const team = [
  {
    name: "Juan González",
    role: "Director Estratégico",
    specialty: "Estrategia Digital",
  },
  {
    name: "María López",
    role: "Especialista en Redes",
    specialty: "Community Management",
  },
  {
    name: "Carlos Rodríguez",
    role: "SEO & SEM Manager",
    specialty: "Posicionamiento",
  },
  {
    name: "Laura Martínez",
    role: "Desarrolladora Web",
    specialty: "Desarrollo Full Stack",
  },
];

export default function About() {
  return (
    <section id="acerca" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
              Sobre Cubo Marketing Digital
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Somos una agencia de marketing digital especializada en transformar
              negocios a través de estrategias digitales comprobadas y
              resultados medibles.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Con más de 5 años de experiencia, hemos ayudado a cientos de
              empresas a alcanzar sus objetivos en redes sociales, posicionamiento
              SEO y desarrollo web.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro equipo está formado por profesionales apasionados por el
              marketing digital, con la experiencia y conocimiento necesario para
              hacer crecer tu negocio en línea.
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan/20 to-blue-100 rounded-xl p-8 h-48 flex items-center justify-center border border-cyan/20">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan mb-2">+100</p>
                  <p className="text-dark font-semibold">Clientes activos</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red/20 to-pink-100 rounded-xl p-8 h-48 flex items-center justify-center border border-red/20">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red mb-2">+5</p>
                  <p className="text-dark font-semibold">Años experiencia</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow/20 to-amber-100 rounded-xl p-8 h-48 flex items-center justify-center border border-yellow/20">
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow mb-2">+50</p>
                  <p className="text-dark font-semibold">Proyectos anual</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan/20 to-teal-100 rounded-xl p-8 h-48 flex items-center justify-center border border-cyan/20">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan mb-2">4.9★</p>
                  <p className="text-dark font-semibold">Calificación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-3xl font-bold text-dark mb-12 text-center">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-cyan hover:bg-cyan/5 transition-all"
                >
                  <div className="mb-4">
                    <Icon size={32} className="text-cyan" />
                  </div>
                  <h4 className="font-bold text-dark mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-3xl font-bold text-dark mb-12 text-center">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:border-cyan transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan to-blue-400 rounded-full"></div>
                <h4 className="font-bold text-dark mb-1">{member.name}</h4>
                <p className="text-sm text-cyan font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
