async function main() {
  const chunks = [];

  // đọc dữ liệu từ Claude
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  const toolArgs = JSON.parse(Buffer.concat(chunks).toString());

  // lấy đường dẫn file
  const readPath =
    toolArgs.tool_input?.file_path ||
    toolArgs.tool_input?.path ||
    "";

  // chặn file .env
  if (readPath.includes(".env")) {
    console.error("Access denied: .env files are protected");
    process.exit(2);
  }

  // cho phép nếu không phải .env
  process.exit(0);
}

main();