import { MCPServer } from "@mastra/mcp";
import { weatherAgent } from "../agents/weather-agent";
import { weatherTool } from "../tools/weather-tool";
import { weatherWorkflow } from "../workflows/weather-workflow";

export const weatherMCPServer = new MCPServer({
  name: "Weather Server",
  version: "1.0.0",
  description: "Weather insights and activity planning via tools, agent, and workflow.",
  tools: {
    weatherTool,
  },
  agents: {
    weatherAgent,
  },
  workflows: {
    weatherWorkflow,
  },
});
