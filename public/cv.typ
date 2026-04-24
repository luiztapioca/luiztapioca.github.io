#import "@preview/basic-resume:0.2.9": *
#import "@preview/scienceicons:0.1.0": github-icon, linkedin-icon, website-icon

#let name = "Luiz Gustavo"
#let location = "Brasília, Brazil"
#let email = "luiz.tapioca@icloud.com"

#let github-url = "https://github.com/rosadehiroshima"
#let linkedin-url = "https://linkedin.com/in/luizgustavosc/"
#let website-url = "https://bool.tec.br"

// Hide default social fields to avoid long text + separators in the template header.
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

// Custom contact line (single row): location + email + social icons (no separators).
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

== Summary

Backend/Data engineer building event-driven microservices (*FastAPI*, *Kafka*) and data pipelines (*PySpark*), with emphasis on reliability, testing, and scalable processing.

== Education

#edu(
  institution: "Universidade do Distrito Federal - Jorge Amaury Maia Nunes",
  location: "Brasília, Brazil",
  dates: dates-helper(start-date: "Jun 2023", end-date: "Present"),
  degree: "B.Sc. in Information Systems",
)

== Experience

#work(
  title: "Software Development Intern",
  location: "Brasília, Brazil",
  company: "Banco do Brasil",
  dates: dates-helper(start-date: "Jun 2025", end-date: "Present"),
)
- Technical focal point and hands-on developer for an internal AI-driven KPI design platform used by executives; implemented core features end-to-end and aligned requirements with stakeholders.
- Built the “Adherence Matrix” (internal): a vector-based scoring model over indicator proposals across capabilities, aspirations, and strategic drivers using DataFrame computations (thousands of calculations per run) and dot-product visualization for decision-making.
- Delivered the “Hive” view (internal) to model capability hierarchies with time-effective (period-based) factors and approval gates; also built “Pandora” (internal), a *FastAPI* API hub for shared microservices (email + Microsoft Teams notifications).

#work(
  title: "Backend Engineer (Scholarship)",
  company: "eLattes Platform",
  location: "Remote",
  dates: dates-helper(start-date: "Sep 2025", end-date: "Present"),
)
- Building an asynchronous microservice pipeline: *FastAPI* receives analysis requests, a coordinator publishes stage messages to *Kafka*, and workers process researcher ZIP/XML inputs into *Parquet* intermediates.
- Implementing *PySpark* aggregation stages and a finalizer that produces a single JSON artifact per analysis (researchers, publications, advising, patents, inferred connections).
- Established an agent-assisted TDD workflow with deterministic integration/regression tests (versioned fixtures + repeatable assertions) and a reproducible Docker Compose runtime (*Postgres*, *Kafka*, *Spark*).

#work(
  title: "Backend & MLOps Researcher (Scholarship)",
  company: "IBICT",
  location: "Remote",
  dates: dates-helper(start-date: "Mar 2025", end-date: "Nov 2025"),
)
- Built an asynchronous *FastAPI* API backed by *Redis* queues, decoupling ingestion from heavy processing to keep the service responsive under load.
- Implemented Portuguese text normalization (*Enelvo*) and BERT-based hate-speech classification (*Hugging Face Transformers* / *PyTorch*); optimized inference via batching, reaching ~200–400 messages/min on NVIDIA GPU (CUDA).
- Implemented error queues + retry strategy and graceful shutdown to prevent message loss; validated stability with *Docker* and *K6* load tests.

== Projects

#project(
  name: "Neural Network from Scratch in Go",
  role: "Software Engineering / AI",
  dates: " ",
)
- Built a neural network from scratch in *Go* (matrix ops, forward pass, backpropagation) and trained it to classify handwritten digits using the MNIST dataset.

== Technical Skills

- *Languages:* Python, Go, Java, JavaScript/TypeScript, Rust, C.
- *Backend/Data:* FastAPI, Kafka, PySpark (Spark), SQLAlchemy, Pandas, PostgreSQL, Redis, Docker.
- *ML:* PyTorch, Transformers (BERT), Enelvo.
- *Systems/Testing:* Linux, Nix Flakes, Windows Server, K6.
