---
FrontmatterVersion: 1
DocumentType: Guide
Title: EaC GitHub Agents Guide
Summary: Guardrails for collaborating on GitHub Everything-as-Code modules.
Created: 2025-11-20
Updated: 2025-11-20
Owners:
  - fathym
References:
  - Label: Project README
    Path: ./README.md
  - Label: Project GUIDE
    Path: ./GUIDE.md
  - Label: EaC Sub-Area README
    Path: ../README.md
  - Label: EaC Sub-Area AGENTS
    Path: ../AGENTS.md
  - Label: EaC Sub-Area GUIDE
    Path: ../GUIDE.md
  - Label: Projects AGENTS
    Path: ../../AGENTS.md
  - Label: Workspace AGENTS
    Path: ../../../AGENTS.md
---

# AGENTS: EaC GitHub

Guardrails for humans and AI working on GitHub-focused EaC modules.

## Core Guardrails

1. **Stay scoped.** Keep work under `projects/everything-as-code/eac-github/` unless coordinating with another pod; link cross-pod dependencies explicitly.
2. **Frontmatter required.** All docs include frontmatter and relative references back to parent guides.
3. **API stability.** Avoid breaking GitHub model contracts silently; document breaking changes and add migration notes for consumers.
4. **Provenance.** Capture GitHub API/version assumptions and release pins in `UPSTREAM.md` when publishing; prefer upstream-first fixes before diverging.
5. **Security & data handling.** Do not embed tokens or secrets in docs/tests; document required permissions clearly.

## Communication

- Declare intent before editing; summarize outcomes and next steps in the project README or a short log.
- Link consumer pods when behavior changes to keep dependencies aligned.
