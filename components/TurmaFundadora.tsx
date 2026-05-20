"use client";

import { motion } from "framer-motion";

function IconTranslation() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 8h12M12 8v2M8 10c0 3 2.5 5.5 6 6M20 10c-1.5 2-4 4-7 5" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 20l2-5 2 5M17.5 18.5h3" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 22h10" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
function IconGuide() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="6" width="14" height="18" rx="2" stroke="#c8a96e" strokeWidth="1.4" />
      <path d="M10 11h8M10 15h8M10 19h5" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M21 10h2a2 2 0 012 2v10a2 2 0 01-2 2H11" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
function IconSummary() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M9 8h14M9 13h10M9 18h12M9 23h7" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconScroll() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M10 7c0-1.1.9-2 2-2h14a2 2 0 012 2v16a2 2 0 01-2 2H12a2 2 0 01-2-2V7z" stroke="#c8a96e" strokeWidth="1.4" />
      <path d="M10 9H8a2 2 0 00-2 2v12a2 2 0 002 2h4" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M14 12h8M14 16h6" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="9" stroke="#c8a96e" strokeWidth="1.4" />
      <path d="M16 10v6l4 3" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCommunity() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="#c8a96e" strokeWidth="1.4" />
      <circle cx="22" cy="12" r="4" stroke="#c8a96e" strokeWidth="1.4" opacity="0.5" />
      <path d="M5 24c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 17c2.761 0 5 2.239 5 5" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="16" height="11" rx="3" stroke="#c8a96e" strokeWidth="1.4" />
      <circle cx="13" cy="15.5" r="1.5" fill="#c8a96e" opacity="0.7" />
      <circle cx="19" cy="15.5" r="1.5" fill="#c8a96e" opacity="0.7" />
      <path d="M13 10V8M19 10V8M16 21v2M12 23h8" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
function IconSupport() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8 14c0-4.418 3.582-8 8-8s8 3.582 8 8v2a3 3 0 01-3 3h-1" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 14v2a3 3 0 003 3h1" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <circle cx="16" cy="24" r="1.5" fill="#c8a96e" opacity="0.6" />
      <path d="M16 22v-1" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

const benefits = [
  { Icon: IconTranslation, label: "Traduções próprias de diversas obras do currículo" },
  { Icon: IconGuide, label: "Guia de estudos" },
  { Icon: IconSummary, label: "Resumos e materiais de apoio" },
  { Icon: IconScroll, label: "Manuais e materiais complementares" },
  { Icon: IconClock, label: "Acesso de dois anos na plataforma" },
  { Icon: IconCommunity, label: "Comunidade de membros" },
  { Icon: IconAI, label: "Assistente IA na plataforma (beta)" },
  { Icon: IconSupport, label: "Suporte diário e tutoria mensal" },
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
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(200,169,110,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div className="tf-inner" style={{ width: "1140px", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
            Turma Fundadora
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "114%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 20px" }}>
            Benefícios exclusivos{" "}
            <span style={{ color: "#c8a96e" }}>de quem entra agora.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: "0 auto", maxWidth: "560px" }}>
            A Turma Fundadora acompanha o programa ao vivo, enquanto as aulas estão sendo gravadas. Após o encerramento, o acesso passa a ser apenas pelo material gravado.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="tf-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {benefits.map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "28px 24px",
                borderRadius: "16px",
                background: "radial-gradient(100% 100% at 50% 0px, #1A1E1E 0%, #0D0F10 100%)",
                border: "1px solid rgba(244,245,246,0.07)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.07) 0%, transparent 60%)", pointerEvents: "none" }}
              />

              {/* Icon container */}
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(200,169,110,0.07)",
                border: "1px solid rgba(200,169,110,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon />
              </div>

              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "155%", color: "rgba(244,245,246,0.7)" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .tf-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 900px) { .tf-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .tf-inner { padding: 0 24px !important; } .tf-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .tf-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
