import { OpenAIStream, OpenAIStreamPayload } from "../../libs/OpenAIStream";

if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw ne