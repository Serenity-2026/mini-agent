import OpenAI from "openai";
import dotenv from 'dotenv';
import ChatOpenAI from "./ChatOpenAI";
import MCPClient from "./MCPClient";
import Agent from "./Agent";
dotenv.config();
async function main() {
    // testChat()
    //testToolCall()
    testAgent()
}

main();

async function testChat() {
    await new ChatOpenAI(process.env.OPENAI_MODEL_NAME as string, [],"you are a teacher").chat("tell me a joke")
}

async function testToolCall() {
    const fetchMcp=new MCPClient('fetch','uvx',['mcp-server-fetch'])
    await fetchMcp.init()
    const tools=fetchMcp.getTools()
    console.log(tools)
    await fetchMcp.close()
}
async function testAgent(){
    const currentDir=process.cwd()
    const fetchMcp=new MCPClient('fetch','uvx',['mcp-server-fetch'])
    const fileMcp=new MCPClient('file','npx',["-y","@modelcontextprotocol/server-filesystem",currentDir])
    const agent=new Agent([fetchMcp,fileMcp])
    await agent.init()
    const response=await agent.invoke(`爬取https://www.zhihu.com/的内容,并且总结后保存到${currentDir}的news.md文件夹`)
    console.log(response)
}
