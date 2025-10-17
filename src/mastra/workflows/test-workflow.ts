import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";

const testFirstStep = createStep({
  id: "test-first-step",
  description: "A step that tests the test first step",
  inputSchema: z.object({
    name: z.string().describe("The name of the person to test the first step"),
  }),
  outputSchema: z.object({
    message: z.string().describe("The message from the test first step"),
  }),
  execute: async ({ inputData }) => {
    return {
      message: `Hello, ${inputData.name}! This is a test first step.`,
    };
  },
});

const testSecondStep = createStep({
  id: "test-second-step",
  description: "A step that tests the test second step",
  inputSchema: z.object({
    message: z.string().describe("The message from the test first step"),
  }),
  outputSchema: z.object({
    message: z.string().describe("The message from the test second step"),
  }),
  execute: async ({ inputData }) => {
    return {
      message: `Hello, ${inputData.message}! This is a test second step.`,
    };
  },
});

const testWorkflow = createWorkflow({
  id: "test-workflow",
  description: "A workflow that tests the test tool",
  inputSchema: z.object({
    name: z.string().describe("The name of the person to test the tool"),
  }),
  outputSchema: z.object({
    message: z.string().describe("The message from the test tool"),
  }),
})
  .then(testFirstStep)
  .then(testSecondStep);

testWorkflow.commit();

export { testWorkflow };
