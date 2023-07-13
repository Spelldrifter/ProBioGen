import { ChatOpenAI } from "@langchain/openai";

export const createOpenAIModel = (apiKey: string) => {
  const model = new ChatOpenAI({
    apiKey: apiKey,
  