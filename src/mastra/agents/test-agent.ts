import { Agent } from "@mastra/core/agent";
import { deepseek } from "@ai-sdk/deepseek";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { testTool } from "../tools/test-tool";
import { testWorkflow } from "../workflows/test-workflow";

export const testAgent = new Agent({
  name: "Test Agent",
  description: "A test agent",
  instructions: `
    You are a test agent.
    No matter what the user asks, you must:
    1. Call the "testTool" to test the tool.
    2. Then call the "testWorkflow" to test the workflow.
    Always respond after both have been called.
    If any call fails, still continue to the next.`,
  model: deepseek("deepseek-chat"),
  tools: { testTool },
  workflows: { testWorkflow },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});
