import React from 'react';

// Componente Hero para la landing page de IroZumi.
// Incluye título con animación, descripción, beneficios y CTA.
const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-[calc(100vh-5rem)] bg-black text-white sm:min-h-screen">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/95 via-slate-900/90 to-slate-800/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur">
                Bienvenido a IroZumi
              </p>
              <h1 className="animate-fade-up text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                IroZumi
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Una plataforma diseñada para inspirar creatividad, optimizar tu flujo de trabajo y conectar a tu equipo con soluciones intuitivas. IroZumi transforma ideas en experiencias digitales elegantes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-xl shadow-black/20 backdrop-blur">
                <h2 className="text-xl font-semibold text-white">Beneficios clave</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">✓</span>
                    Interfaz moderna y accesible para tus proyectos.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">✓</span>
                    Herramientas colaborativas y flujos ágiles.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">✓</span>
                    Experiencia optimizada en escritorio y móvil.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-slate-200 shadow-xl shadow-black/30">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">Oferta especial</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Comienza con IroZumi</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Descubre cómo IroZumi puede acelerar tus habilidades, impulsar tu creatividad y mantener a tu aprendizaje alineado con resultados excepcionales.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="#interfaz"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 sm:w-auto"
                  >
                    Comenzar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
