import { createProvider } from "@builderbot/bot";
import { BaileysProvider } from "@builderbot/provider-baileys";
import { MetaProvider } from "@builderbot/provider-meta";
import config from "~/config";

export const providerBaileys = createProvider(BaileysProvider);

export const providerMeta = createProvider(MetaProvider, {
  jwtToken: config.metaProvider.jwtToken,
  numberId: config.metaProvider.numberId,
  verifyToken: config.metaProvider.verifyToken,
  version: config.metaProvider.version,
});

export const provider =
  config.enviroment === "production" ? providerMeta : providerBaileys;
