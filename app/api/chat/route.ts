import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { OUSSAMA_KNOWLEDGE } from '@/lib/knowledge';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const { text } = await generateText({
        model: google('gemini-3-flash-preview'),
        system: OUSSAMA_KNOWLEDGE,
        messages,
    });

    return Response.json({ role: 'assistant', content: text });
}
