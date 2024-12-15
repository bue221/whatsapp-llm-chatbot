import { addKeyword, EVENTS } from "@builderbot/bot";
import OpenAIService from "~/services/openAI";
import { readPromptFromFile } from "~/utils/promptUtils";

const prompt = readPromptFromFile("faqPrompt.txt");

export const faqFlow = addKeyword(EVENTS.ACTION).addAction(
  async (context, { state, endFlow, gotoFlow }) => {
    try {
      const AI = new OpenAIService();
      const response = await AI.chat(prompt, [
        { role: "user", content: context.body },
      ]);
      return endFlow(response);
    } catch (error) {
      console.error("FAQ error: ", error);
    }
  }
);
