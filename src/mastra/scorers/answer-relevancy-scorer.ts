import { createAnswerRelevancyScorer } from '@mastra/evals/scorers/llm';
import { deepseek } from '@ai-sdk/deepseek';

export const answerRelevancyScorer = createAnswerRelevancyScorer({
  model: deepseek('deepseek-chat'),
});