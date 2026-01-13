import OpenAI from "openai";

export const ai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateChangelog(text: string) {
  const response = await ai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a professional changelog generator." },
      { role: "user", content: `Rewrite this as a clean changelog entry: ${text}` }
    ]
  });

  return response.choices[0].message.content;
}
