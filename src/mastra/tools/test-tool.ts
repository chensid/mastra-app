import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const testTool = createTool({
  id: "test-tool",
  description: "A test tool",
  inputSchema: z.object({
    name: z.string().describe("The name of the test"),
  }),
  outputSchema: z.object({
    message: z.string().describe("The message from the test tool"),
  }),
  execute: async ({ context }) => {
    return {
      message: `Hello, ${context.name}! This is a test tool.`,
    };
  },
});
