"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  { icon: "📖", label: "Traduções próprias de diversas obras do currículo" },
  { icon: "📋", label: "Guia de estudos" },
  { icon: "📄", label: "Resumos e materiais de apoio" },
  { icon: "📜", label: "Manuais e materiais complementares" },
  { icon: "🕐", label: "Acesso de dois anos na plataforma" },
  { icon: "👥", label: "Comunidade de membros" },
  { icon: "🤖", label: "Assistente IA na plataforma (beta)" },
  { icon: "🎧", label: "Suporte diário e tutoria mensal" },
];

export default function TurmaFundadora() {
  return (
    <section
      id="turma-fundadora"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "120px 0",
        borderTop: "1px solid rgba(244,245,246,0.06)",
        position: "relative",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,169,110,0.05) 0%, transparent 60%)",
      }}
    >
      <div
        className="tf-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "96px",
          width: "1140px",
          alignItems: "center",
        }}
      >
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
              Turma Fundadora
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "34px", lineHeight: "116%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 20px" }}>
              Benefícios exclusivos{" "}
              <span style={{ color: "#c8a96e" }}>de quem entra agora.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
              A Turma Fundadora acompanha o programa ao vivo, enquanto as aulas estão sendo gravadas. Após o encerramento da turma, o acesso passa a ser apenas pelo material gravado.
            </p>
          </div>

          {/* Benefits list */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-5%" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: i < benefits.length - 1 ? "1px solid rgba(200,169,110,0.10)" : "none",
                }}
              >
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(200,169,110,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "15px",
                }}>
                  {b.icon}
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "150%", color: "rgba(244,245,246,0.75)", letterSpacing: "0.01em" }}>
                  {b.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="tf-image-col"
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ aspectRatio: "4/5", borderRadius: "20px", overflow: "hidden", position: "relative" }}
        >
          <Image
            src="/aristoteles-aura.webp"
            alt="Aristóteles"
            fill
            style={{ objectFit: "cover", objectPosition: "80% 20%", transform: "scale(1.1)", transformOrigin: "80% 20%", filter: "sepia(10%) contrast(1.05)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,15,16,0.6) 0%, transparent 50%)" }} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .tf-inner { width: 100% !important; padding: 0 32px !important; gap: 56px !important; } }
        @media (max-width: 768px) { .tf-inner { grid-template-columns: 1fr !important; padding: 0 24px !important; } .tf-image-col { display: none !important; } }
      `}</style>
    </section>
  );
}
