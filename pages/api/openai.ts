import { OpenAIStream, OpenAIStreamPayload } from "../../libs/OpenAIStream";

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("Missing env var from OpenAI");
}

// export const config = {
//   runtime: "edge",
// };

const handler = async (req: Request): Promise<a