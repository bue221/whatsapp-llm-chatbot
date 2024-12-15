import "dotenv/config";

export default {
  port: process.env.PORT || 3008,
  enviroment: process.env.MODE || "development",
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  metaProvider: {
    name: process.env.META_PROVIDER_NAME,
    jwtToken: process.env.META_JWT_TOKEN,
    numberId: process.env.META_NUMBER_ID,
    verifyToken: process.env.META_VERIFY_TOKEN,
    version: process.env.META_VERSION,
  },
  openAI: {
    apiKey: process.env.OPENAI_API_KEY as string,
    model: process.env.OPENAI_MODEL as string,
  },
};
