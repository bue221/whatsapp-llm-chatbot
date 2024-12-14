import { createFlow } from "@builderbot/bot";
// FLOWS
import { faqFlow } from "~/workflows/flows/faq.flow";
import { intentionFlow } from "~/workflows/orchestrations/intention.orchestrator";
import { mainFlow } from "./flows/main.flow";

export default createFlow([mainFlow, faqFlow, intentionFlow]);
