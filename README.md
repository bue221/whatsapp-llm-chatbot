# Proyecto Whatsapp LLM BOT

Este proyecto es un bot básico para WhatsApp que integra OpenAI para generar una mejor experiencia de usuario.

## Descripción

El bot está construido utilizando TypeScript y la librería Baileys para interactuar con la API de WhatsApp. Además, se integra con OpenAI para proporcionar respuestas inteligentes y mejorar la interacción con los usuarios.

## Características

- Envío y recepción de mensajes de WhatsApp.
- Integración con OpenAI para generar respuestas automáticas.
- Uso de orquestadores y flujos personalizados
- Almacenamiento de datos en un archivo JSON utilizando `JsonFileDB`.

## Requisitos

- Node.js 20.0
- Una cuenta de OpenAI con una clave API válida.
- Una cuenta de WhatsApp.

## Instalación

NOTA: DEBES DE USAR pnpm y Node en su version 20

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/base-ts-baileys-memory.git
```

2. Navega al directorio del proyecto:

```bash
cd base-ts-baileys-memory
```

3. Instala las dependencias:

```bash
pnpm install
```

4. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave API de OpenAI:

```dotenv
OPENAI_API_KEY=tu-clave-api
OPENAI_MODEL="gpt-4o-mini"
PORT=3008
```

## Uso

Para iniciar el bot, ejecuta el siguiente comando:

```bash
pnpm dev
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
