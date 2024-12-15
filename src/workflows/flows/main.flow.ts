import { addKeyword, EVENTS } from "@builderbot/bot";
import { intentionFlow } from "~/workflows/orchestrations/intention.orchestrator";

const mainFlow = addKeyword(EVENTS.WELCOME).addAction(
  async (context, { gotoFlow }) => {
    return gotoFlow(intentionFlow);
  }
);

export { mainFlow };
