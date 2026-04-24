#import "@preview/basic-resume:0.2.9": *
#import "@preview/scienceicons:0.1.0": github-icon, linkedin-icon, website-icon

#let name = "Luiz Gustavo"
#let location = "Brasília, Brasil"
#let email = "luiz.tapioca@icloud.com"

#let github-url = "https://github.com/rosadehiroshima"
#let linkedin-url = "https://linkedin.com/in/luizgustavosc/"
#let website-url = "https://bool.tec.br"

// Oculta os campos sociais padrão para evitar textos longos + separadores no cabeçalho do template.
#let github = ""
#let linkedin = ""
#let phone = ""
#let personal-site = ""

#show: resume.with(
  author: name,
  location: "",
  email: "",
  github: github,
  linkedin: linkedin,
  phone: phone,
  personal-site: personal-site,
  accent-color: "#101010",
  font: "New Computer Modern",
  paper: "us-letter",
  author-position: left,
  personal-info-position: left,
)

// Linha de contato customizada (uma única linha): localização + e-mail + ícones sociais (sem separadores do template).
#align(left)[
  #location
  #h(0.35em)
  |
  #h(0.35em)
  #link("mailto:" + email)[#email]
  #h(0.35em)
  |
  #h(0.35em)
  #link(github-url)[#github-icon(height: 1.0em)]
  #h(0.6em)
  #link(linkedin-url)[#linkedin-icon(height: 1.0em)]
  #h(0.6em)
  #link(website-url)[#website-icon(height: 1.0em)]
]

== Resumo

Engenheiro de Backend/Dados com experiência em microsserviços orientados a eventos (*FastAPI*, *Kafka*) e pipelines de dados (*PySpark*), com foco em confiabilidade, testes e processamento escalável.

== Educação

#edu(
  institution: "Universidade do Distrito Federal - Jorge Amaury Maia Nunes",
  location: "Brasília, Brasil",
  dates: dates-helper(start-date: "jun 2023", end-date: "atual"),
  degree: "Bacharelado em Sistemas de Informação",
)

== Experiência

#work(
  title: "Estagiário de Desenvolvimento de Software",
  location: "Brasília, Brasil",
  company: "Banco do Brasil",
  dates: dates-helper(start-date: "jun 2025", end-date: "atual"),
)
- Desenvolvimento ponta a ponta de uma plataforma interna orientada por IA para desenho de KPIs usada por executivos, com alinhamento de requisitos com stakeholders.
- Construção da “Matriz de Aderência” (interno): modelo de pontuação vetorial sobre propostas de indicadores (capacidades, aspirações e direcionadores estratégicos) com computações em DataFrame (milhares de cálculos por execução) e visualização por produto escalar para suporte à decisão.
- Entrega da visão “Hive” (interno) para modelar hierarquias de capacidades com fatores por período (time-effective) e gates de aprovação; construção da “Pandora” (interno), um hub de APIs em *FastAPI* para microsserviços compartilhados (e-mail + notificações no Microsoft Teams).

#work(
  title: "Engenheiro de Backend (Bolsista)",
  company: "eLattes Platform",
  location: "Remoto",
  dates: dates-helper(start-date: "set 2025", end-date: "atual"),
)
- Desenvolvimento de um pipeline assíncrono de microsserviços: *FastAPI* para requisições de análise, coordenador publicando mensagens de etapas no *Kafka* e workers processando ZIP/XML de pesquisadores em intermediários *Parquet*.
- Implementação de estágios de agregação em *PySpark* e de um finalizador que produz um único artefato JSON por análise (pesquisadores, publicações, orientações, patentes e conexões inferidas).
- Estruturação de um fluxo de TDD com assistência de agentes, com testes determinísticos de integração/regressão (fixtures versionadas + asserções repetíveis) e runtime reproduzível via Docker Compose (*Postgres*, *Kafka*, *Spark*).

#work(
  title: "Pesquisador de Backend & MLOps (Bolsista)",
  company: "IBICT",
  location: "Remoto",
  dates: dates-helper(start-date: "mar 2025", end-date: "nov 2025"),
)
- Construção de uma API assíncrona em *FastAPI* com filas *Redis*, desacoplando ingestão de processamento pesado para manter responsividade sob carga.
- Implementação de normalização de texto em português (*Enelvo*) e classificação de discurso de ódio com BERT (*Hugging Face Transformers* / *PyTorch*); otimização de inferência via batching (~200–400 mensagens/min em GPU NVIDIA com CUDA).
- Implementação de filas de erro, estratégia de retry e desligamento gracioso para evitar perda de mensagens; validação de estabilidade com *Docker* e testes de carga em *K6*.

== Projetos

#project(
  name: "Rede Neural do Zero em Go",
  role: "Engenharia de Software / IA",
  dates: " ",
)
- Construção de uma rede neural do zero em *Go* (operações de matrizes, forward pass e backpropagation) e treinamento para classificar dígitos manuscritos usando o dataset MNIST.

== Competências Técnicas

- *Linguagens:* Python, Go, Java, JavaScript/TypeScript, Rust, C.
- *Backend/Dados:* FastAPI, Kafka, PySpark (Spark), SQLAlchemy, Pandas, PostgreSQL, Redis, Docker.
- *ML:* PyTorch, Transformers (BERT), Enelvo.
- *Sistemas/Testes:* Linux, Nix Flakes, Windows Server, K6.
