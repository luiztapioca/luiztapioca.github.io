#import "@preview/basic-resume:0.2.9": *

#let name = "Luiz Gustavo"
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
  title: "Estagiário em Engenharia de Software & DevOps",
  location: "Brasília, DF",
  company: "Banco do Brasil",
  dates: dates-helper(start-date: "Jun 2024", end-date: "Presente"),
)
- **Eficiência de Deploy (PaaS):** Reduzi o ciclo de deploy de **1 dia para menos de 5 minutos** ao desenvolver uma plataforma de orquestração interna em Python que automatiza a gestão de processos, integração Git e provisionamento de SSL.
- **Segurança de Infraestrutura:** Mitiguei vulnerabilidades de ataques *Slowloris* e garanti estabilidade em ambiente on-premises através da implementação de uma arquitetura de **Proxy Reverso** e servidor **Waitress** com *request buffering*.
- **Arquitetura de Persistência:** Eliminei erros de concorrência e vazamento de conexões ao projetar um wrapper de banco de dados baseado em **SQLAlchemy**, implementando estratégias de *Connection Pooling* e *Scoped Sessions*.
- **Framework Development:** Aumentei a produtividade da equipe em **50%** ao criar um framework de formulários baseado em **Injeção de Dependência**, superando limitações técnicas de gestão de estado do Streamlit.
- **Engenharia de Dados & IA:** Viabilizei a análise estratégica de indicadores ao converter outputs não estruturados de LLMs em dados relacionais, alimentando uma **Matriz de Aderência** dinâmica para suporte à decisão.

#work(
  title: "Pesquisador em Backend e MLOps (Bolsista)",
  company: "IBICT",
  location: "Remoto",
  dates: dates-helper(start-date: "Jan 2025", end-date: "Mar 2026"),
)
- **Sistemas Distribuídos:** Projetei um microsserviço de classificação de texto utilizando o padrão **Producer-Consumer** com **FastAPI e Redis**, desacoplando a ingestão de dados da inferência pesada de IA.
- **Resiliência de Dados:** Garanti **zero perda de mensagens** em falhas de processamento ao implementar **Dead Letter Queues (DLQ)** e protocolos de *Graceful Shutdown* nos workers distribuídos.
- **Otimização de Performance:** Aumentei o throughput de inferência em **4x (de 100 para 400 msg/min)** ao implementar **Dynamic Batching** no modelo BERT, otimizando o uso de recursos de GPU.
- **Infraestrutura e QA:** Validei a escalabilidade do sistema para alta concorrência utilizando testes de estresse com **K6** em ambiente containerizado com **Docker e GPU Passthrough**.

#work(
  title: "Desenvolvedor Backend (Bolsista)",
  company: "Plataforma E-Lattes",
  location: "Remoto",
  dates: dates-helper(start-date: "Out 2025", end-date: "Mar 2026"),
)
- **Modernização de Legado:** Lidero a migração da camada de dados de MariaDB para **PostgreSQL**, refatorando modelos legados para ORMs modernos e garantindo integridade referencial para novas features analíticas.

== Projetos Acadêmicos

#project(
  name: "Rubik (Gestão Imobiliária)",
  role: "Backend Engineer",
  dates: dates-helper(start-date: "Jan 2025", end-date: "Maio 2025"),
)
- Desenvolvi uma API REST segura com **Java (Spring Boot)** e Spring Security, otimizando a persistência com **JPA** para eliminar gargalos de performance (*N+1 queries*).

== Skills Técnicas

- **Backend & Arquitetura:** Python (FastAPI, Flask, SQLAlchemy), Java (Spring Boot, JPA), REST APIs, Design Patterns.
- **DevOps & Infra:** Docker, Docker Compose, NGINX, Redis Queues, Linux (Bash), CI/CD, K6 (Testes de Carga).
- **Dados & IA:** PostgreSQL, MLOps (BERT, Transformers, PyTorch), LLM Orchestration, Thread-safety.
- **Ferramentas:** Git (Git Flow), Streamlit, Jinja2, GitHub Actions, Logging Estruturado.