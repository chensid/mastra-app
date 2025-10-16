import { createToolCallAccuracyScorerLLM } from "@mastra/evals/scorers/llm";
import { deepseek } from "@ai-sdk/deepseek";

// Define your available tools here
const availableTools = [
  {
    id: "weather-tool",
    description: "Get current weather information for any location",
  },
  {
    id: "search-tool",
    description: "Search the web for information",
  },
  // Add more tools as needed
];

export const toolCallAccuracyScorer = createToolCallAccuracyScorerLLM({
  model: deepseek("deepseek-chat"),
  availableTools,
});
