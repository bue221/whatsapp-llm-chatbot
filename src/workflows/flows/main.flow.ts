import { addKeyword, EVENTS } from "@builderbot/bot";
import { intentionFlow } from "~/templates/flows/intention.flow";

const mainFlow = addKeyword(EVENTS.WELCOME).addAction(
  async (context, { gotoFlow }) => {
    return gotoFlow(intentionFlow);
  }
);

export { mainFlow };
