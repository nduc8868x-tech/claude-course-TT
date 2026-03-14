# Lesson 07 – GitHub Integration

## Overview

Claude Code provides an official GitHub integration that allows Claude to run inside GitHub Actions.
This enables Claude to review code, respond to issues, and assist with pull requests automatically.

---

## Installing the GitHub App

Run the command:

```
/install-github-app
```

Claude will guide you through:

* Installing the Claude GitHub App
* Adding your API key
* Creating a pull request with workflow files

After merging the pull request, GitHub Actions will be added to your repository.

---

## Default Workflows

Two workflows are created by default.

### Mention Workflow

You can mention Claude in issues or pull requests:

```
@claude
```

Claude will:

* Analyze the request
* Create a task plan
* Execute the task
* Respond in the issue or pull request

---

### Pull Request Review

Whenever a pull request is created, Claude automatically:

* Reviews the code changes
* Analyzes potential issues
* Posts feedback in the pull request

---

## Customizing Workflows

After setup, you can modify the workflow files located in:

```
.github/workflows
```

You can add project setup steps such as:

```
npm install
npm run dev
```

You can also provide custom instructions to help Claude understand your environment.

---

## MCP Integration

MCP servers can also be used in GitHub workflows.

Example: Playwright MCP for browser automation.

This allows Claude to test UI and interact with your application directly.

---

## Key Idea

GitHub integration turns Claude into an automated development assistant that can review code, respond to issues, and assist your team directly within GitHub.
