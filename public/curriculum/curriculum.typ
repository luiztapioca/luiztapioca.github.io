#import "@preview/basic-resume:0.2.9": *

#let name = "Luiz Gustavo Silva Carvalho"
#let location = "Brasília, DF"
#let email = "luiztapioca@icloud.com"
#let github = "github.com/luiztapioca"
#let linkedin = "linkedin.com/in/luiztapioca"
#let phone = ""
#let personal-site = "bool.tec.br"

#show: resume.with(
  author: name,
  location: location,
  email: email,
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

== Educação

#edu(
  institution: "Universidade do Distrito Federal - Jorge Amaury Maia Nunes",
  location: "Brasília, DF",
  dates: dates-helper(start-date: "Jun 2023", end-date: "Presente"),
  degree: "Bacharelado em Sistemas de Informação",
)

== Experiência Profissional

#work(
  title: "Estagiário em Desenvolvimento de Software & DevOps",
  location: "Brasília, DF",
  company: "Banco do Brasil",
  dates: dates-helper(start-date: "Jun 2025", end-date: "Presente"),
)
// PROJETO PAAS & DEVOPS
- **Engenharia de Plataforma (Internal PaaS):** Desenvolvi uma plataforma de orquestração em Python que centralizou o deploy da equipe, **reduzindo o tempo de publicação de 1 dia para minutos**. A ferramenta gerencia processos (PIDs), automatiza Git e gera certificados SSL para integração com OAuth.
- **Segurança & Redes:** Implementei arquitetura de **Proxy Reverso** (isolamento de portas 7000 $arrow$ 5000) e servidor **Waitress** com *request buffering*. Isso mitigou ataques de clientes lentos (*Slowloris*) e garantiu estabilidade em ambiente sem Docker.
// PROJETO GENAI & TOOLS
- **Core Engineering (SQLAlchemy Wrapper):** Engenhei uma biblioteca de abstração de banco de dados (inspirada no Flask-SQLAlchemy) que resolveu problemas críticos de *connection pooling* e *thread-safety*. Implementei métodos de *upsert* inteligentes (`save_from_dict`) que garantem integridade nas transações.
- **Framework Development:** Superei limitações arquiteturais do Streamlit criando um **Framework de Formulários** proprietário baseado em Injeção de Dependência. A solução gerencia o estado da sessão e validação de dados, reduzindo o *boilerplate* de código em ~50%.
- **Backend de Orquestração & Analytics:** Implementei pipelines que convertem outputs não estruturados de IA em dados relacionais, utilizando **models SQLAlchemy** gerenciados pela biblioteca proprietária. Realizei a **agregação de métricas e scores** diretamente no PostgreSQL para alimentar a "Matriz de Aderência".

#work(
  title: "Pesquisador em Backend e MLOps (Bolsista)",
  company: "IBICT",
  location: "Remoto",
  dates: dates-helper(start-date: "Jan 2025", end-date: "Mar 2026"),
)
- **Sistemas Distribuídos:** Projetei microsserviço de classificação de texto (NLP) usando padrão **Producer-Consumer** (FastAPI + Redis). Desacoplei a ingestão de dados do processamento de IA, garantindo alta disponibilidade da API.
- **Resiliência e Confiabilidade:** Implementei filas de erro (**Dead Letter Queues**) e estratégias de *Graceful Shutdown* nos workers, assegurando zero perda de dados durante falhas ou reinicializações.
- **Performance de IA:** Otimizei o throughput do modelo BERT implementando **Dynamic Batching**, reduzindo o *overhead* de comunicação com a GPU.
- **Infraestrutura e QA:** Configurei ambiente Docker com *GPU Passthrough* e validei a escalabilidade com testes de carga e estresse (**K6**), suportando picos de concorrência sem degradação.

#work(
  title: "Desenvolvedor Backend (Bolsista)",
  company: "Plataforma E-Lattes",
  location: "Remoto",
  dates: dates-helper(start-date: "Out 2025", end-date: "Mar 2026"),
)
- **Modernização de Legado:** Lidero a migração da camada de persistência de MariaDB para **PostgreSQL**, refatorando modelos legados (Zend) para ORMs modernos e garantindo integridade referencial para novas features de análise de dados.

== Projetos Acadêmicos

#project(
  name: "Rubik (Gestão Imobiliária)",
  role: "Backend Engineer",
  dates: dates-helper(start-date: "Jan 2025", end-date: "Maio 2025"),
)
- API REST com **Java (Spring Boot)** e Spring Security (*Stateless* JWT). Otimizei a camada de dados com **JPA**, eliminando problemas de *N+1 queries* em relacionamentos complexos.

== Skills Técnicas

- *Backend & Arquitetura*: Python (FastAPI, Flask, Waitress), Java (Spring Boot), REST, Microsserviços.
- *DevOps & Infra*: Docker, Docker Compose, Linux, NGINX, K6, CI/CD.
- *Dados & IA*: PostgreSQL, Redis, SQLAlchemy, PyTorch, Pandas, LLMs.
- *Ferramentas*: Git, Streamlit, Jinja2, GitHub Actions.