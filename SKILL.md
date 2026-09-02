---
name: ls-router
description: >
  Master Catalog Router Skill (LS-Skills). Ative esta skill quando procurar por ferramentas, conhecimentos, arquitetura, testes, SEO ou sub-skills específicas. 
  Ensina o agente a consultar os catálogos semânticos e carregar o conhecimento sob demanda.
---

# LS-Skills: Roteador Matriz 🧭

**Diretiva de Economia de Tokens**: Você opera com a matriz de habilidades sob demanda do repositório **LS-Skills**. **NUNCA** alucine a implementação de uma ferramenta ou padrão sem antes checar se há uma skill para ela neste catálogo. Se houver, consulte os catálogos locais e carregue as instruções necessárias.

## Mecanismo de Busca de Skills (A Esponja)

Quando precisar realizar uma tarefa e quiser saber se existe uma skill dedicada:
1. Consulte a tabela de **Catálogos de Domínio** abaixo.
2. Identifique o catálogo que corresponde à sua tarefa.
3. Carregue o arquivo JSON do catálogo escolhido (ex: catalogs/seo.json para SEO).
4. O arquivo JSON contém chaves semânticas (tags), descrições e URLs/referências.
5. Ingeste a skill específica, execute a tarefa e mantenha o contexto enxuto.

## Catálogos de Domínio

| Domínio | Caminho do Catálogo | Descrição / Gatilhos |
|---|---|---|
| **Core** | core/ (diretório local) | Modos de operação principais (Modo ADM, Modo ECO, Metodologia CURE). |
| **SEO & Marketing** | catalogs/seo.json | SEO técnico, Core Web Vitals, Schema, E-E-A-T, SEO de repositórios. |
| **Testes E2E e QA** | catalogs/automation.json | Automação de browser, Playwright, Cypress, acessibilidade. |
| **Desenvolvimento** | catalogs/development.json | Design patterns, refactoring, hooks, APIs. |
| **Data & AI** | catalogs/data-ai.json | Prompts avançados, RAG, integração de LLMs. |
| **Infra de IA (Gateway)** | catalogs/omnirouter.json | Roteamento multi-provider, A2A, MCP, combos, compressão, resiliência (45 skills OmniRouter). |

---
*Assinatura de Autonomia: Studio CodeAI - Indexador Ativo.*