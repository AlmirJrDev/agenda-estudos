# Plano de Configuração — Agenda de Estudos

O grupo usa GitHub Flow simplificado: a `main` sempre funciona, todo trabalho nasce em uma branch e só entra por pull request aprovado.

## Papéis

| Integrante | Papel | Responsabilidade |
| --- | --- | --- |
| Almir Junior Araujo Gomes | Desenvolvedor principal e Gestor de Configuração | Código, PRs, merges e release v1.0.0 |
| Kauã Almeida | Desenvolvedor | Alterações pelo VS Code |
| Lucas | Revisor de código | Revisa e aprova PRs, resolve conflitos |
| João Pedro Silva Soares | Releases e documentação | CHANGELOG e release v2.0.0 |

## Itens de configuração

| Item | Onde fica | Responsável |
| --- | --- | --- |
| Código da aplicação (HTML, CSS, JS) | `src/` | Almir |
| Lista de matérias e tipos de tarefa | `src/config.js` | Todos |
| Requisitos | `docs/requisitos.md` | Todos |
| Plano de configuração | `docs/plano-de-configuracao.md` | Almir |
| Descrição do projeto | `README.md` | Almir |
| Histórico de versões | `CHANGELOG.md` | João |

## Convenções de nomeação

- **Branches:** `tipo/RFxx-descricao-curta`, minúsculas e hífen. Ex.: `feature/RF01-cadastrar-tarefa`, `fix/RF02-ordem-errada`, `docs/changelog-v2`.
- **Commits** (Conventional Commits): `tipo(escopo): descrição no imperativo`. Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
- **Pull requests:** título igual ao commit principal; descrição com o que mudou, o requisito e como testar.
- **Arquivos:** minúsculas, sem acento, palavras separadas por hífen.

## Política de versionamento

Versionamento semântico `MAIOR.MENOR.CORREÇÃO`. Cada versão entregue vira uma tag na `main`, criada pela página Releases do GitHub:

| Versão | Conteúdo |
| --- | --- |
| `v1.0.0` | RF01 e RF02 |
| `v2.0.0` | RF03 e RF04 |
| `vX.Y.Z` com Z > 0 | Correções sem funcionalidade nova |

## Política de branching

- `main`: código estável e versionado; protegida, sem envio direto.
- `feature/*`, `fix/*`, `docs/*`: uma branch por tarefa, criada a partir da `main` atualizada.
- Merge só por pull request com 1 aprovação; o autor não aprova o próprio PR.
- Branch apagada depois do merge.

## Backup e recuperação

- **Backup:** o GitHub é a cópia principal; os clones do Almir e do Kauã são cópias completas do histórico. Cada release guarda um ZIP do código daquela versão.
- **Voltar a uma versão:** baixar o ZIP da release, ou `git checkout v1.0.0`.
- **Desfazer um merge:** botão *Revert* no pull request.
- **Branch apagada por engano:** botão *Restore branch* no pull request.
