import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function AreasDropdown() {
  const [open, setOpen] = useState(false);

  const areas = [
    {
      name: "Direito Trabalhista Bancário",
      desc: "Defesa especializada para bancários",
      href: "/areas/trabalhista-bancario",
    },
    {
      name: "Direito de Saúde",
      desc: "Ações contra negativas e abusos",
      href: "/areas/plano-de-saude",
    },
     {
      name: "Direito Imobiliário",
      desc: "Compra, venda, usucapião e contratos",
      href: "/areas/direito-imobiliario",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* BOTÃO */}
      <button
        className="px-3 py-2 text-sm font-medium rounded-md"
        style={{ color: "oklch(85% 0.02 245)" }}
      >
        Áreas de atuação
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-3 w-80 rounded-xl border shadow-2xl z-50"
            style={{
              backgroundColor: "oklch(18% 0.065 245)",
              borderColor: "oklch(25% 0.06 245)",
            }}
          >
            <div className="p-2">
              {areas.map((area, i) => (
                <Link key={i} href={area.href}>
                  <a className="block p-4 rounded-lg hover:bg-white/5 transition-all">
                    <div className="font-semibold text-white">
                      {area.name}
                    </div>
                    <div className="text-xs opacity-70 mt-1 text-white">
                      {area.desc}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}