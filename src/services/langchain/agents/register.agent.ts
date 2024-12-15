import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { Tool } from "@langchain/core/tools";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { llmOpenAI } from "~/services/langchain/models";
import { readPromptFromFile } from "~/utils/promptUtils";

export const registerAgentTools = [];

export const registerAgentExecutor = (tools?: Tool[]) =>
  createReactAgent({
    llm: llmOpenAI(),
    tools: [...registerAgentTools, ...tools],
  });

type RegisterAgentContext = {
  user_data: any;
  context: any;
};

export const registerAgentSystemPrompt = (ctx: RegisterAgentContext) => {
  const prompt = readPromptFromFile("registerAgent.prompt.txt", ctx);

  return new SystemMessage(prompt);
};

export const executeRegisterAgent = async (
  userMessage: string,
  variables: RegisterAgentContext,
  tools?: Tool[]
) => {
  const systemPrompt = registerAgentSystemPrompt(variables);

  const response = await registerAgentExecutor(tools).invoke({
    messages: [systemPrompt, new HumanMessage(userMessage)],
  });

  return response;
};
