import React from 'react';
import previewImage from '../assets/team/dev4.png';

// Sección "About" para la landing page de IroZumi.
// Diseño responsive en columnas, con estética dark y detalles visuales modernos.
const AboutSection = () => {
  return (
    <section id="about" className="bg-[#05070d] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-4 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.28em] text-slate-300">
              MÓDULOS Y APRENDIZAJE
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Domina el arte tradicional y digital.
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              IroZumi combina módulos de aprendizaje estructurado con técnicas inspiradas en el arte tradicional japonés, desafíos diarios que afinan tu trazo y un marketplace exclusivo para vender tus obras con seguridad. Es la plataforma diseñada para artistas que quieren crecer con disciplina, estilo y visibilidad.
            </p>
            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
              <p className="text-base font-semibold text-white">Cómo funciona IroZumi</p>
              <ul className="space-y-3 text-slate-300">
                <li>• Aprende técnicas clásicas y digitales con lecciones guiadas.</li>
                <li>• Mejora cada día con retos prácticos enfocados en trazo y composición.</li>
                <li>• Publica y vende tu arte en un entorno seguro y exclusivo para creadores.</li>
              </ul>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/95 to-slate-850/90 p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)] sm:p-6">
            <div className="h-[260px] overflow-hidden rounded-[1.7rem] shadow-inner shadow-black/20 sm:h-[340px] lg:h-[520px]">
              <img
                src={previewImage}
                alt="Vista previa de la app"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
