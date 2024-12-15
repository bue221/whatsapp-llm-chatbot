import { createBot } from "@builderbot/bot";
import { JsonFileDB } from "@builderbot/database-json";
import config from "~/config";
import { provider } from "./provider";
import mainWorkflow from "./workflows/main.workflow";

export const adapterDB = new JsonFileDB({ filename: "db.json" });

const main = async () => {
  const { handleCtx, httpServer } = await createBot({
    flow: mainWorkflow,
    provider,
    database: adapterDB,
  });

  httpServer(+config.port);
};

main();
