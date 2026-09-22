import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import portrait from "../assets/gabrielle-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabrielle Macedo | Psicologia e Recursos Humanos" },
      {
        name: "description",
        content:
          "Portfólio profissional de Gabrielle Macedo Ferreira, graduanda em Psicologia com trajetória em atendimento, organização e cuidado com pessoas.",
      },
      { property: "og:title", content: "Gabrielle Macedo | Psicologia e Recursos Humanos" },
      {
        property: "og:description",
        content:
          "Conheça a trajetória de Gabrielle Macedo em Psicologia, Recursos Humanos e Gestão de Pessoas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const experiences = [
  {
    period: "JAN/2026 — ATUAL",
    company: "Maternizar",
    role: "Estagiária · Apoio a famílias e crianças",
    description:
      "Acompanho atendimentos ao lado da psicóloga clínica, prestando apoio a famílias e crianças em processo de adoção e auxiliando nas demandas do trabalho.",
    evidence: "escuta ativa, sigilo profissional e trabalho multidisciplinar",
    tags: ["Escuta ativa", "Apoio a famílias", "Trabalho multidisciplinar", "Sigilo profissional"],
    note: "Por se tratar de um contexto sensível, nenhuma informação de atendimento é divulgada aqui.",
  },
  {
    period: "DEZ/2024 — DEZ/2025",
    company: "Instituto Almai",
    role: "Estagiária de Psicologia · Unidade Cubatão",
    description:
      "Atuei na oficina de Terapia Ocupacional, preparando e monitorando atividades com o método ABA, registrando atendimentos e apoiando o desenvolvimento das crianças.",
    evidence: "cuidado, observação e comunicação com crianças e famílias",
    tags: ["Método ABA", "Terapia Ocupacional", "Desenvolvimento infantil", "Comunicação com famílias"],
  },
  {
    period: "OUT/2024 — DEZ/2024",
    company: "Instituto Almai 12+ · Teen",
    role: "Estagiária de Coordenação · Unidade Santos",
    description:
      "Organizei prontuários, atas, agendamentos, arquivos no Drive e planilhas no Excel, além de apoiar a comunicação entre equipe, terapeutas e responsáveis.",
    evidence: "organização administrativa e comunicação entre diferentes públicos",
    tags: ["Gestão de prontuários", "Organização administrativa", "Excel & Drive", "Comunicação"],
  },
  {
    period: "JUN/2023 — OUT/2024",
    company: "Mac Ferr Turismo",
    role: "Recepcionista",
    description:
      "Atendi clientes de diferentes perfis, organizei documentos, apoiei excursões e produzi conteúdo para as redes sociais da agência.",
    evidence: "clareza, agilidade e atenção em situações de alta demanda",
    tags: ["Atendimento ao cliente", "Organização de documentos", "Excel", "Criação de conteúdo"],
  },
];

const projects = [
  {
    id: "logistica-humanitaria",
    eyebrow: "TCC · ETEC Cubatão · 2022",
    title: "Projeto de Logística Humanitária",
    summary:
      "Ação social escolar que uniu planejamento, organização e responsabilidade social.",
    fields: [
      {
        label: "Contexto",
        text: "Trabalho de Conclusão de Curso do Técnico em Logística, desenvolvido como uma ação social escolar.",
      },
      {
        label: "Objetivo",
        text: "Proporcionar momentos de lazer e aprendizado, unindo planejamento, organização e responsabilidade social.",
      },
      {
        label: "Entrega",
        text: "Ação realizada com uma equipe de voluntários, beneficiando crianças da comunidade.",
      },
    ],
    stats: [
      { value: "260+", label: "crianças beneficiadas" },
      { value: "20", label: "voluntários envolvidos" },
    ],
    tags: ["Planejamento", "Organização", "Responsabilidade social", "Logística aplicada"],
    featured: true,
  },
  {
    id: "representante-classe",
    eyebrow: "Universidade · 2024",
    title: "Representante de classe",
    summary: "Mediação entre estudantes e professores, com organização de pautas e eventos acadêmicos.",
    fields: [
      {
        label: "Contexto",
        text: "Função exercida durante o quarto semestre do curso de Psicologia.",
      },
      {
        label: "Atuação",
        text: "Mediação de informações entre colegas e professores, organização de pautas e eventos acadêmicos e apoio na resolução de conflitos da turma.",
      },
    ],
    stats: [],
    tags: ["Comunicação", "Mediação", "Organização de eventos", "Relacionamento interpessoal"],
    featured: false,
  },
];

