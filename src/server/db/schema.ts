import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  numeric,
  pgTable,
  pgTableCreator,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `pg-drizzle_${name}`);

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  university: text("university"),
  major: text("major"),
  monthlyAllowance: integer("monthly_allowance").default(0),
  currency: text("currency").notNull().default("IDR"),
  locale: text("locale").notNull().default("id-ID"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const budgets = pgTable("budgets", {
  id: uuid("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  name: text("name").notNull(),
  periodYear: integer("period_year").notNull(),
  periodMonth: integer("period_month").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});


export const category = pgTable("category", {
  id: uuid("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  name: text("name").notNull(),
  type: text("type").notNull(), // INCOME | EXPENSE
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});


export const userAccount = pgTable("user_account", {
  id: uuid("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  name: text("name").notNull(),
  type: text("type").notNull(), // CASH | BANK | E_WALLET
  initialBalance: numeric("initial_balance").default("0"),
  currentBalance: numeric("current_balance").default("0"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});


export const savingGoals = pgTable("saving_goals", {
  id: uuid("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  userAccountId: uuid("account_user_id")
    .notNull()
    .references(() => userAccount.id),
  name: text("name").notNull(),
  targetAmount: numeric("target_amount").notNull(),
  currentAmount: numeric("current_amount").default("0"),
  deadline: timestamp("deadline"),
  note: text("note"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});


export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  userAccountId: uuid("account_user_id")
    .notNull()
    .references(() => userAccount.id),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => category.id),
  savingGoalsId: uuid("saving_goals_id").references(() => savingGoals.id), // ✅ optional
  type: text("type").notNull(), // INCOME | EXPENSE
  amount: numeric("amount").notNull(),
  transactionDate: timestamp("transaction_date").notNull(),
  note: text("note"),
  attachmentUrl: text("attachment_url"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});


export const budgetItems = pgTable("budget_items", {
  id: uuid("id").primaryKey(),
  budgetId: uuid("budget_id")
    .notNull()
    .references(() => budgets.id),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => category.id),
  plannedAmount: numeric("planned_amount").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => new Date())
    .notNull(),
});


export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
});

export const userRelations = relations(user, ({ many }) => ({
  accounts: many(userAccount),
  categories: many(category),
  budgets: many(budgets),
  transactions: many(transactions),
  savingGoals: many(savingGoals),

  // better auth (AMAN)
  account: many(account),
  session: many(session),
}));


export const userAccountRelations = relations(userAccount, ({ one, many }) => ({
  user: one(user, { fields: [userAccount.userId], references: [user.id] }),
  savingGoals: many(savingGoals),
  transactions: many(transactions),
}));


export const budgetsRelations = relations(budgets, ({ one, many }) => ({
  user: one(user, { fields: [budgets.userId], references: [user.id] }),
  items: many(budgetItems),
}));


export const categoryRelations = relations(category, ({ one, many }) => ({
  user: one(user, { fields: [category.userId], references: [user.id] }),
  transactions: many(transactions),
  budgetItems: many(budgetItems),
}));


export const savingGoalsRelations = relations(savingGoals, ({ one, many }) => ({
  user: one(user, { fields: [savingGoals.userId], references: [user.id] }),
  userAccount: one(userAccount, {
    fields: [savingGoals.userAccountId],
    references: [userAccount.id],
  }),
  transactions: many(transactions),
}));


export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(user, { fields: [transactions.userId], references: [user.id] }),
  userAccount: one(userAccount, {
    fields: [transactions.userAccountId],
    references: [userAccount.id],
  }),
  category: one(category, {
    fields: [transactions.categoryId],
    references: [category.id],
  }),
  savingGoals: one(savingGoals, {
    fields: [transactions.savingGoalsId],
    references: [savingGoals.id],
  }),
}));


// better auth
export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, { fields: [account.userId], references: [user.id] }),
}));
