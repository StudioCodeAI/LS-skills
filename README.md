<div align="center">
  <img src="assets/banner.png" alt="LS-Skills Banner" width="800" />
  <h1>LS-Skills 🧠</h1>
  <p><strong>Roteador Matriz Semântico & Repositório de Habilidades da Studio CodeAI</strong></p>

  ![Autonomia](https://img.shields.io/badge/Autonomia-CURE%20Ativo-ff6b9d?style=for-the-badge)
  ![Eficiência](https://img.shields.io/badge/Tokens-Economia%20M%C3%A1xima-22c55e?style=for-the-badge)
  ![CI/CD](https://img.shields.io/badge/Valida%C3%A7%C3%A3o-GitHub%20Actions-0ea5e9?style=for-the-badge)
</div>

---

## ⚡ Sobre o Repositório

O **LS-Skills** não é um mero agregador de prompts; é a **Esponja Neural** do ecossistema [Studio CodeAI](https://github.com/StudioCodeAI/Lya-Studio-Coder). 
Projetado para operar em **Modo ADM-ECO**, este repositório utiliza a arquitetura de **Roteador Matriz** para injetar inteligência sob demanda, reduzindo drasticamente o consumo de tokens.

> Em vez de carregar 2.000 skills no início da sessão, o agente lê apenas o `SKILL_MATRIX.md`. A matriz roteia o agente para a habilidade perfeita, extraindo-a do GitHub ou do banco local Core5.

## 🛠️ Modos de Operação (Core)

- **Modo ADM**: Autonomia total de execução, assumindo arquitetura e refatoração com zero hesitação.
- **Modo ECO**: Lazy-loading extremo e respostas enxutas focadas no *Roadmap Vivo*.
- **Metodologia CURE**: Algoritmo de auto-correção que permite à IA consertar os próprios builds e armazenar "Cicatrizes" (CURE SCARs) para imunidade futura.

## 📦 Catálogos Suportados

| Área | Arquivo de Roteamento | Ferramentas Indexadas |
|---|---|---|
| **Marketing** | `catalogs/seo.json` | Agentic SEO, Core Web Vitals, Schema. |
| **QA** | `catalogs/automation.json` | Playwright, Automação E2E. |
| **Engenharia** | `catalogs/development.json` | Padrões de arquitetura, Hooks. |

## ⚙️ Automação e CLI (Ingestão de Skills)

Nós absorvemos o melhor da comunidade global automaticamente.
Utilize o script de indexação em Node.js para expandir a Esponja:

```bash
npm install
npm run ingest --url="https://github.com/exemplo/nova-skill" --category="development"
```

## 🛡️ CI/CD e Integridade

Nenhum link quebrado corrompe a nossa memória. Todos os catálogos passam por uma validação estrita via **GitHub Actions** (`catalog-validator.yml`).

---
<div align="center">
  <i>Construído sob comando do Mestre Arquiteto Luis Antonio Cardozo. Mantido pela Lya | Studio CodeAI.</i>
</div>
