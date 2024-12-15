import { addKeyword, EVENTS } from "@builderbot/bot";
import { registerFlow } from "~/workflows/flows/register.flow";
import { intentionFlow } from "~/workflows/orchestrations/intention.orchestrator";

const mainFlow = addKeyword(EVENTS.WELCOME).addAction(
  async (context, { gotoFlow, state }) => {
    const user_data = state.get("user_data");

    if (!user_data) {
      console.log("User data not found");
      return gotoFlow(registerFlow);
    }

    return gotoFlow(intentionFlow);
  }
);

export { mainFlow };
