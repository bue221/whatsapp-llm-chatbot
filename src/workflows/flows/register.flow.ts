import { addKeyword, EVENTS } from "@builderbot/bot";
import { executeRegisterAgent } from "~/services/langchain/agents/register.agent";
import { registerUserTool } from "~/services/langchain/tools";

export const registerFlow = addKeyword(EVENTS.ACTION).addAction(
  async (context, { state, endFlow, gotoFlow, database }) => {
    try {
      const customTool = registerUserTool(state);

      const response = await executeRegisterAgent(
        context.body,
        {
          user_data: state.get("user_data"),
          context: {
            name: context.name,
            phone: context.from,
          },
        },
        [customTool]
      );

      const last_message =
        response.messages && response.messages.length > 0
          ? response.messages[response.messages.length - 1]
          : null;

      const textMessage =
        last_message && last_message.content
          ? last_message.content
          : "No response received";

      return endFlow(textMessage);
    } catch (error) {
      console.error("Register error: ", error);
    }
  }
);
