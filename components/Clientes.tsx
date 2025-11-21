"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

const clients = [
  {
    id: 1,
    name: "Kelis Cosmetología",
    logo: "/brands/kelis-logo.png",
    alt: "Kelis Cosmetología",
    orientation: "horizontal",
  },
  {
    id: 2,
    name: "Autoescuela L'École",
    logo: "/clients/autoescuela-logo.png",
    alt: "Autoescuela L'École",
    orientation: "vertical",
  },
  {
    id: 3,
    name: "Altiv",
    logo: "/brands/altiv-logo.png",
    alt: "Altiv",
    orientation: "horizontal",
  },
  {
    id: 4,
    name: "Piscinas Alejandro",
    logo: "/brands/piscinas-logo.png",
    alt: "Piscinas Alejandro",
    orientation: "horizontal",
  },
  {
    id: 5,
    name: "Jose Obras",
    logo: "/brands/jose-obras.png",
    alt: "Jose Obras",
    orientation: "horizontal",
  },
  {
    id: 6,
    name: "KIS",
    logo: "/clients/kis.png",
    alt: "KIS",
    orientation: "vertical",
  },
  {
    id: 7,
    name: "Mikigai",
    logo: "/clients/mikigai.png",
    alt: "Mikigai",
    orientation: "vertical",
  },
  {
    id: 8,
    name: "MV Reformas",
    logo: "/clients/mv-reformas.png",
    alt: "MV Reformas",
    orientation: "vertical",
  },
  {
    id: 9,
    name: "Panama Profit",
    logo: "/clients/panama-profit.png",
    alt: "Panama Profit",
    orientation: "vertical",
  },
  {
    id: 10,
    name: "BEXC",
    logo: "/clients/bexc.png",
    alt: "BEXC",
    orientation: "vertical",
  },
  {
    id: 11,
    name: "Bona Construcciones",
    logo: "/clients/bona-construcciones.png",
    alt: "Bona Construcciones",
    orientation: "vertical",
  },
  {
    id: 12,
    name: "Club Juncal",
    logo: "/clients/club-juncal.png",
    alt: "Club Juncal",
    orientation: "vertical",
  },
  {
    id: 13,
    name: "DG Dental",
    logo: "/clients/dg-dental.png",
    alt: "DG Dental",
    orientation: "vertical",
  },
  {
    id: 14,
    name: "Dra. Cecilia Zentner",
    logo: "/clients/dra-cecilia-zentner.png",
    alt: "Dra. Cecilia Zentner",
    orientation: "vertical",
  },
  {
    id: 15,
    name: "ISSA Herrería",
    logo: "/clients/issa-herreria.png",
    alt: "ISSA Herrería",
    orientation: "vertical",
  },
  {
    id: 16,
    name: "Mengo",
    logo: "/clients/mengo.png",
    alt: "Mengo",
    orientation: "vertical",
  },
  {
    id: 17,
    name: "Piscinas Castellano",
    logo: "/clients/piscinas-castellano.png",
    alt: "Piscinas Castellano",
    orientation: "vertical",
  },
  {
    id: 18,
    name: "Station",
    logo: "/clients/station.png",
    alt: "Station",
    orientation: "vertical",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Memoized client logo card component
const ClientLogoCard = memo(
  ({ client, index }: { client: (typeof clients)[0]; index: number }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="group relative flex items-center justify-center p-4"
      >
        {/* Logo */}
        <Image
          src={client.logo}
          alt={client.alt}
          width={300}
          height={120}
          className={`object-contain w-auto opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 ${
            client.orientation === "horizontal"
              ? "max-h-24 md:max-h-32 max-w-full"
              : "max-w-24 md:max-w-32 max-h-full"
          }`}
        />
      </motion.div>
    );
  }
);

ClientLogoCard.displayName = "ClientLogoCard";

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="relative pt-12 md:pt-16 pb-20 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto relative z-10 !px-2 sm:!px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] mb-4">
            Marcas que confiaron en nosotros
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Negocios que han crecido en redes sociales con nuestras estrategias
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-x-6 md:gap-y-3"
        >
          {clients.map((client, index) => (
            <ClientLogoCard key={client.id} client={client} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
