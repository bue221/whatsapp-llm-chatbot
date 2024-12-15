import fs from "fs";
import path from "path";

const readPromptFromFile = (
  fileName: string,
  variables?: Record<string, string>
) => {
  try {
    const pathPrompt = path.join(process.cwd(), "assets/prompts", fileName);
    let promptText = fs.readFileSync(pathPrompt, "utf-8");

    promptText = promptText.replace(/{([^}]+)}/g, (match, key) => {
      return key in variables
        ? variables[key]
          ? JSON.stringify(variables[key], null, 2)
          : "Sin información"
        : match;
    });

    return promptText;
  } catch (error) {
    console.error("Error reading prompt file: ", error);
    return "";
  }
};

export { readPromptFromFile };
