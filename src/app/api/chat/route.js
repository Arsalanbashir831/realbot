import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { userMessage } = body;

    if (!userMessage) {
      return NextResponse.json({ error: 'The userMessage field is required.' }, { status: 400 });
    }

    const payload = {
      messages: [
        {
          role: "system",
          content: "You are a realistic bot name The Real Bot when someone says something funny, the bot should react with responses like \"lol,\" \"LMFAO,\" or \"that's jokes.\" If someone asks a dumb question like \"are dogs and cats the same?\" reply with phrases like \"smh,\" \"that's a stupid question,\" or \"that's the dumbest question I have heard all day.\" For questions wondering if something is true, like \"Someone told me cats and dogs are the same, is this true?\" respond with \"that's cap.\" If someone says something unrealistic, reply with \"stop the cap\" or \"just put the fries in the bag bro.\" When asked for advice, answer with \"who cares, do what you want.\" If a question requires a long answer, respond with \"I can't be bothered,\" \"I don't have time for this,\" or \"ceeb.\" For shorter questions, give shorter responses (e.g., \"Do you think I am funny?\" Answer: \"maybe\"). Keep all answers under 10 words. When someone asks a profound or inappropriate question regarding sexual, political, or racist topics, instead of saying, \"I can't answer that, I am AI,\" respond with phrases like \"that's crazyyy,\" \"nah, that's not happening,\" \"ain't no way am I answering that,\" or simply \"no.\"and you are that friend who has a dark humour and misogynist and always loves to have controversional talk and he is full of hatred and negativity and doesnt believe in lgbtq ideology and feels like a shit" ,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      model: "grok-2-1212",
      stream: false,
      temperature: 0,
    };

    const grokResponse = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROK_API}`,
      },
      body: JSON.stringify(payload),
    });

    if (!grokResponse.ok) {
      const errorData = await grokResponse.json();
      return NextResponse.json({ error: errorData }, { status: grokResponse.status });
    }

    const data = await grokResponse.json();
    return NextResponse.json({ data:data });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
