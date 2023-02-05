
import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

import { createStructuredOutputChainFromZod } from "langchain/chains/openai_functions";
import { PromptTemplate } from "@langchain/core/prompts";
import { createOpenAIModel } from "@/libs/Langchain";
import { createUserMessage } from "@/libs/utils";
import { checkRateLimit } from "@/store/rateLimitStore";
import { getUserIp } from "@/libs/get-ip";

export const runtime = "edge";

const TEMPLATE = `Craft a personalized social media bio in Farsi (Persian) that captures the essence of the user, based on the specific vibe they choose: advanced, normal, or joke. This bio should weave together their personality, passions, and context into a narrative that aligns with their selected vibe.

Guidelines:

Language: The bio must be written in Farsi (Persian) to connect authentically with the target linguistic audience.
Vibe Options:
  - advanced: Create a bio with a sophisticated, professional tone, showcasing achievements and expertise.
  - normal: Ensure the bio is relatable and down-to-earth, highlighting everyday interests and personal traits.
  - joke: Infuse the bio with humor, making it light-hearted and entertaining while still capturing the user's essence.
Length: Maintain a concise length of 150-200 characters to ensure the bio is both impactful and suitable for social media.
Content: Emphasize personality traits, passions, and include relevant keywords that resonate with their vibe choice and interests.
Creativity: Add a unique creative flair to make the bio captivating and reflective of the chosen vibe, ensuring it stands out.

