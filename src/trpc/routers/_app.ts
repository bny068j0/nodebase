import { baseProcedure, createTRPCRouter } from '../init';
import prisma from '../../../lib/prisma';
import { inngest } from '@/inngest/client';
 
export const appRouter = createTRPCRouter({
  getWorkflows: baseProcedure.query(async () => {
    const workflows = await prisma.workflow.findMany();
    return workflows;
  }),

  createWorkflow: baseProcedure.mutation(async () => {
    await inngest.send({
      name: "app/task.created",
      data: {
        name: "New Workflow"
      }
    })

    return {
      message: "Workflow creation initiated"
    }
  })
    
});
 
// export type definition of API
export type AppRouter = typeof appRouter;