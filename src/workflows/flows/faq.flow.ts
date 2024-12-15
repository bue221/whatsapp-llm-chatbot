import { addKeyword, EVENTS } from "@builderbot/bot";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { llmOpenAI } from "~/services/langchain/models";
import { readPromptFromFile } from "~/utils/promptUtils";

const prompt = readPromptFromFile("faqPrompt.txt");

export const faqFlow = addKeyword(EVENTS.ACTION).addAction(
  async (context, { state, endFlow, gotoFlow }) => {
    try {
      const AI = llmOpenAI({
        model: "gpt-4o-mini",
      });
      const response = await AI.invoke([
        new SystemMessage(prompt),
        new HumanMessage(context.body),
      ]);
      const textResponse = response.content as string;

      return endFlow(textResponse);
    } catch (error) {
      console.error("FAQ error: ", error);
    }
  }
);
