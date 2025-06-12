import { addKeyword, createBot, createFlow, EVENTS, MemoryDB } from '@builderbot/bot';
import fetch from 'node-fetch';
import config from "~/config";
import { provider } from "./provider";
import { createMessageQueue, QueueConfig } from './utils/fast_entries';



const queueConfig: QueueConfig = { gapMilliseconds: 5000 };
const enqueueMessage = createMessageQueue(queueConfig);
const BASE_URL = "http://127.0.0.1:8000";


const welcomeFlow = addKeyword<any, MemoryDB>(EVENTS.WELCOME)
  .addAction(async (ctx, { flowDynamic }) => {
    try {
      enqueueMessage(ctx, async (body) => {
        try {
          console.log('Intentando conectar a:', BASE_URL + '/chat');
          console.log('Datos enviados:', {
            phone_number: "+" + ctx.from,
            message: body
          });
          
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              message: body,
              // original_message: ctx,
              phone_number: "+" + ctx.from,
            })
          };

          console.log('Enviando petición:', requestOptions);
          
          const response = await fetch(BASE_URL + '/chat', requestOptions);
          console.log('Respuesta recibida:', response.status, response.statusText);

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Datos recibidos:', data);
          await flowDynamic(data.response);
        } catch (error) {
          console.error('Error detallado:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            phone: ctx.from,
            message_2: body
          });
          await flowDynamic('Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta nuevamente más tarde.');
        }
      });
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });


const main = async () => {
  const adapterDB = new MemoryDB()
  const adapterFlow = createFlow([welcomeFlow])
  const { httpServer } = await createBot({
    flow: adapterFlow,
    provider,
    database: adapterDB,
  });

  httpServer(+config.port);
};

main();





