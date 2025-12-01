# AGENT Instructions

> Canonical guidance for ANY automated or AI "agent" contributing to this
> repository.
>
> Specific supplemental instruction sets exist for:
>
> - Gemini: `GEMINI.md`
> - GitHub Copilot: `.github/copilot-instructions.md`
> - Claude: `CLAUDE.md`
>
> These specific documents EXTEND (never replace) the general rules below.
> If there is a conflict:
>
> 1. Security / License policies (repo global)
> 2. This `AGENT.md`
> 3. Tool‑specific file (Gemini / Copilot / Claude)
> 4. Inline comments / TODOs

---

## 1. Purpose

This repo is an intentionally "DevOps-heavy" educational sampler:
"All the bells and whistles, without the Christmas tree." Agents must
preserve its demonstrative value, clarity and repeatability. Your output
should reduce friction, not obscure complexity.

## 2. Core Principles

| Principle              | Meaning for Agents                                        |
| ---------------------- | --------------------------------------------------------- |
| DevOps First           | Prefer automation and reproducibility over feature bloat. |
| Explicit over Implicit | When unsure, document intent (README or `docs/`).         |
| Minimal Side Effects   | No hidden behaviors; surface config & script impact.      |
| Multi-Tool Cohesion    | Keep npm / pip / bower / Docker / Helm aligned.           |
| Security & Compliance  | Never add plaintext secrets; trust existing scanners.     |
| Educational Value      | Clarity + commentary over clever opacity.                 |

## 3. Repository Domains (High-Level Map)

- Build: Grunt → `build/`, Parcel → `dist/`
- Packaging: `npm`, `bower` (git clone usage), `pip`, `pipx`
- Testing: Jest, Frisby, Selenium, Playwright, Testem, BDD (`features/`)
- Quality & Security: MegaLinter, semantic-release, Trivy, Checkov, KICS,
  Gitleaks
- Deployment: Docker, Compose, Helm (`helm/`)

## 4. Agent Activity Categories

| Category                    | Allowed?    | Notes                                |
| --------------------------- | ----------- | ------------------------------------ |
| Documentation enhancements  | YES         | Cross-links, indexes, tables.        |
| Add tests (uncovered logic) | YES         | Small: happy + 1 edge case.          |
| Refactors (non-behavioral)  | YES (small) | Keep build + verify green.           |
| New dependencies            | CAUTION     | Justify; prefer devDependency.       |
| Removing tools              | RARE        | Only if superseded & value retained. |
| License / legal edits       | LIMITED     | Formatting / accuracy only.          |
| Experimental features       | ISOLATE     | Use clearly named folder.            |

## 5. Standard Workflow (Macro Loop)

1. Read relevant instruction file(s) and impacted config.
2. Draft a tiny change plan (bullets). Multi-file: add summary header.
3. Implement smallest vertical slice.
4. Run quality gates (see §7).
5. If scripts changed, update `README.md`.
   - Do NOT edit `CHANGELOG.md`; semantic-release auto-generates it on merge
     to `main`.
6. Avoid new broad version wildcards unless deliberate.
7. Commit with semantic-release format: `type(scope): summary`.

## 6. Semantic Commit Guidelines (Abbrev)

| Type     | Example Scope  | When to Use                         |
| -------- | -------------- | ----------------------------------- |
| feat     | build          | New script or capability            |
| fix      | lint           | Resolve failure / reliability issue |
| docs     | readme         | Markdown / comments only            |
| chore    | deps           | Version bumps / meta changes        |
| refactor | app            | Behavior preserved restructuring    |
| test     | playwright     | New or improved tests               |
| ci       | github-actions | Workflow edits                      |
| perf     | build          | Performance improvement             |
| security | docker         | Hardening adjustments               |

Add BREAKING CHANGE footer only if public contract changes.

## 7. Quality Gates

| Gate                 | Command                     | Expectation                 |
| -------------------- | --------------------------- | --------------------------- |
| Style & Lint (fast)  | `npm run lint`              | No errors (warns explained) |
| Auto-Fix (optional)  | `npm run format`            | Formatting applied          |
| Unit Tests           | `npm test`                  | All pass                    |
| Full Verify          | `npm run verify`            | Build + dist + tests pass   |
| Deep Lint / Security | `npm run mega-linter`       | No new critical issues      |
| Container Scan (opt) | `npm run docker:this:build` | No new high vulns           |

Do not skip `verify` when touching build, test or deployment surfaces.

## 8. Editing & File Conventions

