import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import prisma from '../../../lib/prisma';
 
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),

    users: baseProcedure.query(async () => {
      const users = await prisma.user.findMany();
      return users;
    })
});
 
// export type definition of API
export type AppRouter = typeof appRouter;