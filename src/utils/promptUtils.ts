import fs from "fs";
import path from "path";

const readPromptFromFile = (fileName: string) => {
  const pathPrompt = path.join(process.cwd(), "assets/prompts", fileName);
  return fs.readFileSync(pathPrompt, "utf-8");
};

export { readPromptFromFile };
