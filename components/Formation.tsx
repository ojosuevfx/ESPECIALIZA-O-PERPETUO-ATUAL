"use client";

import { motion } from "framer-motion";

const romans = ["I", "II", "III", "IV"];

const areas = [
  {
    title: "Lógica",
    desc: "A Lógica deve se antepor às outras partes da Filosofia; porque ensina as regras que a nossa inteligência deve seguir, em toda e qualquer ciência, para alcançar, provar e defender a verdade.",
    topics: ["Isagoge — Porfírio de Tiro", "Categorias — Aristóteles", "Da Interpretação — Aristóteles", "Analíticos Anteriores — Aristóteles", "Analíticos Posteriores — Aristóteles", "Tópicos e Refutações Sofísticas"],
    accent: true,
  },
  {
    title: "Filosofia da Natureza e Psicologia",
    desc: "Os princípios do mundo natural e da alma humana — o fundamento para toda reflexão sobre o ser vivo.",
    topics: ["Física — Aristóteles", "De Generatione et Corruptione", "De Anima — Aristóteles"],
    accent: false,
  },
  {
    title: "Ética e Política",
    desc: "Estudo sobre a vida moral e cívica pois é pela consideração do mundo, do homem e de Deus, que chegamos a conhecer o princípio, o fim e a norma dos nossos atos morais.",
    topics: ["Ética a Nicômaco — Aristóteles", "Política — Aristóteles"],
    accent: false,
  },
  {
    title: "Metafísica",
    desc: "O coroamento de toda a formação intelectual. Trata das primeiras e universalíssimas ideias e propriedades de todas as coisas, e considera os primeiros e supremos princípios de todas as ciências. O ser enquanto ser, as causas primeiras e a teologia natural.",
    topics: ["Metafísica — Aristóteles"],
    accent: true,
  },
];

export default function Formation() {
  return (
    <section
      id="formacao"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "120px 0",
        borderTop: "1px solid rgba(244,245,246,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "300px", background: "radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="formation-inner" style={{ width: "1140px", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "48px", marginBottom: "64px" }}
          className="formation-heading-row"
        >
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", display: "block", marginBottom: "16px" }}>
              Currículo
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "38px", lineHeight: "114%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: 0, maxWidth: "440px" }}>
              As grandes áreas da{" "}
              <span style={{ color: "var(--color-accent)" }}>filosofia clássica.</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", maxWidth: "340px", margin: 0, flexShrink: 0 }} className="formation-subtext">
            Cada área aprofunda a anterior, seguindo a divisão clássica da filosofia tradicional — da Lógica à Metafísica.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="formation-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "36px 28px",
                borderRadius: "20px",
                background: area.accent
                  ? "radial-gradient(140% 100% at 50% 0%, #1E2424 0%, #0D1010 100%)"
                  : "radial-gradient(140% 100% at 50% 0%, #161818 0%, #0D0F10 100%)",
                border: area.accent
                  ? "1px solid rgba(200,169,110,0.18)"
                  : "1px solid rgba(244,245,246,0.07)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                minHeight: "340px",
              }}
            >
              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.08) 0%, transparent 60%)", pointerEvents: "none" }}
              />

              {/* Roman numeral */}
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "56px",
                lineHeight: "1",
                color: area.accent ? "rgba(200,169,110,0.12)" : "rgba(244,245,246,0.04)",
                position: "absolute",
                top: "20px",
                right: "24px",
                letterSpacing: "-0.02em",
                userSelect: "none",
              }}>
                {romans[i]}
              </span>

              {/* Area label */}
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#c8a96e",
                opacity: 0.7,
                display: "block",
                marginBottom: "16px",
              }}>
                Área {romans[i]}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "128%",
                letterSpacing: "-0.01em",
                color: "#F4F5F6",
                margin: "0 0 14px",
              }}>
                {area.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "165%",
                color: "#8A9AA4",
                margin: "0 0 24px",
                flexGrow: 1,
              }}>
                {area.desc}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: area.accent ? "rgba(200,169,110,0.12)" : "rgba(244,245,246,0.06)", marginBottom: "20px" }} />

              {/* Topics */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {area.topics.map((t, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#c8a96e", fontSize: "6px", marginTop: "5px", flexShrink: 0, opacity: 0.5 }}>✦</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "155%", color: "rgba(244,245,246,0.5)" }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .formation-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 900px) { .formation-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 860px) { .formation-heading-row { flex-direction: column !important; align-items: flex-start !important; } .formation-subtext { max-width: 100% !important; } }
        @media (max-width: 560px) { .formation-inner { padding: 0 20px !important; } .formation-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
