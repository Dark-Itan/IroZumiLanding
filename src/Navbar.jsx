import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import dev6Video from './assets/team/dev6.mp4';
import dev7Logo from './assets/team/dev7.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStaticLogo, setShowStaticLogo] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const logoAlt = showStaticLogo ? 'Logo estático IroZumi' : 'Logo animado IroZumi';

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
        <div className="flex items-center gap-3 text-white">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-slate-950 shadow-sm shadow-slate-900/40">
            {showStaticLogo ? (
              <img
                src={dev7Logo}
                alt={logoAlt}
                className="absolute inset-0 h-16 w-16 object-cover -top-3 -right-3"
              />
            ) : (
              <video
                className="absolute inset-0 h-16 w-16 object-cover -top-3 -right-3"
                autoPlay
                muted
                playsInline
                onEnded={() => setShowStaticLogo(true)}
              >
                <source src={dev6Video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="rounded-2xl bg-cyan-400/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-sm shadow-cyan-400/10 sm:text-base">
            IroZumi
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <a href="#inicio" className="transition hover:text-cyan-300 hover:underline hover:underline-offset-4">
            Inicio
          </a>
          <a href="#interfaz" className="transition hover:text-cyan-300 hover:underline hover:underline-offset-4">
            Interfaz
          </a>
          <a href="#equipo" className="transition hover:text-cyan-300 hover:underline hover:underline-offset-4">
            Equipo
          </a>
          <a href="#soporte" className="transition hover:text-cyan-300 hover:underline hover:underline-offset-4">
            Redes sociales
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowComingSoon(true)}
            className="hidden rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 md:inline-flex"
          >
            Descargar App
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:border-cyan-300 hover:text-cyan-300 md:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span className="block h-0.5 w-6 rounded-full bg-current"></span>
            <span className="mt-1 block h-0.5 w-6 rounded-full bg-current"></span>
            <span className="mt-1 block h-0.5 w-6 rounded-full bg-current"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0b0f19]/95 px-4 py-4 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Menú</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-300"
                aria-label="Cerrar menú"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col gap-2 text-base font-medium text-slate-200">
              <a href="#inicio" className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-cyan-300">
                Inicio
              </a>
              <a href="#interfaz" className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-cyan-300">
                Interfaz
              </a>
              <a href="#equipo" className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-cyan-300">
                Equipo
              </a>
              <a href="#soporte" className="rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-cyan-300">
                Redes sociales
              </a>
            </nav>
            <button
              onClick={() => {
                setShowComingSoon(true);
                setIsOpen(false);
              }}
              className="mt-2 w-full rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
            >
              Descargar App
            </button>
          </div>
        </div>
      )}
{showComingSoon &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="rounded-[2rem] bg-slate-950 border border-white/10 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] max-w-md w-full text-center">
              <h3 className="text-2xl font-bold text-white mb-2">¡IroZumi ya está aquí!</h3>
              
              <div className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
                Versión 1.1
              </div>
              
              <p className="text-slate-300 mb-8 text-sm">
                Descarga la versión actual para Android y comienza a usarla.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://github.com/Dark-Itan/IroZumi-backend/releases/download/v1.0.0/app-release.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-cyan-500 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95"
                  onClick={() => setShowComingSoon(false)}
                >
                  Descargar App (APK)
                </a>
                <button 
                  onClick={() => setShowComingSoon(false)}
                  className="w-full rounded-lg border border-white/10 py-3 text-slate-400 font-semibold transition hover:bg-white/5 hover:text-white"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Navbar;
