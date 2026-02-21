export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    description: string;
    bullets: string[];
}

export const experiences: Experience[] = [
    {
        id: "BB",
        company: "Banco do Brasil",
        position: "Estagiário",
        startDate: "2025-06-01",
        description: "Analytics, Infra, Desenvolvimento",
        bullets: [
            "Desenvolvi um Web-Server e orquestrador em Python que reduziu o tempo de deploy de 1 dia para minutos, integrando-se ao Git corporativo para automatizar a instalação de dependências, geração de certificados SSL e gerenciamento do ciclo de vida das aplicações.",
            "Implementei arquitetura de segurança com Proxy Reverso (isolamento de portas 7000 -> 5000) e servidor Waitress, garantindo estabilidade em um ambiente restrito sem acesso ao Docker.",
            "Engenhei uma biblioteca 'Wrapper' para SQLAlchemy que resolveu problemas críticos de connection pooling e thread-safety, além de um Framework de Formulários proprietário.",
            "Implementei pipelines de backend para Agentes de IA, convertendo inferências não estruturadas em dados relacionais (PostgreSQL) para alimentar dashboards de decisão estratégica.",
            "Projetei e publiquei o 'Direo Forge', um pacote pip interno com interface CLI (construído com Typer e Copier) para geração automatizada de boilerplates. A ferramenta consolidou um padrão arquitetural de minha autoria para novos projetos, garantindo a adoção de boas práticas e a integração out-of-the-box de bibliotecas corporativas."
        ]
    },
    {
        id: "ibict",
        company: "IBICT",
        position: "Pesquisador",
        startDate: "2025-01-03",
        endDate: "2025-12-01",
        description: "Desenvolvimento de microsserviços",
        bullets: [
            "Projetei um microsserviço de classificação de texto utilizando o padrão Producer-Consumer (FastAPI + Redis) para desacoplar a ingestão de dados da inferência pesada de IA.",
            "Otimizei a performance do modelo BERT implementando Dynamic Batching e filas de processamento assíncronas, aumentando drasticamente o throughput da GPU.",
            "Implementei estratégias de resiliência como Dead Letter Queues (DLQ) e Graceful Shutdown nos workers, assegurando a integridade dos dados em caso de falhas.",
            "Realizei a containerização completa com Docker (incluindo GPU Passthrough) e validação de escalabilidade através de testes de estresse com K6."
        ]
    },
    {
        id: "E-Lattes",
        company: "E-Lattes",
        position: "Pesquisador",
        startDate: "2025-09-01",
        endDate: "2026-03-01",
        description: "Modernização de Sistemas Legados",
        bullets: [
            "Lidero a migração estratégica da camada de persistência de banco de dados, transicionando de MariaDB para PostgreSQL para suportar queries complexas de análise acadêmica.",
            "Atuo na refatoração de código legado (Zend Framework), substituindo padrões antigos por ORMs modernos e garantindo a integridade referencial dos dados durante a migração.",
            "Arquiteto a reescrita de algoritmos recursivos de extração de currículos, migrando-os de R para Python. O projeto transforma scripts monolíticos em uma arquitetura de microsserviços escaláveis, orquestrados via filas de prioridade para habilitar processamento paralelo e assíncrono."
        ]
    }

];
