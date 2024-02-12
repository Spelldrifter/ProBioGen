import { OpenAIStream, OpenAIStreamPayload } from "../../libs/OpenAIStream";

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

// export const config = {
//   runtime: "edge",
// };

const handler = async (req: Request): Promise<any> => {
  const { prompt } = (await req.body) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: