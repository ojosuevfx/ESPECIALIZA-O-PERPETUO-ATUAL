"use client";

import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "Você lê antes da aula",
    desc: "O aluno chega ao encontro com contato prévio com o texto, preparado para acompanhar a discussão e participar melhor.",
  },
  {
    n: "02",
    title: "A discussão é guiada pelo Lucca",
    desc: "A aula percorre o raciocínio do filósofo com direção, perguntas e retomadas, para transformar leitura difícil em compreensão sólida.",
  },
  {
    n: "03",
    title: "Informação vira conhecimento",
    desc: "Explicar um ponto, ouvir outro aluno e retornar ao texto torna a assimilação muito mais profunda do que assistir passivamente.",
  },
  {
    n: "04",
    title: "Você dialoga com o próprio filósofo",
    desc: "O centro não é um resumo ou intermediário, mas o texto original bem conduzido, para que você deixe de depender de frases prontas.",
  },
  {
    n: "05",
    title: "Você revisa no seu ritmo",
    desc: "As aulas ficam gravadas na plataforma, para que você possa retomar os pontos difíceis quantas vezes precisar.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}
    >
      <div className="how-inner" style={{ width: "1140px" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", gap: "48px" }}
          className="how-heading-row"
        >
          <div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: 0, maxWidth: "420px" }}>
              Não é um curso para assistir passivamente.
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", maxWidth: "380px", margin: 0, flexShrink: 0 }} className="how-subtext">
            Na maioria dos cursos, o professor fala por uma hora e meia e o aluno esquece quase tudo depois. Na Especialização, a aula é uma discussão guiada: você lê, participa e percorre o raciocínio do filósofo até compreender com profundidade o que ele queria dizer.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(244,245,246,0.06)", marginBottom: "0" }} />

        {/* Items list */}
        <div>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              className="how-item"
              style={{
                display: "grid", gridTemplateColumns: "56px 1fr 2fr",
                alignItems: "center", gap: "40px",
                padding: "32px 0",
                borderBottom: "1px solid rgba(244,245,246,0.06)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "0.1em", color: "rgba(200,169,110,0.4)" }}>
                {item.n}
              </span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "17px", color: "var(--color-text-primary)", margin: 0, lineHeight: "130%" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "165%", color: "var(--color-text-muted)", margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .how-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) {
          .how-heading-row { flex-direction: column !important; align-items: flex-start !important; }
          .how-subtext { max-width: 100% !important; }
          .how-item { grid-template-columns: 40px 1fr !important; gap: 16px !important; }
          .how-item p { grid-column: 2 !important; }
        }
      `}</style>
    </section>
  );
}
