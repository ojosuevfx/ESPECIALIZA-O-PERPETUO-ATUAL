"use client";

import { motion } from "framer-motion";

function IconTranslation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h8M8 6v1.5M5 7.5c0 2.5 2 4.5 5 5M14 7.5c-1 1.5-3 3-5.5 4" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17l1.5-4 1.5 4M13 15.5h3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19h8" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
function IconGuide() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="10" height="14" rx="1.5" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M8 8h4M8 11h4M8 14h2" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 6h2a1.5 1.5 0 011.5 1.5v10A1.5 1.5 0 0117 19H9" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
function IconSummary() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6h12M6 10h8M6 14h10M6 18h5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconScroll() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 5c0-.828.672-1.5 1.5-1.5H18A1.5 1.5 0 0119.5 5v13a1.5 1.5 0 01-1.5 1.5H9A1.5 1.5 0 017.5 18" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 6H6A1.5 1.5 0 004.5 7.5v9A1.5 1.5 0 006 18h3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M10.5 9h6M10.5 12h4" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M12 7v5l3 2.5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCommunity() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" stroke="#c8a96e" strokeWidth="1.5" />
      <circle cx="17" cy="8" r="3.5" stroke="#c8a96e" strokeWidth="1.5" opacity="0.45" />
      <path d="M3 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 13c1.657 0 3 1.343 3 3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="14" height="10" rx="2.5" stroke="#c8a96e" strokeWidth="1.5" />
      <circle cx="9.5" cy="12" r="1.5" fill="#c8a96e" opacity="0.7" />
      <circle cx="14.5" cy="12" r="1.5" fill="#c8a96e" opacity="0.7" />
      <path d="M9.5 7V5M14.5 7V5M12 17v2M9 19h6" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
function IconSupport() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.5 10.5a6.5 6.5 0 0113 0v1.5a2.5 2.5 0 01-2.5 2.5h-1" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 10.5v1.5A2.5 2.5 0 009 14.5h1" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <circle cx="12" cy="19" r="1.5" fill="#c8a96e" opacity="0.6" />
      <path d="M12 17.5v-1.5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

const benefits = [
  {
    Icon: IconTranslation,
    title: "Traduções próprias",
    desc: "Diversas obras do currículo traduzidas diretamente para o português, com vocabulário filosófico preciso.",
  },
  {
    Icon: IconGuide,
    title: "Guia de estudos",
    desc: "Um roteiro claro para cada obra: o que ler, como ler e o que prestar atenção antes de cada aula.",
  },
  {
    Icon: IconSummary,
    title: "Resumos e materiais de apoio",
    desc: "Sínteses das aulas e materiais de fixação para consolidar cada etapa do currículo.",
  },
  {
    Icon: IconScroll,
    title: "Manuais complementares",
    desc: "Materiais elaborados pelo próprio Lucca para aprofundar temas difíceis e pontos centrais de cada obra.",
  },
  {
    Icon: IconClock,
    title: "Acesso por dois anos",
    desc: "Todo o conteúdo gravado fica disponível por dois anos. Você estuda no seu ritmo, sem correria.",
  },
  {
    Icon: IconCommunity,
    title: "Comunidade de membros",
    desc: "Um grupo exclusivo de alunos que percorrem o mesmo caminho — para troca, debate e suporte mútuo.",
  },
  {
    Icon: IconAI,
    title: "Assistente IA (beta)",
    desc: "Uma ferramenta de IA integrada à plataforma para tirar dúvidas pontuais entre as aulas.",
  },
  {
    Icon: IconSupport,
    title: "Suporte diário e tutoria",
    desc: "Canal de suporte ativo todos os dias e sessão mensal de tutoria ao vivo com Lucca de Tomás.",
  },
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
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: "0 auto", maxWidth: "520px" }}>
            A Turma Fundadora acompanha o programa ao vivo, enquanto as aulas estão sendo gravadas. Após o encerramento, o acesso passa a ser apenas pelo material gravado.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="tf-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {benefits.map(({ Icon, title, desc }, i) => (
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
                gap: "16px",
                padding: "28px 24px",
                borderRadius: "16px",
                background: "radial-gradient(100% 100% at 50% 0px, #1A1E1E 0%, #0D0F10 100%)",
                border: "1px solid rgba(244,245,246,0.07)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.07) 0%, transparent 60%)", pointerEvents: "none" }}
              />

              <div style={{
                width: "40px", height: "40px", borderRadius: "10px",
                background: "rgba(200,169,110,0.07)",
                border: "1px solid rgba(200,169,110,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", lineHeight: "130%", color: "#F4F5F6", margin: 0 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "160%", color: "#8A9AA4", margin: 0 }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .tf-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 900px) { .tf-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .tf-inner { padding: 0 24px !important; } .tf-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
