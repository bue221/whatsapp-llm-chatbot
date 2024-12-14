import "dotenv/config";

export default {
  port: process.env.PORT || 3008,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  provider: {
    name: process.env.PROVIDER_NAME,
  },
  openAI: {
    apiKey: process.env.OPENAI_API_KEY as string,
    model: process.env.OPENAI_MODEL as string,
  },
};
