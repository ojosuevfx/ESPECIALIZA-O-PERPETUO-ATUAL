"use client";

import { motion } from "framer-motion";

const painPoints = [
  "Você começa animado, mas em uma semana já desanima e desiste de tudo.",
  "Você se esforça para ler e entender os clássicos, mas eles parecem mais um enigma indecifrável do que um livro.",
  "Você compra alguns cursos, mas todos são superficiais e só te dão algumas noções soltas.",
  "Você procura uma ordem certa, um método, um caminho seguro, mas nunca acha.",
  "Você desanima, se sente perdido e começa a achar que filosofia não é para você.",
];

export default function PainPoints() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}>
      <div className="pain-content" style={{ display: "grid", gridTemplateColumns: "420px 1fr", alignItems: "start", width: "1140px", gap: "100px" }}>

        {/* Left — sticky */}
        <div className="pain-left" style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "34px", lineHeight: "116%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: "0 0 20px" }}>
              Se você já tentou estudar filosofia sozinho,{" "}
              <span style={{ color: "var(--color-accent)" }}>sabe bem o que é isso.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", margin: 0 }}>
              A frustração quase nunca nasce de falta de inteligência. Ela nasce de estudar sem ordem, sem boas fontes e sem um mestre para guiar cada passo.
            </p>
          </div>

          {/* Quote */}
          <div style={{ position: "relative", padding: "24px 28px", borderRadius: "16px", background: "rgba(200,169,110,0.03)", border: "1px solid rgba(200,169,110,0.08)" }}>
            <div style={{ position: "absolute", top: "24px", left: "-1px", width: "3px", height: "calc(100% - 48px)", background: "linear-gradient(to bottom, #c8a96e, rgba(200,169,110,0.2))", borderRadius: "0 2px 2px 0" }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", margin: "0 0 12px", fontStyle: "italic" }}>
              A educação não é o preenchimento de um balde, mas o acender de uma chama.
            </p>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "var(--color-accent)", letterSpacing: "0.04em" }}>
              William Butler Yeats
            </span>
          </div>
        </div>

        {/* Right — pain points */}
        <div className="pain-grid" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {painPoints.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                padding: "24px 0",
                borderBottom: i < painPoints.length - 1 ? "1px solid rgba(244,245,246,0.06)" : "none",
              }}
            >
              <span style={{ width: "24px", height: "24px", borderRadius: "50%", border: "1px solid rgba(200,169,110,0.24)", color: "#c8a96e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }} aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3L3 9" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "165%", color: "var(--color-text-muted)", margin: 0 }}>
                {text}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ marginTop: "28px", padding: "30px 32px", borderRadius: "18px", background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.16)", borderLeft: "3px solid rgba(200,169,110,0.7)" }}
          >
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: "122%", letterSpacing: "-0.02em", color: "#F4F5F6", margin: "0 0 14px" }}>
              Você não fracassou por falta de inteligência.
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
              Estudar os grandes textos exige três coisas ao mesmo tempo: a ordem certa, uma fonte original bem traduzida e um mestre que te ensina de verdade, não apenas repete o que alguém disse que outro alguém pensou.
            </p>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1199px) { .pain-content { width: 100% !important; padding: 0 32px !important; gap: 56px !important; grid-template-columns: 340px 1fr !important; } }
        @media (max-width: 768px) { .pain-content { grid-template-columns: 1fr !important; padding: 0 24px !important; } .pain-left { position: static !important; } }
      `}</style>
    </section>
  );
}
