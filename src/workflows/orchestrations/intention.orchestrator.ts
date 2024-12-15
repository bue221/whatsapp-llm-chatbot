import { createFlowRouting } from "@builderbot-plugins/langchain";
import { EVENTS } from "@builderbot/bot";
import config from "~/config";
import { readPromptFromFile } from "~/utils/promptUtils";
import { faqFlow } from "~/workflows/flows/faq.flow";

const promt = readPromptFromFile("detection.prompt.txt");

export const intentionFlow = createFlowRouting
  .setKeyword(EVENTS.ACTION)
  .setIntentions({
    intentions: ["handoff", "faq", "NO_DETECTION"],
    description: promt,
  })
  .setAIModel({
    modelName: "openai",
    args: {
      modelName: config.openAI.model,
      apikey: config.openAI.apiKey,
    },
  })
  .create({
    afterEnd(flow) {
      return flow.addAction(async (context, { state, endFlow, gotoFlow }) => {
        try {
          const intention = await state.get("intention");

          console.log("User intention: ", intention);

          if (intention === "handoff") {
            return endFlow(
              "Gracias por comunicarte con nosotros, un agente te atenderá en breve."
            );
          }
          if (intention === "faq") {
            return gotoFlow(faqFlow);
          }
          return endFlow("Tu mensaje esta fuera de contexto");
        } catch (error) {
          console.error("INTENTION orcheschator error: ", error);
          context.send("ERROR");
        }
      });
    },
  });
