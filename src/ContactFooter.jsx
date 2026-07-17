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
              <div className="space-y-3 text-sm text-slate-300">
                <p className="flex flex-wrap items-center gap-1">
                    <span className="text-white font-medium">Email:</span>
                    <a 
  href="mailto:kromarker@gmail.com?subject=Más información - IroZumi"
  className="break-all transition hover:text-cyan-300 underline decoration-cyan-300/30 underline-offset-4"
>
  kromarker@gmail.com
</a>
                  </p>
                  <p>
                  <span className="text-white font-medium">Soporte:</span> Centro de ayuda
                </p>
              </div>
            </div>

                    <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">Redes</p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61591538581869&mibextid=ZbWKwL" 
                  target="_blank"  
                  rel="noopener noreferrer" 
                  className="group flex flex-col items-center justify-center rounded-lg border border-blue-500/30 bg-blue-950/20 p-2 sm:p-3 text-center transition-all duration-300 hover:border-blue-400/80 hover:bg-blue-950/40 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="text-2xl sm:text-3xl mb-1">f</div>
                  <span className="text-xs sm:text-sm font-bold text-blue-300 group-hover:text-blue-200 transition">Facebook</span>
                  <span className="mt-0.5 text-xs text-slate-400 group-hover:text-slate-300 transition">@kromaker</span>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/@kromaker?si=i4sjE8ZtZm7XUOJZ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex flex-col items-center justify-center rounded-lg border border-red-500/30 bg-red-950/20 p-2 sm:p-3 text-center transition-all duration-300 hover:border-red-400/80 hover:bg-red-950/40 hover:shadow-lg hover:shadow-red-500/20"
                >
                  <div className="text-2xl sm:text-3xl mb-1">▶</div>
                  <span className="text-xs sm:text-sm font-bold text-red-300 group-hover:text-red-200 transition">YouTube</span>
                  <span className="mt-0.5 text-xs text-slate-400 group-hover:text-slate-300 transition">@kromaker</span>
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@kromaker1?_r=1&_t=ZS-97ifsVDVTJE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex flex-col items-center justify-center rounded-lg border border-cyan-500/30 bg-slate-900/40 p-2 sm:p-3 text-center transition-all duration-300 hover:border-cyan-400/80 hover:bg-cyan-950/30 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="text-2xl sm:text-3xl mb-1">♪</div>
                  <span className="text-xs sm:text-sm font-bold text-cyan-300 group-hover:text-cyan-200 transition">TikTok</span>
                  <span className="mt-0.5 text-xs text-slate-400 group-hover:text-slate-300 transition">@kromaker1</span>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/kromaker_3?igsh=c3JoY3FqaDFsejh0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex flex-col items-center justify-center rounded-lg border border-pink-500/30 bg-pink-950/20 p-2 sm:p-3 text-center transition-all duration-300 hover:border-pink-400/80 hover:bg-pink-950/40 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <div className="text-2xl sm:text-3xl mb-1">📷</div>
                  <span className="text-xs sm:text-sm font-bold text-pink-300 group-hover:text-pink-200 transition">Instagram</span>
                  <span className="mt-0.5 text-xs text-slate-400 group-hover:text-slate-300 transition">@kromaker_3</span>
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
