---
FrontmatterVersion: 1
DocumentType: Guide
Title: Fathym EaC GitHub
Summary: Everything-as-Code models and helpers for GitHub integrations.
Created: 2025-11-20
Updated: 2025-11-20
Owners:
  - fathym
References:
  - Label: EaC Sub-Area README
    Path: ../README.md
  - Label: EaC Sub-Area AGENTS
    Path: ../AGENTS.md
  - Label: EaC Sub-Area GUIDE
    Path: ../GUIDE.md
  - Label: Projects README
    Path: ../../README.md
  - Label: Projects AGENTS
    Path: ../../AGENTS.md
  - Label: Projects GUIDE
    Path: ../../GUIDE.md
  - Label: Workspace README
    Path: ../../../README.md
  - Label: Workspace AGENTS
    Path: ../../../AGENTS.md
  - Label: Workspace GUIDE
    Path: ../../../WORKSPACE_GUIDE.md
---

# Fathym EaC GitHub

EaC definitions and helpers for GitHub integrations (actions, apps, repos).

- **Goal:** model GitHub resources and automation as EaC for reuse across Fathym
  runtimes.
- **Outputs:** GitHub-focused types and helpers exported from `src/github/`.
- **Code location:** this folder hosts the source.

## Current Status

- Models live under `src/github/**`.
- Tasks: `deno task test`, `deno task build`, `deno task publish:check`,
  `deno task deploy`, `deno task version`.
- Licensing: MIT (non-commercial) with commercial option; see
  `LICENSE`/`COMMERCIAL_LICENSE.md`.

## How to Work in This Pod

1. Read parent EaC docs plus this project’s `AGENTS` and `GUIDE`.
2. Declare intent before editing; summarize outcomes and open questions in this
   README or a short log.
3. Capture provenance/release channels in `UPSTREAM.md` when publishing to
   jsr/npm; note GitHub API/version assumptions.
4. Keep links relative; reference dependent EaC modules and micro-frameworks
   when contracts change.
5. Record prompts/scripts used for modeling or automation in doc references.
