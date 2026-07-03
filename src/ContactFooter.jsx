import React, { useState, useEffect } from 'react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    email: '',
    age: '',
    artistLevel: 'novato'
  });
  const [showQRCode, setShowQRCode] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes enviar los datos a un servidor o email
    alert('¡Gracias por registrarte! Nos pondremos en contacto pronto.');
    setFormData({ email: '', age: '', artistLevel: 'novato' });
  };

  return (
    <section id="soporte" className="bg-[#05070d] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-4 lg:px-12">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Conecta y únete a nuestra comunidad
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Sección Redes Sociales y Contacto */}
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="space-y-4 mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Redes sociales</p>
              <p className="text-base leading-6 text-slate-300">
                Sigue nuestros canales oficiales para estar conectado con IroZumi.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">Contacto</p>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="text-white font-medium">Email:</span> kromarker@gmail.com
                </p>
                <p>
                  <span className="text-white font-medium">Soporte:</span> Centro de ayuda
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">Redes</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="https://facebook.com/irozumi" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-lg border border-white/10 bg-white/5 px-3 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-100">
                  <span className="text-sm font-semibold text-cyan-300">Facebook</span>
                  <span className="mt-1 text-xs text-slate-300">/irozumi</span>
                </a>
                <a href="https://youtube.com/@kromaker?si=i4sjE8ZtZm7XUOJZ" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-lg border border-white/10 bg-white/5 px-3 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-100">
                  <span className="text-sm font-semibold text-cyan-300">YouTube</span>
                  <span className="mt-1 text-xs text-slate-300">/irozumi-design</span>
                </a>
                <a href="https://instagram.com/irozumi.art" target="_blank" rel="noopener noreferrer" className="flex flex-col rounded-lg border border-white/10 bg-white/5 px-3 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-100">
                  <span className="text-sm font-semibold text-cyan-300">Instagram</span>
                  <span className="mt-1 text-xs text-slate-300">@irozumi.art</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sección Formulario de Registro */}
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="space-y-4 mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Formulario</p>
              <p className="text-base leading-6 text-slate-300">
                Regístrate y para forma parte de nuestra comunidad de artistas, recibiras una notificacion cuando este disponible la app.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wide">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-white placeholder-slate-500 transition focus:border-cyan-300/40 focus:bg-slate-950/80 focus:outline-none focus:ring-1 focus:ring-cyan-300/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wide">
                    Edad
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    placeholder="18"
                    min="13"
                    max="120"
                    className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-white placeholder-slate-500 transition focus:border-cyan-300/40 focus:bg-slate-950/80 focus:outline-none focus:ring-1 focus:ring-cyan-300/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wide">
                    Nivel de Artista
                  </label>
                  <select
                    name="artistLevel"
                    value={formData.artistLevel}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-white transition focus:border-cyan-300/40 focus:bg-slate-950/80 focus:outline-none focus:ring-1 focus:ring-cyan-300/20"
                  >
                    <option value="novato">Novato</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="medio">Medio</option>
                    <option value="profesional">Profesional</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-500/20 border border-cyan-300/40 px-3 py-2 text-sm text-white font-semibold transition hover:bg-cyan-500/30 hover:border-cyan-300/60"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full items-center justify-center">
        <button
          type="button"
          onClick={() => setShowQRCode(true)}
          className="rounded-full bg-cyan-500/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500/30"
        >
          Ver Código QR
        </button>
      </div>

      {showQRCode && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">Código QR</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Escanea esta URL para abrir la página en tu dispositivo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowQRCode(false)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                Cerrar
              </button>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-900/95 p-6 text-center">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(currentUrl)}`}
                alt="Código QR de IroZumi"
                className="mx-auto h-[280px] w-[280px] rounded-3xl bg-white/5"
              />
              <p className="mt-4 break-words text-sm text-slate-300">{currentUrl}</p>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-slate-800/50 pt-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:px-6 md:flex-row md:px-12">
          <p className="text-center md:text-left">© 2026 IroZumi. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <a href="#" className="transition hover:text-cyan-300">Términos de Servicio</a>
            <a href="#" className="transition hover:text-cyan-300">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
