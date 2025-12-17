// scripts/seed.ts
import { config } from "dotenv";
config();

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import crypto from "crypto";

// sesuaikan path ini ke lokasi schema-mu
import {
  user,
  account,
  userAccount,
  budgets,
  category,
  savingGoals,
  transactions,
  budgetItems,
  session,
  verification,
} from "./schema";

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL belum di-set di .env");
    process.exit(1);
  }

  const sql = neon(databaseUrl);
  const db = drizzle(sql);

  try {
    console.log("Mulai seeding (sesuai schema)...");

    // --- USERS (schema: user.id adalah TEXT) ---
    const user1Id = "user-1";
    const user2Id = "user-2";

    await db.insert(user).values({
      id: user1Id,
      name: "Ardian Putra",
      email: "ardian@example.com",
      emailVerified: false,
      image: null,
      university: "Universitas Dian Nuswantoro",
      major: "Teknik Informatika",
      monthlyAllowance: 1000000,
      currency: "IDR",
      locale: "id-ID",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(user).values({
      id: user2Id,
      name: "Siti Aminah",
      email: "siti@example.com",
      emailVerified: true,
      image: null,
      university: "Universitas Diponegoro",
      major: "Sistem Informasi",
      monthlyAllowance: 1500000,
      currency: "IDR",
      locale: "id-ID",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- ACCOUNT (schema: account.id adalah TEXT) ---
    const acc1Id = "acc-1";
    const acc2Id = "acc-2";

    await db.insert(account).values({
      id: acc1Id,
      accountId: "acc_google_ardian",
      providerId: "google",
      userId: user1Id,
      accessToken: null,
      refreshToken: null,
      idToken: null,
      accessTokenExpiresAt: null,
      refreshTokenExpiresAt: null,
      scope: null,
      password: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(account).values({
      id: acc2Id,
      accountId: "acc_github_siti",
      providerId: "github",
      userId: user2Id,
      accessToken: null,
      refreshToken: null,
      idToken: null,
      accessTokenExpiresAt: null,
      refreshTokenExpiresAt: null,
      scope: null,
      password: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- USER_ACCOUNT (schema: id uuid) ---
    const ua1 = crypto.randomUUID();
    const ua2 = crypto.randomUUID();
    const ua3 = crypto.randomUUID();

    await db.insert(userAccount).values({
      id: ua1,
      userId: user1Id,
      name: "Rekening Utama",
      type: "bank",
      initialBalance: 5000000,
      currentBalance: 5000000,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(userAccount).values({
      id: ua2,
      userId: user1Id,
      name: "Dompet Tunai",
      type: "cash",
      initialBalance: 200000,
      currentBalance: 150000,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(userAccount).values({
      id: ua3,
      userId: user2Id,
      name: "Rekening Siti",
      type: "bank",
      initialBalance: 3000000,
      currentBalance: 2800000,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- BUDGETS (schema: id uuid, userId is text) ---
    const budget1 = crypto.randomUUID();
    const budget2 = crypto.randomUUID();

    await db.insert(budgets).values({
      id: budget1,
      userId: user1Id,
      name: "Budget Januari",
      periodYear: 2025,
      periodMonth: 1,
      startDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(budgets).values({
      id: budget2,
      userId: user2Id,
      name: "Budget Semester 1",
      periodYear: 2025,
      periodMonth: 6,
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- CATEGORY (schema: id uuid, userId text) ---
    const cat1 = crypto.randomUUID();
    const cat2 = crypto.randomUUID();
    const cat3 = crypto.randomUUID();

    await db.insert(category).values({
      id: cat1,
      userId: user1Id,
      name: "Makan & Minum",
      type: "expense",
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(category).values({
      id: cat2,
      userId: user1Id,
      name: "Transport",
      type: "expense",
      isDefault: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(category).values({
      id: cat3,
      userId: user2Id,
      name: "Gaji",
      type: "income",
      isDefault: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- SAVING_GOALS (schema: id uuid, userId text, userAccountId uuid referencing user_account.id) ---
    const sg1 = crypto.randomUUID();
    const sg2 = crypto.randomUUID();

    await db.insert(savingGoals).values({
      id: sg1,
      userId: user1Id,
      userAccountId: ua1,
      name: "Liburan Bali",
      targetAmount: 5000000,
      currentAmount: 1000000,
      deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      note: "Tabungan untuk liburan semester",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(savingGoals).values({
      id: sg2,
      userId: user2Id,
      userAccountId: ua3,
      name: "Motor Baru",
      targetAmount: 15000000,
      currentAmount: 2000000,
      deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
      note: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- TRANSACTIONS (schema: id uuid, userId text, userAccountId uuid, savingGoalsId uuid not null) ---
    const tx1 = crypto.randomUUID();
    const tx2 = crypto.randomUUID();

    await db.insert(transactions).values({
      id: tx1,
      userId: user1Id,
      userAccountId: ua1,
      categoryId: cat1,
      savingGoalsId: sg1,
      type: "expense",
      amount: 50000,
      transactionDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      note: "Makan siang di kantin",
      attachmentUrl: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(transactions).values({
      id: tx2,
      userId: user1Id,
      userAccountId: ua1,
      categoryId: cat2,
      savingGoalsId: sg1,
      type: "expense",
      amount: 20000,
      transactionDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      note: "Ojek online",
      attachmentUrl: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- BUDGET_ITEMS (schema: id uuid, budgetId uuid, categoryId uuid) ---
    const bi1 = crypto.randomUUID();
    const bi2 = crypto.randomUUID();

    await db.insert(budgetItems).values({
      id: bi1,
      budgetId: budget1,
      categoryId: cat1,
      plannedAmount: 1500000,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(budgetItems).values({
      id: bi2,
      budgetId: budget1,
      categoryId: cat2,
      plannedAmount: 300000,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // --- SESSIONS (schema: session.id text, userId text) ---
    await db.insert(session).values({
      id: "sess-1",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      token: "tok_abc123",
      createdAt: new Date(),
      updatedAt: new Date(),
      ipAddress: "127.0.0.1",
      userAgent: "drizzle-seeder",
      userId: user1Id,
    });

    await db.insert(session).values({
      id: "sess-2",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      token: "tok_def456",
      createdAt: new Date(),
      updatedAt: new Date(),
      ipAddress: "127.0.0.1",
      userAgent: "drizzle-seeder",
      userId: user2Id,
    });

    // --- VERIFICATION (schema: id text) ---
    await db.insert(verification).values({
      id: "ver-1",
      identifier: "email:user-1",
      value: "otp-123456",
      expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await db.insert(verification).values({
      id: "ver-2",
      identifier: "email:user-2",
      value: "otp-654321",
      expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log("Seeding selesai ✅");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

main();
