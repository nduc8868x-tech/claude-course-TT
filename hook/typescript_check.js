const { execSync } = require("child_process");

try {
  execSync("npx tsc --noEmit", { stdio: "pipe" });
  process.exit(0);
} catch (error) {
  console.error("TypeScript errors detected:");
  console.error(error.stdout.toString());
  process.exit(2);
}