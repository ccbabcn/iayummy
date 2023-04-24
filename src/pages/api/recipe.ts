// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type GptMessage = {
  message: {
    content: string;
  };
};

type Gpt = {
  choices: GptMessage[];
};

interface RequestQuery extends NextApiRequest {
  query: {
    ingredients: string;
  };
}

const template = {
  recipe: {
    name: "",
    level: "",
    time: 0,
    rations: 0,
    ingredients: [
      {
        name: "",
        quantity: "0",
      },
    ],
    steps: ["", ""],
  },
};
const recipeRequest = (ingredients: string) => {
  const question = `Con este objeto como template ${JSON.stringify(template)}. 
    Dame una receta con estos ingredientes: ${ingredients}. 
    Simula la respuesta en formato json como una base de datos. 
    Sin introducción, solo el objeto JSON, sin spacios ni saltos de linea.`;
  return question;
};

async function get(ingredients: string): Promise<Gpt> {
  return new Promise(async (resolve) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: recipeRequest(ingredients) }],
      }),
    });
    const resp = await response.json();
    console.log({ response: JSON.stringify(resp) });
    resolve(JSON.parse(resp?.choices[0]?.message?.content || {}));
  });
}

export default async function handler(
  req: RequestQuery,
  res: NextApiResponse<Gpt>
) {
  const data = await get(req.query?.ingredients);
  res.status(200).json(data);
}
