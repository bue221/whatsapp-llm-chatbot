import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";

export const llmOpenAI = (options?: ChatOpenAICallOptions) =>
  new ChatOpenAI(options);
