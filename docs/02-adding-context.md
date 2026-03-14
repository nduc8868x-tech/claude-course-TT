# Lesson 02 – Adding Context

## Overview

When working with Claude Code, providing context helps Claude understand your project and generate better responses. Instead of analyzing the whole codebase every time, you guide Claude with structured project information.

---

## Initialize a Project

Run the command:

```
/init
```

Claude will:

* Scan the codebase
* Understand the project structure
* Create a context file

```
CLAUDE.md
```

---

## CLAUDE.md

This file acts as the **project guide for Claude**.
It usually contains:

* Project overview
* Tech stack
* Coding conventions
* Useful commands

Example:

```
# Project Overview
Next.js application

## Stack
Next.js
TypeScript
Prisma

## Commands
npm run dev
npm run build
npm run test
```

---

## Context File Types

**Project context**

```
CLAUDE.md
```

Shared with the whole team.

**Personal context**

```
CLAUDE.local.md
```

Local preferences (not committed).

**Global context**

```
~/.claude/CLAUDE.md
```

Applies to all projects on your machine.

---

## Referencing Files

You can reference files using `@`.

Example:

```
Explain authentication system @src/auth
```

Claude will read the file before answering.

---

## Key Idea

Adding context helps Claude:

* Understand your project faster
* Follow project rules
* Generate better code and suggestions
