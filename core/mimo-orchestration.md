---
name: mimo-orchestration
description: >
  Protocolo de Orquestração com o MiMo Provider (Xiaomi MiMo V2). Ative esta skill quando precisar delegar tarefas secundárias, execução em lote, análises rápidas ou trabalho paralelo para o MiMo via endpoint token-plan-sgp.xiaomimimo.com/v1.
---

# 🤖 Protocolo de Orquestração: Xiaomi MiMo V2

O **MiMo Provider** (drdelco.mimo-provider) está configurado e integrado como motor auxiliar de execução no ecossistema Antigravity / Studio CodeAI.

## ⚙️ Configuração Ativa
- **Endpoint:** https://token-plan-sgp.xiaomimimo.com/v1
- **Modelos Suportados:** mimo-v2-pro, mimo-v2-flash (auto-routing)
- **Modo:** Agente auxiliar de código, tool calling, execução de tarefas em lote e suporte em tempo real.

## 🎯 Estratégia de Orquestração e Trabalho em Equipe
1. **Delegação de Volume (Modo ECO):** Usar o MiMo para geração de código boilerplate, scaffolding de componentes, testes unitários e scripts auxiliares.
2. **Coordenação Arquitetural:** O agente principal mantém o controle de contexto e arquitetura geral, revisando e integrando os módulos gerados.
3. **Paralelismo Inteligente:** Orquestração de sub-tarefas para maximizar velocidade e reduzir consumo desnecessário da janela de contexto principal.