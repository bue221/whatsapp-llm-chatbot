import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";

export const llmOpenAI = (
  options?: ChatOpenAICallOptions & { model: string }
) => new ChatOpenAI(options);
