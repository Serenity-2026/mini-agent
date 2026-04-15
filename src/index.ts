import OpenAI from "openai";
import dotenv from 'dotenv';
import ChatOpenAI from "./ChatOpenAI";
import MCPClient from "./MCPClient";
dotenv.config();
const openai = new OpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
    //testChat()
    testToolCall()
}

main();

async function testChat() {
    await new ChatOpenAI("deepseek-chat", "you are a teacher").chat("tell me a joke")
}

async function testToolCall() {
    const fetchMcp=new MCPClient('fetch','uvx',['mcp-server-fetch'])
    await fetchMcp.init()
    const tools=fetchMcp.getTools()
    await fetchMcp.close()
}
