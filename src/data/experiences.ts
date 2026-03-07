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
    description: "Engenharia de Software, IA e Infraestrutura",
    bullets: [
      "Desenvolvi uma plataforma interativa onde o usuário propõe novos indicadores de desempenho e os aprimora respondendo a perguntas de uma IA. Criei o motor de conversação orquestrando múltiplos agentes especialistas alimentados com dados corporativos.",
      "Construí a 'Matriz de Aderência', um painel visual utilizado por altos executivos para avaliar se os indicadores co-criados com a IA estão alinhados aos objetivos estratégicos do banco.",
      "Desenvolvi de ponta a ponta um sistema que consome dados via API (Businessmap) e alimenta um painel dinâmico em Flask e HTMX. A interface é exibida continuamente em todas as TVs da diretoria, fornecendo visão em tempo real para direcionamento de cobranças executivas.",
      "Construí uma plataforma interna de deploy usando Python e WebSockets que reduziu o tempo de publicação de aplicações de 1 dia para poucos minutos, incluindo proxy reverso interno e isolamento de portas para rodar em ambiente sem Docker.",
      "Desenvolvi uma biblioteca centralizada (SQLAlchemy e Pandas) que permite à aplicação consultar simultaneamente diferentes bancos de dados (PostgreSQL, IBM DB2 e SQLite), resolvendo travamentos causados por excesso de concorrência.",
      "Projetei um padrão arquitetural de código adotado pela equipe e criei uma ferramenta de linha de comando (CLI com Typer e Copier) que gera automaticamente a estrutura base de novos projetos já com as bibliotecas corporativas."
    ]
  },
  {
    id: "ibict",
    company: "IBICT",
    position: "Pesquisador",
    startDate: "2025-03-01",
    endDate: "2025-11-01",
    description: "Desenvolvimento de Microsserviços e Integração de IA",
    bullets: [
      "Criei uma API assíncrona (FastAPI) integrada ao Redis para gerenciar filas de mensagens, separando o recebimento dos dados do processamento pesado e mantendo o sistema responsivo.",
      "Integrei um modelo de IA (BERT) para análise de textos e otimizei o envio de dados para a placa de vídeo (GPU) em lotes, alcançando o processamento de cerca de 400 mensagens por minuto.",
      "Implementei filas de recuperação de erros e rotinas de desligamento seguro, garantindo que nenhum dado seja perdido caso o servidor precise ser reiniciado.",
      "Configurei a infraestrutura com Docker (habilitando uso de GPU) e validei a estabilidade do sistema criando testes automatizados com K6, suportando acessos simultâneos sem lentidão."
    ]
  },
  {
    id: "E-Lattes",
    company: "Plataforma E-Lattes",
    position: "Desenvolvedor",
    startDate: "2025-09-01",
    description: "Modernização de Sistemas Legados",
    bullets: [
      "Reescrevi scripts legados de extração de currículos da linguagem R para Python, migrando de um código único (monolito) para serviços independentes.",
      "Adicionei um sistema de filas com prioridade para permitir que grandes volumes de dados fossem processados simultaneamente de forma paralela e muito mais rápida.",
      "Conduzi a migração do banco de dados de MariaDB para PostgreSQL, refatorando a estrutura para suportar consultas analíticas complexas e novas funcionalidades."
    ]
  },
  // {
  //   id: "NN-Go",
  //   company: "Projeto Pessoal",
  //   position: "Engenheiro de Software",
  //   startDate: "2026-01-01", // Ajuste para a data em que começou
  //   description: "Desenvolvimento de Rede Neural Artificial em Go",
  //   bullets: [
  //     "Desenvolvi uma rede neural artificial do zero utilizando exclusivamente a linguagem Go, construindo toda a lógica matemática sem o uso de bibliotecas externas de Inteligência Artificial.",
  //     "Implementei algoritmos de treinamento e inferência para reconhecer e classificar dígitos numéricos manuscritos a partir da base de dados MNIST."
  //   ]
  // }
];