import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const areas = [
  {
    title: "Trabalhista Bancário",
    link: "/areas/trabalhista-bancario",
    description: "Defesa especializada de bancários",
  },
];

export function AreasDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md"
        style={{
          color: open ? "oklch(74% 0.12 80)" : "oklch(85% 0.02 245)",
        }}
        onMouseEnter={(e) => {
          if (!open) {
            (e.target as HTMLElement).style.color = "oklch(74% 0.12 80)";
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            (e.target as HTMLElement).style.color = "oklch(85% 0.02 245)";
          }
        }}
      >
        Áreas de atuação
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-80 rounded-lg shadow-xl p-2 z-50"
            style={{
              backgroundColor: "oklch(16% 0.065 245)",
              border: "1px solid oklch(25% 0.06 245)",
            }}
          >
            {areas.map((area) => (
              <Link key={area.title} href={area.link}>
                <a className="block p-3 rounded-lg transition-all duration-200 group">
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "white" }}
                  >
                    {area.title}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "oklch(85% 0.02 245)" }}
                  >
                    {area.description}
                  </div>
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundColor: "oklch(74% 0.12 80 / 0.1)",
                      zIndex: -1,
                    }}
                  />
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
