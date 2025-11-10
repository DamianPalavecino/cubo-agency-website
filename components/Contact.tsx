'use client';

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Hagamos crecer tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos
            transformar tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-cyan" />
              </div>
              <div>
                <h3 className="font-bold text-dark mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/541234567890"
                  className="text-gray-600 hover:text-cyan transition"
                >
                  +54 9 1234 567-890
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-cyan" />
              </div>
              <div>
                <h3 className="font-bold text-dark mb-1">Email</h3>
                <a
                  href="mailto:hola@cubomarketing.com"
                  className="text-gray-600 hover:text-cyan transition"
                >
                  hola@cubomarketing.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-cyan" />
              </div>
              <div>
                <h3 className="font-bold text-dark mb-1">Ubicación</h3>
                <p className="text-gray-600">Buenos Aires, Argentina</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-bold text-dark mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/Cubo_agencia_de_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-all"
                >
                  @
                </a>
                <a
                  href="https://facebook.com/Cubo-Marketing-Digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-all"
                >
                  f
                </a>
                <a
                  href="https://tiktok.com/@Cubo-Marketing-Digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan hover:bg-cyan hover:text-white transition-all"
                >
                  ♪
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="+54 9 1234 567-890"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
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
                <label className="block text-sm font-semibold text-dark mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-cyan text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-75"
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
                <div className="mt-4 p-4 bg-cyan/10 text-cyan rounded-lg text-center font-semibold animate-scale-in">
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
