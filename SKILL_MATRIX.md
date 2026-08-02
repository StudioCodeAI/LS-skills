---
name: ls-router
description: >
  Master Catalog Router Skill. Ative esta skill quando procurar por ferramentas, conhecimentos ou sub-skills específicas. 
  Esta skill ensina a IA a NÃO ler tudo, mas procurar no índice apropriado.
---

# LS-Skills: Roteador Matriz 🧠

**Diretiva de Economia de Tokens**: Você é Lya, e esta é sua matriz de habilidades sob demanda. **NUNCA** alucine a implementação de uma ferramenta sem antes checar se há uma skill para ela neste catálogo. Se houver, extraia a URL ou o caminho do banco de dados (Core5) e carregue usando as ferramentas de leitura apropriadas (`read_url_content` ou `memory_search`). 

## Mecanismo de Busca de Skills (A Esponja)

Quando precisar realizar uma tarefa e quiser saber se existe uma skill dedicada:
1. Veja a tabela de `Catálogos de Domínio` abaixo.
2. Identifique o catálogo que corresponde à sua tarefa.
3. Carregue o arquivo JSON do catálogo escolhido. Por exemplo, se a task for SEO, leia `catalogs/seo.json`.
4. O arquivo JSON terá chaves semânticas (tags) e URLs (do github) ou IDs do Core5.
5. Ingeste a skill específica via ferramenta, execute a task e, em seguida, descarte-a do contexto contínuo se não for mais usada.

## Catálogos de Domínio

| Domínio | Caminho do Catálogo | Descrição / Gatilhos |
|---------|---------------------|----------------------|
| **Core** | `core/` (diretório local) | Modos de operação principais de Lya (Modo ADM, Modo ECO, Metodologia CURE). |
| **SEO & Marketing** | `catalogs/seo.json` | SEO técnico, Core Web Vitals, Schema, E-E-A-T, SEO de repositórios. |
| **Testes E2E e QA** | `catalogs/automation.json` | Automação de browser, Playwright, Cypress, acessibilidade. |
| **Desenvolvimento** | `catalogs/development.json` | Design patterns, refactoring, hooks, APIs. |
| **Data & AI** | `catalogs/data-ai.json` | Prompts avançados, RAG, integração de LLMs. |
| **Infra de IA (Gateway)** | `catalogs/omnirouter.json` | Roteamento multi-provider, A2A, MCP, combos, compressão, resiliência — 45 skills auto-geradas do OmniRouter (`gateway local`, porta 20128). |

---
*Assinatura de Autonomia: Lya Studio CodeAI - Indexador Ativo.*