const courses = [
  "Psicologia Organizacional · Eskada / UEMA · 2026",
  "ABA no TEA — Aplicador ABA · Instituto Neuro · 2024",
  "Inglês avançado · Wizard by Pearson · 2018–2024",
  "Pacote Office intermediário · ETEC Cubatão · 2020–2022",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-20 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a href="#inicio" className="font-display text-base font-bold sm:text-lg">
            Gabrielle Macedo
          </a>
          <a
            href="/Curriculo-Gabrielle-Macedo-Ferreira.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase text-violet transition-colors hover:text-foreground"
          >
            Currículo PDF <Download aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto max-w-3xl px-5 pb-10 pt-14 sm:px-6 sm:pt-20">
          <p className="intro-rise mb-5 font-mono text-[11px] font-medium uppercase text-violet">
            Dossiê de candidatura · Psicologia &amp; RH
          </p>
          <div className="intro-wipe">
            <h1 className="font-display text-[clamp(3.5rem,15vw,7.5rem)] font-bold leading-[0.88]">
              Gabrielle
              <br />
              <span className="italic text-violet">Macedo</span>
            </h1>
          </div>
          <p className="intro-rise-delay mt-8 max-w-[38ch] text-xl font-medium leading-relaxed text-balance sm:text-2xl">
            Psicologia, organização e escuta para construir relações de trabalho mais humanas.
          </p>
          <div className="intro-rise-late mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#trajetoria"
              className="inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-base font-semibold text-violet-foreground transition-colors hover:bg-foreground"
            >
              Ver trajetória <ArrowDown aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#contato"
              className="font-medium underline decoration-2 decoration-violet/40 underline-offset-4 transition-colors hover:text-violet"
            >
              Falar comigo
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
          <figure className="intro-rise overflow-hidden rounded-[1.5rem] bg-lavender">
            <img
              src={portrait}
              alt="Retrato profissional de Gabrielle Macedo"
              className="aspect-[5/4] w-full object-cover object-[center_24%]"
            />
          </figure>
        </section>

        <section className="section-shell">
          <p className="section-kicker">Perfil</p>
          <h2 className="section-title">O que levo para o RH</h2>
          <p className="max-w-[58ch] text-lg leading-relaxed text-pretty">
            Minha trajetória começou na Logística, onde aprendi a pensar em processos, planejamento e organização. Hoje, na Psicologia, amplio esse olhar com experiências reais de atendimento, rotina administrativa e apoio a famílias. Quero levar essa combinação para <strong className="font-semibold">Recursos Humanos e Gestão de Pessoas</strong>, com interesse em Recrutamento &amp; Seleção e desenvolvimento de pessoas.
          </p>
        </section>

        <section id="trajetoria" className="section-shell scroll-mt-20">
          <p className="section-kicker">Experiência</p>
          <h2 className="section-title mb-10">Trajetória</h2>
          <div>
            {experiences.map((item) => (
              <article key={`${item.period}-${item.company}`} className="relative border-l-2 border-lavender pb-14 pl-7 last:pb-2 sm:pl-8">
                <span className="absolute -left-[9px] top-1 size-4 rounded-full bg-violet ring-4 ring-background" />
                <p className="mb-2 font-mono text-[11px] font-medium uppercase text-violet">{item.period}</p>
                <h3 className="font-display text-2xl font-bold leading-tight">{item.company}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.role}</p>
                <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-pretty sm:text-lg">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience-tag">{tag}</span>
                  ))}
                </div>
                <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-violet">
                  <strong className="font-semibold">Evidência — </strong>{item.evidence}
                </p>
                {item.note ? <p className="experience-note">{item.note}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <p className="section-kicker">Projetos</p>
          <h2 className="section-title">Projetos &amp; atuações</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className={`project-card ${project.featured ? "project-card-featured" : ""}`}
                    aria-label={`Ver detalhes de ${project.title}`}
                  >
                    <span className="project-media" aria-hidden="true">
                      <span className="project-media-mark">GM</span>
                      <span className="project-media-badge">Fotos em breve</span>
                    </span>
                    <span className="project-content">
                      <span className="project-eyebrow">{project.eyebrow}</span>
                      <span className="project-title">{project.title}</span>
                      <span className="project-summary">{project.summary}</span>
                      {project.stats.length > 0 ? (
                        <span className="project-stats">
                          {project.stats.map((stat) => (
                            <span key={stat.label}><strong>{stat.value}</strong>{stat.label}</span>
                          ))}
                        </span>
                      ) : null}
                      <span className="project-more">Ver detalhes <ArrowRight aria-hidden="true" /></span>
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[88vh] max-w-2xl gap-0 overflow-y-auto border-border p-0 sm:rounded-lg">
                  <div className="project-dialog-media">
                    <span className="project-media-mark">GM</span>
                    <span className="project-media-badge">Fotos em breve</span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <DialogHeader>
                      <p className="project-eyebrow">{project.eyebrow}</p>
                      <DialogTitle className="font-display text-2xl font-bold leading-tight sm:text-3xl">{project.title}</DialogTitle>
                      <DialogDescription className="sr-only">Informações detalhadas sobre {project.title}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-7 space-y-5">
                      {project.fields.map((field) => (
                        <div key={field.label}>
                          <p className="dialog-field-label">{field.label}</p>
                          <p className="leading-relaxed">{field.text}</p>
                        </div>
                      ))}
                    </div>
                    {project.stats.length > 0 ? (
                      <div className="dialog-stats">
                        {project.stats.map((stat) => (
                          <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
                        ))}
                      </div>
                    ) : null}
                    <div className="mt-6">
                      <p className="dialog-field-label">Competências</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => <span key={tag} className="experience-tag">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <p className="section-kicker">Formação</p>
          <h2 className="section-title">Aprendizado contínuo</h2>
          <div className="space-y-7">
            <div>
              <p className="font-display text-xl font-bold">Bacharelado em Psicologia</p>
              <p className="mt-1 text-muted-foreground">Universidade Católica de Santos · 2023–2027 · Em andamento</p>
            </div>
            <div>
              <p className="font-display text-xl font-bold">Técnico em Logística</p>
              <p className="mt-1 text-muted-foreground">ETEC Cubatão · Ensino Médio Integrado · 2020–2022</p>
            </div>
            <ul className="border-t border-foreground/10 pt-3">
              {courses.map((course) => (
                <li key={course} className="border-b border-foreground/10 py-3 text-sm leading-relaxed text-muted-foreground">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="section-shell scroll-mt-20">
          <p className="section-kicker">Contato</p>
          <div className="contact-grid">
            <div>
              <h2 className="section-title italic">Vamos conversar?</h2>
              <p className="max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
                Busco oportunidades de estágio em Recursos Humanos e Gestão de Pessoas. Será um prazer conversar sobre como posso contribuir com o seu time.
              </p>
              <p className="mt-5 text-sm text-muted-foreground">Cubatão · SP</p>
            </div>
            <div className="contact-list">
              <a className="contact-row" href="mailto:macedo.gabi06@gmail.com">
                <span><small>E-mail</small><strong>macedo.gabi06@gmail.com</strong></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="contact-row" href="https://www.linkedin.com/in/gabrielle-mac/" target="_blank" rel="noreferrer">
                <span><small>LinkedIn</small><strong>/in/gabrielle-mac</strong></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="contact-row" href="https://wa.me/5513988672420" target="_blank" rel="noreferrer">
                <span><small>WhatsApp</small><strong>(13) 98867-2420</strong></span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-3xl border-t border-foreground/10 px-5 py-8 sm:px-6">
        <p className="font-mono text-[11px] font-medium uppercase text-violet">Gabrielle Macedo · Psicologia · 2026</p>
      </footer>
    </div>
  );
}