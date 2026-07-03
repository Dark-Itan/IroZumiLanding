import React from 'react';
import dev1 from '../assets/team/dev1.jpg';
import dev2 from '../assets/team/dev2.jpg';
import dev3 from '../assets/team/dev3.jpg';

const teamMembers = [
  {
    name: 'Maria Y. Gomez Ruiz',
    role: 'Desarrollador Full-Stack',
    imageUrl: dev1,
  },
  {
    name: 'Geovany G. Gomez Rodas',
    role: 'Desarrollador Full-Stack',
    imageUrl: dev2,
  },
  {
    name: 'Jorge A. Pozo Nulutahua',
    role: 'Diseñador UI/UX',
    imageUrl: dev3,
  },
];

// Sección de equipo para la landing page de IroZumi.
// Mantiene la estética premium oscura con tarjetas redondeadas y tipografía limpia.
const TeamSection = () => {
  return (
    <section id="equipo" className="bg-[#05070d] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-4 lg:px-12">
        <div className="space-y-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
              El Equipo Detrás de IroZumi
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              El Equipo Detrás de IroZumi
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-[1.8rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_22px_70px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-center">
                  <div className="flex h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-white/5">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-3 text-center">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-slate-400">{member.role}</p>
                  <div className="mt-5 flex items-center justify-center gap-4 text-slate-300">
                    <a
                      href="#"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-cyan-400/10 hover:text-cyan-100"
                    >
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-cyan-400/10 hover:text-cyan-100"
                    >
                      Portafolio
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] border border-cyan-300/10 bg-cyan-400/5 p-10 text-center shadow-[0_20px_70px_rgba(8,24,40,0.45)]">
            <p className="mx-auto max-w-3xl text-xl italic leading-9 text-cyan-100/90 sm:text-2xl">
              "Donde la tradición se encuentra con el lienzo digital. Diseñado por artistas, programado para el futuro."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
