# Lesson 08 – Introducing Hooks

## Overview

Hooks allow you to run commands **before or after Claude executes a tool**.
They are useful for automating workflows such as formatting code, running tests, or restricting access to files.

---

## How Hooks Work

When you interact with Claude Code, the flow normally looks like this:

1. You send a request to Claude.
2. Claude decides which tool to use.
3. Claude Code executes the tool.
4. The result is returned to you.

Hooks can insert custom logic **before or after the tool execution**.

---

## Types of Hooks

Claude Code supports two main types of hooks.

### PreToolUse

Runs **before** a tool is executed.

Example:

```json
"PreToolUse": [
  {
    "matcher": "Read",
    "hooks": [
      {
        "type": "command",
        "command": "node /home/hooks/read_hook.ts"
      }
    ]
  }
]
```

PreToolUse hooks can:

* Allow the operation
* Block the tool call
* Return an error message

---

### PostToolUse

Runs **after** the tool has executed.

Example:

```json
"PostToolUse": [
  {
    "matcher": "Write|Edit|MultiEdit",
    "hooks": [
      {
        "type": "command",
        "command": "node /home/hooks/edit_hook.ts"
      }
    ]
  }
]
```

PostToolUse hooks cannot block the operation, but they can run follow-up actions.

Examples:

* Format edited files
* Run linters
* Log tool usage

---

## Hook Configuration

Hooks are defined in Claude settings files.

Global settings:

```
~/.claude/settings.json
```

Project settings:

```
.claude/settings.json
```

Local project settings:

```
.claude/settings.local.json
```

Hooks can also be created using the `/hooks` command inside Claude Code.

---

## Practical Applications

Common uses of hooks include:

* **Code formatting** – automatically format files after edits
* **Testing** – run tests when files change
* **Access control** – restrict Claude from editing specific files
* **Code quality** – run linters or type checks
* **Logging** – track file access and modifications
* **Validation** – enforce naming or coding conventions

---

## Key Idea

Hooks allow you to extend Claude Code by integrating your own tools and automation into the development workflow.

* **PreToolUse** gives you control before a tool runs.
* **PostToolUse** allows you to enhance actions after they complete.
