import { getOpenAIApiInstance } from "@/libs/OpenAiCompletaions"
import { errorHandler } from "@/libs/utils";

// export const dynamic = 'force-dynamic'

const apikey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

export async function POST(request: Request) {
  const messages = await request.json()
  if (!messages) {
    return new Response("No messages provided", { status: 400 })