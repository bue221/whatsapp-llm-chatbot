import { createBot } from "@builderbot/bot";
import { JsonFileDB } from "@builderbot/database-json";
import { provider } from "./provider";
import mainWorkflow from "./workflows/main.workflow";

export type IDatabase = typeof JsonFileDB;
export const adapterDB = new JsonFileDB({ filename: "db.json" });

const PORT = process.env.PORT ?? 3008;

const main = async () => {
  const { handleCtx, httpServer } = await createBot({
    flow: mainWorkflow,
    provider,
    database: adapterDB,
  });

  httpServer(+PORT);
};

main();
