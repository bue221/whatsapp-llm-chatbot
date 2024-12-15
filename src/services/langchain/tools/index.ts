import { BotStateStandAlone } from "@builderbot/bot/dist/types";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const registerUserTool = (state: BotStateStandAlone) =>
  tool(
    ({
      email,
      lastname,
      name,
      phoneCode,
      phoneNumber,
    }: {
      name: string;
      lastname: string;
      phoneNumber: string;
      phoneCode: string;
      email: string;
    }): {
      status: boolean;
      data?: any;
      message: string;
    } => {
      /**
       * Register user in crm minimum  values
       */

      // Here you can add your own logic to register the user in your CRM
      state.update({
        user_data: {
          name,
          lastname,
          phoneNumber,
          phoneCode,
          email,
        },
      });

      return {
        status: true,
        data: {
          name,
          lastname,
          phoneNumber,
          phoneCode,
          email,
        },
        message: "User registered successfully",
      };
    },
    {
      name: "registerUser",
      description: "Register user in crm",
      schema: z.object({
        name: z.string(),
        lastname: z.string(),
        phoneNumber: z.string(),
        phoneCode: z.string(),
        email: z.string(),
      }),
    }
  );
