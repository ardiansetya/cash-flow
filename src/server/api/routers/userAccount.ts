import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userAccountRouter = createTRPCRouter({
  getAllBankAccount: protectedProcedure.query(async ({ ctx }) => {
    const { db, session } = ctx;

    return await db.query.userAccount.findMany({
      where(fields, operators) {
        return operators.eq(fields.userId, session.user.id);
      },
      with: {
        transactions: true,
        savingGoals: true,
      },
    });
  }),
});
