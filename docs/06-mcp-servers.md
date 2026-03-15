# Lesson 06 – MCP Servers

## Overview

Claude Code can be extended using MCP (Model Context Protocol) servers.
These servers give Claude access to external tools and services.

With MCP servers, Claude can interact with browsers, databases, APIs, and other development tools.

---

## What is MCP?

MCP (Model Context Protocol) allows Claude to connect with tools running locally or remotely.

This enables Claude to:

* Control browsers
* Access databases
* Test APIs
* Automate development workflows

---

## Playwright MCP Server

One popular MCP server is **Playwright**.
It allows Claude to control a web browser.

Claude can:

* Open a browser
* Navigate to web pages
* Inspect UI
* Interact with applications

---

## Installing Playwright MCP

Run the following command in your terminal:

claude mcp add playwright npx @playwright/mcp@latest

This command:

* Registers the MCP server
* Starts the server locally

---

## Managing Permissions

Claude may ask for permission when using MCP tools.

You can pre-approve tools by editing:

.claude/settings.local.json

Example configuration:

{
"permissions": {
"allow": ["mcp__playwright"],
"deny": []
}
}

This allows Claude to use Playwright tools without repeated prompts.

---

## Practical Example

Claude can:

1. Open localhost:3000
2. Generate a component
3. Analyze the UI output
4. Improve prompts for better component design

By seeing the actual UI, Claude can produce better styling and layout decisions.

---

## Key Idea

MCP servers transform Claude from a simple code assistant into a powerful development partner capable of interacting with real development tools.
