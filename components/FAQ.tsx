"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Preciso ter estudado filosofia antes?", a: "Não. O programa começa pela lógica aristotélica, base de todo o conhecimento ocidental. Não há pré-requisito de leitura ou formação prévia. Vontade de aprender basta." },
  { q: "Como irei acessar as aulas?", a: "As aulas ficam gravadas e disponíveis na Plataforma Hubla, que possui aplicativo próprio para celular, em que você pode acessar no ônibus para a faculdade ou no caminho para o trabalho. Poderá assistir no seu próprio ritmo e revisar as aulas sempre que precisar." },
  { q: "Tem garantia?", a: "Sim. Você tem 7 dias de garantia incondicional após o início das aulas. Se perceber que o programa não é para você, a devolução é integral." },
  { q: "O acesso é vitalício?", a: "Você acompanhará as aulas gravadas, que serão disponibilizadas na plataforma toda a semana, durante todo o tempo das gravações. Depois de gravada a última aula, prevista para junho de 2029, você poderá acessar a plataforma com as aulas por mais 2 anos, para estudar ou revisar todo o conteúdo, fixando bem todas as partes da obra do Filósofo." },
  { q: "O programa é presencial?", a: "Não. É 100% online." },
  { q: "É caro?", a: "A Filosofia “é utilíssima para o indivíduo, porque aperfeiçoa as mais nobres faculdades de que o homem é dotado e que são a inteligência e a vontade. Aperfeiçoa a inteligência, elevando-a ao conhecimento das causas supremas dos seres criados e até ao conhecimento do próprio Deus. Aperfeiçoa a vontade, guiando-a, pela prática das virtudes morais, à consecução da felicidade eterna, ainda que na ordem natural.” (Dom Thiago Sinibaldi). Com esse mesmo objetivo final, o curso quer trazer acesso a todos, absolutamente todos, ao domínio dos caminhos para se elevar em virtude, e assim, trazer o benefício da alta cultura a todo o país. Isso tem um custo, mas esse custo é bem menor do que você imagina." },
  { q: "Quais as formas de pagamento?", a: "Pagamento via PIX ou cartão de crédito. Se ambos não forem possíveis, converse com a nossa equipe e encontraremos um caminho para a sua matrícula nesse grande projeto." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-5%" }}
      style={{ borderBottom: "1px solid rgba(244,245,246,0.07)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "24px 0",
          background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "24px",
        }}
      >
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
          fontSize: "17px", lineHeight: "140%",
          color: open ? "#F4F5F6" : "#8A9AA4",
          transition: "color 200ms ease",
        }}>
          {q}
        </span>

        <div style={{
          flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%",
          background: open ? "rgba(200,169,110,0.1)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 250ms ease",
        }}>
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 300ms ease" }}
            aria-hidden="true"
          >
            <path d="M6 1v10M1 6h10" stroke={open ? "#c8a96e" : "#8A9AA4"} strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: "15px", lineHeight: "175%", color: "#8A9AA4",
              margin: "0 0 24px", maxWidth: "640px",
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0" }}
    >
      {/* Heading — centered */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-8%" }}
        style={{ textAlign: "center", marginBottom: "64px", maxWidth: "560px", padding: "0 24px" }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px",
          letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e",
          display: "block", marginBottom: "16px",
        }}>
          FAQ
        </span>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em",
          color: "#F4F5F6", margin: "0 0 16px",
        }}>
          Ainda tem dúvidas?{" "}
          <span style={{ color: "#c8a96e" }}>Respondemos aqui.</span>
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: "15px", lineHeight: "165%", color: "#8A9AA4", margin: 0,
        }}>
          Se sua dúvida não estiver respondida aqui, entre em contato com a nossa equipe antes da abertura das matrículas.
        </p>
      </motion.div>

      {/* Accordion */}
      <div className="faq-list" style={{ width: "680px" }}>
        {faqs.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .faq-list { width: 100% !important; padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}
