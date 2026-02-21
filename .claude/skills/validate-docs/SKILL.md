---
name: validate-docs
description: Validate example READMEs, JSDoc, .env.example files, and server docs against Hiyve Examples Documentation Standards
allowed-tools: Read, Grep, Glob, Bash
---

# Examples Documentation Standards Validator

Validate all example documentation against the standards established across the hiyve-examples project.

## Scope

If `$ARGUMENTS` is provided, validate only those examples (e.g. `basic-example`, `full-example`). Otherwise, validate all example directories matching `*-example/`.

For each example, check:
- `README.md`
- `.env.example` (root and `server/`)
- JSDoc comments in `src/` TypeScript/TSX files (exported components, hooks, functions)
- Server source files in `server/` (if present)

## Standards

### 1. README Structure

Every example README must include these sections in order:
- **Title and description** — one-line summary of what the example demonstrates
- **Features** — bullet list of user-visible capabilities
- **Quick Start** — two options:
  - Option A: Root setup script (`./setup.sh <example-name>`)
  - Option B: Manual setup (step-by-step)
- **Configuration** — what env vars are needed and where to get credentials
- **Running the App** — exact commands to start the example
- **Architecture** (optional but recommended for complex examples with server + AI features)

### 2. Consumer Perspective Only

- Document what the example demonstrates, not internal SDK mechanics
- Reference `@hiyve/*` packages by their public API (hooks, components, props)
- Do NOT expose internal SDK implementation details (context names, internal state, storage keys)
- GOOD: "Use `useHiyveClient()` to connect to a room"
- BAD: "The `HiyveContext` internally manages a WebRTC transport"

### 3. Copy-Pasteable Examples

- All code snippets in READMEs must be runnable consumer code
- Import paths must reference `@hiyve/*` packages (not relative SDK paths)
- Examples should show the minimal code needed, not full component trees
- Code blocks must specify the language (```tsx, ```bash, etc.)

### 4. Environment Variable Documentation

#### Server `.env.example`
Every example with a `server/` directory must have `server/.env.example` containing:
- `APIKEY` — with comment explaining it's the Hiyve SDK API key
- `CLIENT_SECRET` — with comment explaining it's the Hiyve API secret
- `SERVER_REGION` — with comment noting the default (us-west-2)
- Comments for each variable explaining purpose and where to get the value

#### Client `.env.example`
If present, must:
- Use framework-appropriate prefixes (`VITE_` for Vite, `NEXT_PUBLIC_` for Next.js)
- Include comments for every variable
- Not contain actual secrets or credentials

### 5. JSDoc Standards

Exported components, hooks, and functions must have JSDoc with:
- `@fileoverview` — component name and one-line description
- `@module` — module path following `<example-name>/<component-path>` convention
- Key hooks/features section describing what SDK APIs are demonstrated
- `@see` references to related components where relevant

Props interfaces must have JSDoc for each property describing:
- What the prop controls (consumer perspective)
- Default value if applicable
- Whether it's required or optional

### 6. Consistency Across Examples

- Same `@hiyve/*` hook or component should be described the same way across examples
- Server setup instructions should follow the same pattern
- Environment variable names must match across server/.env.example files (no arbitrary renaming)
- Quick Start commands must be accurate and actually work

### 7. Documentation Checklist (per example)

- [ ] README.md exists with all required sections
- [ ] Features list describes user-visible capabilities only
- [ ] Quick Start has both Option A (setup.sh) and Option B (manual)
- [ ] Configuration section lists all required env vars
- [ ] Running commands are accurate (pnpm, not npm, for web examples)
- [ ] Server `.env.example` exists (if server/ dir exists) with all required vars and comments
- [ ] Code examples use only public `@hiyve/*` API, not internal imports
- [ ] JSDoc present on exported components with @fileoverview and @module
- [ ] Props interfaces have JSDoc on each property
- [ ] No internal SDK implementation details exposed

## Process

1. Find all examples to validate (from `$ARGUMENTS` or all `*-example/` directories)
2. For each example:
   a. Check README.md exists and validate structure/sections
   b. Check `.env.example` files (root and server/) for required vars and comments
   c. Scan `src/` for exported components/hooks and validate JSDoc
   d. Check code examples in README for correct import paths and runnability
   e. Record violations with file paths, line numbers, and offending text
3. Cross-check consistency across examples (env var names, hook descriptions)
4. Produce a report

## Output Format

For each example, report:

```
## <example-name> — [PASS | WARN | FAIL]

### Violations
- **[Standard N]** `file:line` — description of violation
  > offending text snippet

### Warnings
- Missing section / Missing JSDoc / etc.
```

Then a summary:

```
## Summary
- Examples checked: N
- Passed: N
- Warnings: N
- Failed: N
- Most common violation: ...

## Cross-Example Consistency Issues
- [List any inconsistencies between examples]
```

Be thorough but concise. Flag real violations, not style preferences.
