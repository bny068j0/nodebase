// src/inngest/functions.ts
import prisma from "../../lib/prisma";
import { inngest } from "./client";

export const processTask = inngest.createFunction(
  { id: "process-task", triggers: { event: "app/task.created" } },
  async ({ event, step }) => {
    // Fetch video
    await step.sleep("waiting for 5 seconds", 5000);

    // Transcribing 
    await step.sleep("waiting for 5 seconds", 5000);

    // Send transcription to AI 
    await step.sleep("waiting for 5 seconds", 5000);


    await step.run("create workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "New Workflow"
        }
      })
    })
  }
);