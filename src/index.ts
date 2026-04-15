import OpenAI from "openai";
import dotenv from 'dotenv';
import ChatOpenAI from "./ChatOpenAI";
dotenv.config();
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    await new ChatOpenAI("deepseek-chat", "you are a teacher").chat("tell me a joke")
}

main();

