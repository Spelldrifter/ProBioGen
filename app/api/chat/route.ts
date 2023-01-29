import { getOpenAIApiInstance } from "@/libs/OpenAiCompletaions"
import { errorHandler } from "@/libs/utils";

// export const dynamic = 'force-dynamic'

const apikey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

export async function POST(request: Request) {
  c