"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { RiFacebookFill, RiInstagramFill, RiTiktokFill } from "react-icons/ri";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "redes-sociales",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "redes-sociales",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contacto"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hagamos crecer tu negocio
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos
            transformar tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/5493415958964"
                  className="text-gray-300 hover:text-white transition"
                >
                  +54 9 3415 95‑8964
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <a
                  href="mailto:hola@cubomarketing.com"
                  className="text-gray-300 hover:text-white transition"
                >
                  hola@cubomarketing.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Ubicación</h3>
                <p className="text-gray-300">Buenos Aires, Argentina</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-bold text-white mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/Cubo_agencia_de_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Instagram"
                >
                  <RiInstagramFill size={22} />
                </a>
                <a
                  href="https://www.facebook.com/people/Cubo-Marketing-Digital/100064493992688/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="Facebook"
                >
                  <RiFacebookFill size={22} />
                </a>
                <a
                  href="https://www.tiktok.com/@cubo.marketing.di"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  aria-label="TikTok"
                >
                  <RiTiktokFill size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right-delayed">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] rounded-xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#060b12] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#060b12] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#060b12] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all"
                    placeholder="+54 9 3415 95‑8964"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#060b12] border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all"
                  >
                    <option value="redes-sociales">Redes Sociales</option>
                    <option value="seo-google-ads">SEO y Google Ads</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#060b12] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="btn-tertiary disabled:opacity-50"
              >
                {submitted ? (
                  <>
                    <span className="animate-spin inline-block">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-white/5 text-white rounded-lg text-center font-semibold border border-white/10 animate-scale-in">
                  ¡Mensaje enviado! Nos pondremos en contacto pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
