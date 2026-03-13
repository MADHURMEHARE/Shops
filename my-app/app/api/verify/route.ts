import { checkBotId } from "botid/server";

export async function GET() {
  return new Response("API working");
}

export async function POST(req: Request) {
  const { isBot } = await checkBotId();

  if (isBot) {
    return new Response("Access Denied", { status: 403 });
  }

  return new Response("Success!", { status: 200 });
} // this is the API route that will be called by the client to verify if the request is coming from a bot or not. It uses the checkBotId function from the botid/server package to check the bot ID and returns a response accordingly.