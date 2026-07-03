import React, { useState } from 'react';
import screen1 from './assets/team/dev4.png';
import screen2 from './assets/team/dev5.png';

const screens = [
  {
    id: 1,
    title: 'Feed de Arte',
    desc: 'Explora trabajos recientes, descubre artistas emergentes y encuentra inspiración diaria en una galería vibrante.',
    img: screen1,
  },
  {
    id: 2,
    title: 'Módulos de Shodō',
    desc: 'Lecciones guiadas en estilo tradicional con ejercicios paso a paso para dominar técnica, ritmo y trazo.',
    img: screen2,
  },
  {
    id: 3,
    title: 'Retos Diarios',
    desc: 'Participa en desafíos interactivos que fortalecen tu disciplina y te ayudan a mantener tu práctica constante.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
];

const AppGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) => (current === 0 ? screens.length - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === screens.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="interfaz" className="bg-[#05070d] py-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
        <div className="w-full max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Explora la Interfaz de IroZumi
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Explora la Interfaz de IroZumi
          </h2>
        </div>

        <div className="mt-12 grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_35px_125px_rgba(0,0,0,0.35)]">
              <img
                src={activeScreen.img}
                alt={activeScreen.title}
                className="h-[240px] w-full object-contain transition duration-500 ease-in-out sm:h-[320px] lg:h-[520px]"
              />
              <button
                type="button"
                onClick={goPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-cyan-300 transition hover:bg-cyan-400/20"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-cyan-300 transition hover:bg-cyan-400/20"
              >
                ›
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <h3 className="text-3xl font-semibold text-white">{activeScreen.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{activeScreen.desc}</p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Navegación</p>
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-100 sm:w-auto"
                  >
                    ‹ Anterior
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-100"
                  >
                    Siguiente ›
                  </button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Pantallas</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {screens.map((screen, index) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-3.5 w-3.5 rounded-full transition duration-300 ${
                        index === activeIndex ? 'bg-cyan-300' : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppGallery;
