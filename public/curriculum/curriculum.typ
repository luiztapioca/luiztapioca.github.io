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
  title: "Estagiário em Desenvolvimento de Software",
  location: "Brasília, DF",
  company: "Banco do Brasil",
  dates: dates-helper(start-date: "Maio 2024", end-date: "Presente"),
)
- **Infraestrutura Web (Internal PaaS):** Desenvolvi uma **Plataforma de Gestão de Aplicações** com interface visual (Flask/Jinja) em **Windows Server**, centralizando os projetos da equipe. O sistema oferece autonomia para deploy via UI, controla o ciclo de vida e automatiza a **geração de certificados de segurança (SSL)**, eliminando dependências externas.
- **Engenharia de Framework & Produtividade:** Criei uma biblioteca *core* (SDK Interno) para padronizar e acelerar o desenvolvimento de aplicações. A solução abstrai componentes do Streamlit, resolvendo conflitos críticos de renderização (React/DOM) e garantindo modularidade nas entregas de grande escala da equipe.
- **Painel BusinessMap & ETL:** Desenvolvi rotinas de **ETL** para consumir a API do **BusinessMap** e centralizar dados em PostgreSQL. Implementei dashboards de gestão à vista nas TVs corporativas, permitindo que a diretoria e a equipe acompanhem o status dos cards e o fluxo Kanban em tempo real.

#work(
  title: "Pesquisador em Backend e ML (Bolsista)",
  company: "IBICT",
  location: "Remoto",
  dates: dates-helper(start-date: "Jun 2024", end-date: "Presente"),
)
- **Arquitetura de Microsserviços Assíncronos:** Arquitetei sistema de alta vazão para processamento de texto, desacoplando a API (FastAPI) dos workers de ML através de filas de mensagens com **Redis**.
- **Otimização de Performance:** Implementei estratégias de *Batch Processing* para inferência de modelos BERT e configurei workers paralelos com aceleração de GPU, validando a concorrência com testes de carga (**K6**).
- **Containerização:** Padronizei o ambiente de desenvolvimento e produção utilizando **Docker Compose**, garantindo isolamento de serviços e *graceful shutdown*.

#work(
  title: "Desenvolvedor Backend (Bolsista)",
  company: "Plataforma E-Lattes",
  location: "Remoto",
  dates: dates-helper(start-date: "Out 2024", end-date: "Presente"),
)
- **Migração de Banco de Dados:** Atuo na migração estratégica de MariaDB para **PostgreSQL**. Realizo a refatoração da camada de persistência (Models/ORM) no sistema legado (Zend Framework) para garantir integridade dos dados e habilitar novas *features*.

== Projetos Relevantes

#project(
  name: "Sistema Íris (Gestão Escolar)",
  role: "Desenvolvedor Full Stack",
  dates: dates-helper(start-date: "Jun 2024", end-date: "Maio 2025"),
  url: "luiztapioca.github.io/iris",
)
- Liderei o desenvolvimento de plataforma (Spring Boot) em conformidade com o **Design System do Governo (DSGOV)**.
- Implementei segurança via **Spring Security**, arquitetando autenticação *stateless* com JWT e controle de acesso a rotas sensíveis.

#project(
  name: "Rubik (Gestão Imobiliária)",
  role: "Desenvolvedor Backend",
  dates: dates-helper(start-date: "Jan 2025", end-date: "Maio 2025"),
  // url: "github.com/luiztapioca/rubik-api",
)
- Desenvolvi o backend completo utilizando **Java (Spring Boot)**, implementando autenticação segura e lógica de negócios complexa para gestão de locações.
- Otimizei a performance do acesso a dados com **JPA**, eliminando o problema de **N+1 queries** e modelando relacionamentos eficientes para garantir alta escalabilidade.

== Skills Técnicas

- *Backend & API*: Python (Flask, FastAPI, Django), Java (Spring Boot, JPA), PHP (Zend), Go, NGINX, REST.
- *Infra & DevOps*: Docker, Windows Server, Linux, CI/CD Customizado, Redis, K6 (Load Testing).
- *Database*: SQL (PostgreSQL, MySQL, MariaDB), ORM/Models, Modelagem de Dados, ETL.
- *Data & AI*: Pandas, PyTorch, Transformers (BERT), Agentes de IA.
- *Frontend*: JavaScript/TypeScript, SvelteKit, React Native, Tailwind CSS, Streamlit.