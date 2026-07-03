"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
function IconPlatform() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="5" width="15" height="11" rx="2" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M8 19h8M12 16v3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 9h8M8 12h5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
function IconFlexibility() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M12 8v4l2.5 2" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 6.5l-2 2M18.5 6.5l2 2" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
function IconGift() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 10h15v8.5A1.5 1.5 0 0118 20H6a1.5 1.5 0 01-1.5-1.5V10z" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M3.5 7.5A1.5 1.5 0 015 6h14a1.5 1.5 0 011.5 1.5V10h-17V7.5zM12 6v14" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M12 6c-1.2-2.2-4.5-2.2-4.5.2C7.5 8 10 8 12 6zm0 0c1.2-2.2 4.5-2.2 4.5.2C16.5 8 14 8 12 6z" stroke="#c8a96e" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4.5l2.05 4.15 4.58.66-3.31 3.23.78 4.56L12 14.95 7.9 17.1l.78-4.56-3.31-3.23 4.58-.66L12 4.5z" stroke="#c8a96e" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const benefits = [
  {
    Icon: IconTranslation,
    title: "Traduções próprias",
    desc: "Todas as obras do currículo traduzidas para o português, com vocabulário filosófico preciso: material editado e revisado para você compreender melhor. Pode imprimir se preferir!",
  },
  {
    Icon: IconGuide,
    title: "Guia de estudos",
    desc: "Um método claro para cada obra: o que ler, como ler e o que prestar atenção antes de cada aula semanal.",
  },
  {
    Icon: IconSummary,
    title: "Resumos e materiais de apoio",
    desc: "Sínteses das aulas e materiais de fixação para consolidar e exercitar cada etapa do currículo.",
  },
  {
    Icon: IconScroll,
    title: "Manuais complementares",
    desc: "Materiais elaborados pelo próprio Lucca para aprofundar temas difíceis e pontos centrais de cada obra.",
  },
  {
    Icon: IconPlatform,
    title: "Acesso à Plataforma Hubla",
    desc: "Todo o conteúdo das aulas, com qualidade de áudio e imagem, fica disponível na Plataforma Hubla em até 7 dias. A Hubla possui aplicativo para você assistir do celular, onde estiver.",
    logo: "/hubla-mark.webp",
  },
  {
    Icon: IconFlexibility,
    title: "Tempo e flexibilidade",
    desc: "Vou conseguir assistir todas as aulas? Fique tranquilo: quando terminarem as gravações, você ainda poderá assistir às aulas por dois anos. Você estuda no seu ritmo, sem correria.",
  },
  {
    Icon: IconCommunity,
    title: "Comunidade de membros",
    desc: "Um grupo exclusivo de alunos que também estudam e aprendem contigo, para troca de ideias, informações, debate e suporte mútuo.",
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

const exclusiveBenefits = [
  {
    title: "Curso bônus: Imersão na Vida de Estudos",
    desc: "Aborda os fundamentos da vida intelectual, explicando o que é epistemologia e como funciona o processo de aprendizagem. Ele traz dicas práticas para organizar a rotina, manter a concentração, cultivar disciplina e constância, além de ressaltar a importância de ter mestres e de discutir ideias com amigos para aprofundar o estudo filosófico.",
  },
  {
    title: "Curso bônus: Guia de Estudos",
    desc: "Um guia sistemático para organizar seus estudos filosóficos, utilizando os princípios de São Tomás de Aquino e Aristóteles. O conteúdo centra-se na distinção entre os grandes ramos da filosofia, a hierarquia das disciplinas e a ordem ideal para o aprendizado.",
  },
  {
    title: "Curso bônus: Introdução ao Lyceum",
    desc: "Apresenta os fundamentos da educação clássica, explicando o método de discussão, a importância do currículo, do tutor e da comunidade. Ainda ensina como estudar a educação clássica pelo método socrático, como participar das sessões e se preparar para as aulas, servindo como base para quem está começando.",
  },
  {
    title: "Curso bônus: Blue Book - Introdução à Educação Clássica",
    desc: "Em defesa de uma educação verdadeiramente liberal e católica, o documento fundador do TAC critica a crise das universidades católicas, a falsa oposição entre fé e razão, e a noção moderna de liberdade acadêmica, propondo que a fé deve guiar o intelecto e que o compromisso central da educação deve ser com a verdade, não com uma liberdade desenfreada.",
  },
  {
    title: "Curso bônus: Despertar do Intelecto",
    desc: "A verdadeira felicidade do homem está na contemplação da verdade, ou seja, na vida intelectual e no exercício da sabedoria. Esse curso mostrará por que dedicar-se ao estudo é essencial e como a busca pela verdade deve ocupar lugar central na vida.",
  },
  {
    title: "Curso bônus Premium: Escola da Razão",
    desc: "Formação sólida, baseada em Hugo de São Vítor, para os estudiosos da arte do pensamento filosófico, focado em proporcionar uma base firme para prosseguir nos estudos e aplicar a filosofia de modo prático em suas vidas. Aprenderá como aplicar o conhecimento, com humildade, silêncio e pobreza intelectual; lembrar o que foi estudado, com inteligência e memória; finalizar obras e saber se está no caminho certo; e receberá orientações práticas para superar as dificuldades no estudo. O professor também partilha suas experiências e propõe exercícios práticos para que os estudantes vejam o método aplicado na vida real.",
    premium: true,
  },
];

export default function TurmaFundadora() {
  const [openBonus, setOpenBonus] = useState<number | null>(null);

  return (
    <>
      <section
        id="beneficios"
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
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "114%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 20px" }}>
              Benefícios ao estudar do{" "}
              <span style={{ color: "#c8a96e", fontStyle: "italic" }}>jeito certo.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: "0 auto", maxWidth: "680px" }}>
              Além de estudar seriamente a filosofia aristotélica, seguindo a divisão clássica da filosofia tradicional, acompanhará as aulas enquanto elas estão sendo gravadas, tudo dentro da Plataforma exclusiva para os alunos da Especialização.
            </p>
          </motion.div>

          {/* Benefits grid */}
          <div className="tf-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {benefits.map(({ Icon, title, desc, logo }, i) => (
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
                  minHeight: "230px",
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
                  overflow: "hidden",
                }}>
                  {logo ? (
                    <Image
                      src={logo}
                      alt="Hubla"
                      width={20}
                      height={20}
                      style={{ width: "20px", height: "20px", objectFit: "contain" }}
                    />
                  ) : (
                    <Icon />
                  )}
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
      </section>

      <section
        id="beneficios-exclusivos"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "40px 0 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-120px", left: "50%", transform: "translateX(-50%)", width: "620px", height: "360px", background: "radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 72%)", filter: "blur(70px)", pointerEvents: "none" }} />

        <div className="tf-inner" style={{ width: "1140px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-8%" }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
              E mais...
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "114%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 auto", maxWidth: "760px" }}>
              Benefícios exclusivos{" "}
              <span style={{ color: "#c8a96e" }}>para quem entrar agora:</span>
            </h2>
          </motion.div>

          <div className="tf-bonus-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
            {exclusiveBenefits.map(({ title, desc, premium }, i) => {
              const Icon = premium ? IconStar : IconGift;
              const isOpen = openBonus === i;
              return (
                <motion.div
                  key={title}
                  layout
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.52, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-5%" }}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                  className={premium ? "tf-bonus-card tf-bonus-premium" : "tf-bonus-card"}
                  style={{
                    display: "block",
                    padding: "28px 32px",
                    borderRadius: "16px",
                    background: premium
                      ? "radial-gradient(100% 130% at 8% 0%, rgba(200,169,110,0.18) 0%, rgba(26,30,30,0.98) 42%, #0D0F10 100%)"
                      : "radial-gradient(100% 130% at 8% 0%, rgba(138,154,164,0.12) 0%, rgba(26,30,30,0.98) 42%, #0D0F10 100%)",
                    border: premium ? "1px solid rgba(200,169,110,0.42)" : "1px solid rgba(200,169,110,0.16)",
                    boxShadow: premium ? "0 0 46px rgba(200,169,110,0.14), inset 0 1px 0 rgba(255,255,255,0.04)" : "inset 0 1px 0 rgba(255,255,255,0.035)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: premium ? "radial-gradient(circle at 16% 0%, rgba(226,201,138,0.16) 0%, transparent 54%)" : "radial-gradient(circle at 16% 0%, rgba(200,169,110,0.08) 0%, transparent 54%)", pointerEvents: "none" }} />
                  {premium && (
                    <>
                      <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "linear-gradient(to bottom, transparent, #c8a96e, transparent)" }} />
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenBonus(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      all: "unset",
                      boxSizing: "border-box",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      width: "58px", height: "58px", borderRadius: "14px",
                      background: premium ? "rgba(200,169,110,0.12)" : "rgba(200,169,110,0.07)",
                      border: premium ? "1px solid rgba(200,169,110,0.28)" : "1px solid rgba(200,169,110,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      position: "relative",
                    }}>
                      <Icon />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                      {premium && (
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e" }}>
                          Bônus premium
                        </span>
                      )}
                      <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: premium ? "22px" : "21px", lineHeight: "135%", color: "#F4F5F6", margin: 0, position: "relative" }}>
                        {title}
                      </h3>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: "1px solid rgba(200,169,110,0.22)",
                        color: "#c8a96e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "24px",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        key="desc"
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 18 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden", fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "175%", color: "rgba(244,245,246,0.88)", marginBottom: 0, position: "relative" }}
                      >
                        {desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1199px) { .tf-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 900px) { .tf-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .tf-inner { padding: 0 24px !important; } .tf-grid, .tf-bonus-grid { grid-template-columns: 1fr !important; } .tf-bonus-card { padding: 22px 18px !important; } .tf-bonus-card h3 { font-size: 17px !important; } }
      `}</style>
    </>
  );
}