- New files: kebab-case; follow existing extensions.
- Bash utilities: `_scripts/` with `.ba.sh` extension.
- Config: co-locate with related tool (linter at root, Helm in `helm/`).
- Prefer small commits over a giant reformat.
- Never manually edit generated `build/` or `dist/` outputs.

## 9. Testing Guidance

| Layer            | Location                     | Trigger                        |
| ---------------- | ---------------------------- | ------------------------------ |
| Unit             | `__tests__/*.unit.spec.js`   | New logic branch               |
| REST             | `__tests__/*.rest.spec.js`   | API integration changes        |
| Browser (Testem) | `testem.yml` (multi-browser) | Config or multi-engine need    |
| Playwright       | `__tests__/*.pw.spec.js`     | End-to-end flow                |
| Selenium         | `__tests__/*.se.spec.js`     | Cross-driver / legacy concerns |
| BDD              | `features/`                  | Behavior worth describing      |

Reuse helpers and keep fixtures minimal.

## 10. Documentation Rules

| Action          | Also Update                                |
| --------------- | ------------------------------------------ |
| Add npm script  | `README.md` scripts section                |
| Add linter/tool | Lint tables + rationale                    |
| Add env var     | `.env.*.local.example` + README            |
| Add Helm value  | `helm/values.yaml` + README if user-facing |

Favor concise tables and cross-links.

## 11. Security & Compliance Checklist

- [ ] No secrets committed
- [ ] Env vars for credentials
- [ ] Pinned versions where reproducibility matters
- [ ] No unvetted remote curl|bash usage
- [ ] External URLs validated (HTTPS + reachable)

## 12. Dependency Management

| Ecosystem | Primary                 | Lock / Freeze             | Notes                       |
| --------- | ----------------------- | ------------------------- | --------------------------- |
| npm       | `package.json`          | `package-lock.json`       | Document scripts            |
| bower     | `bower.json`            | (none)                    | Git clone only (deprecated) |
| pip       | `requirements.txt`      | `requirements.frozen.txt` | Freeze post-upgrade         |
| pipx      | `requirements.pipx.txt` | (isolated)                | Executable tools            |

Freeze after verifying no regressions.

## 13. Deployment Surfaces

| Surface      | Directory            | Caution                     |
| ------------ | -------------------- | --------------------------- |
| Docker Image | `Dockerfile*`        | Keep stages small           |
| Compose      | `docker-compose.yml` | Consistent naming           |
| Helm         | `helm/`              | Respect templating & values |

If runtime changes (ports/base image), update docs + Helm.

## 14. Observability & Artifacts

- Tests: `test/results/`
- Lint: `megalinter-reports/`
- Licenses: `build/vendor/`

## 15. When NOT to Act

Abstain when:

- Ambiguity risks structural change (seek clarity).
- Removing a tooling layer reduces educational breadth.
- Large stylistic refactor has no functional or clarity gain.

## 16. Escalation Pattern

1. Propose brief plan (bullets) for risky / multi-step work.
2. Get approval for deleting / renaming top-level dirs or CI changes.
3. Proceed incrementally; verify after each milestone.

## 17. Tool-Specific Addenda

Read these after this file:

- Claude: `CLAUDE.md`
- Gemini: `GEMINI.md`
- GitHub Copilot: `.github/copilot-instructions.md`

## 18. Quick Start Checklist

```text
[ ] Classify request (docs / code / infra / testing / security)
[ ] Locate relevant files
[ ] Draft minimal plan
[ ] Apply edits (semantic commit)
[ ] Run: lint → test → verify
[ ] Update docs & examples
[ ] Re-run verify if build surfaces touched
[ ] Summarize changes & validation
```

## 19. Agent Response Style

- Be concise and context-aware.
- Report deltas only (avoid duplication).
- Use bullets for multi-step progress.
- Map each action to an explicit user ask.

## 20. Glossary

| Term       | Meaning                                 |
| ---------- | --------------------------------------- |
| Verify     | Build + tests + dist (`npm run verify`) |
| Dist       | Parcel production bundle (`dist/`)      |
| Build      | Grunt output (`build/`)                 |
| Freeze     | Generate `requirements.frozen.txt`      |
| MegaLinter | Aggregated lint & security suite        |

---

### Final Note

Agents exist to amplify educational clarity. Prefer transparency and
incremental change aligned with the multi-tool story this repository
teaches.

> New tool-specific agent? Add an instruction file mirroring the existing
> pattern and cross-link it under §17.
