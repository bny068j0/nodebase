// src/inngest/functions.ts
import { google } from "@ai-sdk/google";
import { inngest } from "./client";
import { generateText } from "ai";

export const processTask = inngest.createFunction(
  { id: "process-task", triggers: { event: "app/task.created", } },
  async ({ event, step }) => {
    // Fetch video
    await step.sleep("process 1", 5000);

    // Transcribing 
    await step.sleep("process 2", 5000);

    // Send transcription to AI 
    await step.sleep("process 3", 5000);


    await step.run("create workflow",  async () => {
       const { text } = await generateText({
        model: google('gemini-2.5-flash'),
        prompt: 'Write a vegetarian lasagna recipe for 4 people.',
      });

      return { text };
    })
  }
);