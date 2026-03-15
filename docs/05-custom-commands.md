# Lesson 05 – Custom Commands

## Overview

Claude Code allows you to create custom commands to automate repetitive tasks.
These commands help standardize workflows and save time during development.

---

## Creating Custom Commands

Custom commands are stored inside the project.

Folder structure:

.claude/commands/

Example:

.claude/commands/audit.md

The filename becomes the command name.

audit.md → /audit

After creating a command, restart Claude Code so it can recognize the new command.

---

## Example: Audit Command

An audit command can check project dependencies.

Example workflow:

1. Run npm audit
2. Run npm audit fix
3. Run tests to ensure nothing breaks

This turns multiple steps into a single command.

---

## Commands with Arguments

Custom commands can accept arguments using:

$ARGUMENTS

Example command file:

write_tests.md

Content example:

Write comprehensive tests for: $ARGUMENTS

Testing rules:

* Use Vitest
* Use React Testing Library
* Store tests in **tests** folder

Usage example:

/write_tests use-auth.ts

Claude will generate tests for the specified file.

---

## Benefits

Custom commands provide:

Automation – convert workflows into one command
Consistency – enforce project conventions
Context – guide Claude with project rules
Flexibility – reuse commands with different arguments

---

## Key Idea

Custom commands allow developers to automate common tasks and maintain consistent workflows when using Claude Code.
