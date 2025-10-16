import { createToolCallAccuracyScorerLLM } from "@mastra/evals/scorers/llm";
import { deepseek } from "@ai-sdk/deepseek";

// Define your available tools here
const availableTools = [
  {
    id: "get-weather",
    description: "Get current weather information for any location",
  },
];

export const toolCallAccuracyScorer = createToolCallAccuracyScorerLLM({
  model: deepseek("deepseek-chat"),
  availableTools,
});
