#import "@preview/basic-resume:0.2.9": *

#let name = "Luiz Gustavo"
#let location = "Brasília, DF"
#let email = "luiztapioca@icloud.com"
#let github = "github.com/luiztapioca"
#let linkedin = "linkedin.com/in/luizgustavosc/"
#let phone = "+XX (XX) X XXXX-XXXX"
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
  dates: dates-helper(start-date: "Jun 2025", end-date: "Presente"),
)
- Desenvolvi uma plataforma interativa orquestrada por múltiplos agentes de IA que auxilia os usuários na criação de indicadores. Construí a "Matriz de Aderência", um painel para altos executivos avaliarem o alinhamento desses indicadores à estratégia do banco.
- Criei de ponta a ponta um painel executivo com **Flask** e **HTMX** que consome dados via API e é exibido continuamente nas TVs da diretoria, fornecendo o status dos projetos em tempo real para direcionamento de cobranças e prioridades.
- Construí uma plataforma interna de deploy usando **Python** e **WebSockets** que reduziu o tempo de publicação de aplicações de 1 dia para poucos minutos, sem depender de Docker.
- Desenvolvi uma biblioteca de acesso unificado a múltiplos bancos de dados (**PostgreSQL**, **DB2**, **SQLite**) e projetei um padrão arquitetural automatizado por uma CLI (**Typer** / **Copier**) que foi adotado por toda a equipe.

#work(
  title: "Pesquisador em Backend e MLOps (Bolsista)",
  company: "IBICT",
  location: "Remoto",
  dates: dates-helper(start-date: "Jan 2025", end-date: "Mar 2026"),
)
- Criei uma API assíncrona com **Python** (**FastAPI**) e **Redis** para gerenciar filas de processamento de textos em background, garantindo a responsividade do servidor.
- Integrei um modelo de IA otimizado na placa de vídeo (GPU) capaz de processar cerca de 400 mensagens por minuto e implementei rotinas de recuperação para garantir zero perda de dados em caso de falhas.
- Configurei a infraestrutura com **Docker** e criei testes de carga automatizados com **K6** para comprovar e garantir a estabilidade do sistema sob alto tráfego.

#work(
  title: "Desenvolvedor Backend (Bolsista)",
  company: "Plataforma E-Lattes",
  location: "Remoto",
  dates: dates-helper(start-date: "Out 2025", end-date: "Mar 2026"),
)
- Conduzi a migração de um sistema monolítico legado de extração de dados escrito em **R** para uma arquitetura de microsserviços em **Python**.
- Implementei um sistema de filas de prioridade para viabilizar o processamento paralelo massivo de dados e migrei a estrutura do banco para **PostgreSQL**.

== Projetos Pessoais

#project(
  name: "Rede Neural Artificial em Go",
  role: "Engenharia de Software / IA",
  dates: " ",
)
- Desenvolvi uma rede neural do zero utilizando exclusivamente a linguagem **Go**, construindo toda a lógica matemática e de álgebra linear sem o uso de bibliotecas externas de Inteligência Artificial. Implementei os algoritmos para treinar o modelo a identificar e classificar dígitos manuscritos da base de dados MNIST.

== Habilidades Técnicas

- *Linguagens de Programação*: Python, Go, Java, TypeScript, JavaScript, PHP.
- *Bancos de Dados*: PostgreSQL, MySQL, IBM DB2, Redis, SQLite.
- *Frameworks e Bibliotecas*: React, Svelte, SvelteKit, Next.js, Flask, FastAPI, Spring Boot, HTMX, TailwindCSS, Bootstrap, Elysia, Drizzle, Better-auth, Jinja.
- *Infraestrutura e DevOps*: Docker, Nix Flakes, Linux, Windows Server, Git, K6, NGinx.