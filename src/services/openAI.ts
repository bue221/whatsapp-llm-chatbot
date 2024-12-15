import OpenAI from "openai";
import config from "~/config";

class OpenAIService {
  private static apiKey: string;
  private openAI: OpenAI;

  constructor() {
    OpenAIService.apiKey = config.openAI.apiKey;
    this.openAI = new OpenAI({
      apiKey: OpenAIService.apiKey,
    });
  }

  async chat(prompt: string, messages: any[]): Promise<string> {
    try {
      const completion = await this.openAI.chat.completions.create({
        model: config.openAI.model,
        messages: [{ role: "system", content: prompt }, ...messages],
      });

      return completion.choices[0].message.content;
    } catch (err) {
      console.error("OPEN AI error: ", err);
      return "ERROR";
    }
  }
}

export default OpenAIService;
