# Lesson 04 – Controlling Context

## Overview

When working with Claude on complex tasks, conversations can become long and cluttered.
Claude Code provides several tools to control the flow of conversation and maintain useful context.

---

## Interrupting Claude

If Claude starts heading in the wrong direction, you can stop it.

Press:

Esc

This immediately interrupts Claude's response so you can redirect the task.

Example:

Instead of generating tests for multiple functions, you can stop Claude and ask it to focus on one function at a time.

---

## Fixing Repeated Errors

If Claude repeats the same mistake, you can:

1. Press Esc to stop the response
2. Add a memory using the # shortcut
3. Continue the conversation

This helps Claude remember the correct approach for future tasks.

---

## Rewinding Conversations

Sometimes a conversation becomes too long or contains irrelevant debugging discussions.

You can rewind the conversation.

Press:

Esc Esc

This allows you to jump back to an earlier message and continue from there.

---

## Context Commands

Claude Code provides commands for managing conversation history.

### /compact

Summarizes the entire conversation while preserving important information.

Use when:

* The conversation is long
* Claude has learned useful information about the project
* You want to continue related work

---

### /clear

Removes all conversation history and starts fresh.

Use when:

* Starting a completely new task
* Previous context may cause confusion

---

## Key Idea

Managing context is essential for productive AI-assisted development.

Important tools:

* Esc → interrupt Claude
* Esc Esc → rewind conversation
* /compact → summarize context
* /clear → reset context
