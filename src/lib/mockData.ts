// Mock data for the Student Money Management app

export interface Account {
  id: string;
  name: string;
  type: "cash" | "bank" | "ewallet";
  balance: number;
  icon: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  type: "income" | "expense";
  icon: string;
  color: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  categoryId: string;
  amount: number;
  type: "income" | "expense";
  date: string;
  note: string;
}

export interface Budget {
  id: string;
  categoryId: string;
  amount: number;
  spent: number;
  month: string;
}

export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  icon: string;
  color: string;
}

export const mockAccounts: Account[] = [
  {
    id: "1",
    name: "Cash",
    type: "cash",
    balance: 250000,
    icon: "Wallet",
    color: "hsl(142, 76%, 36%)",
  },
  {
    id: "2",
    name: "BCA",
    type: "bank",
    balance: 3500000,
    icon: "Building2",
    color: "hsl(217, 91%, 60%)",
  },
  {
    id: "3",
    name: "GoPay",
    type: "ewallet",
    balance: 450000,
    icon: "Smartphone",
    color: "hsl(168, 76%, 36%)",
  },
  {
    id: "4",
    name: "OVO",
    type: "ewallet",
    balance: 180000,
    icon: "CreditCard",
    color: "hsl(280, 70%, 50%)",
  },
];

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Food & Drinks",
    type: "expense",
    icon: "UtensilsCrossed",
    color: "hsl(25, 95%, 53%)",
  },
  {
    id: "2",
    name: "Transport",
    type: "expense",
    icon: "Car",
    color: "hsl(217, 91%, 60%)",
  },
  {
    id: "3",
    name: "Rent",
    type: "expense",
    icon: "Home",
    color: "hsl(280, 70%, 50%)",
  },
  {
    id: "4",
    name: "Internet & Phone",
    type: "expense",
    icon: "Wifi",
    color: "hsl(168, 76%, 36%)",
  },
  {
    id: "5",
    name: "Entertainment",
    type: "expense",
    icon: "Gamepad2",
    color: "hsl(340, 82%, 52%)",
  },
  {
    id: "6",
    name: "Campus",
    type: "expense",
    icon: "GraduationCap",
    color: "hsl(38, 92%, 50%)",
  },
  {
    id: "7",
    name: "Shopping",
    type: "expense",
    icon: "ShoppingBag",
    color: "hsl(262, 83%, 58%)",
  },
  {
    id: "8",
    name: "Health",
    type: "expense",
    icon: "Heart",
    color: "hsl(0, 72%, 51%)",
  },
  {
    id: "9",
    name: "Allowance",
    type: "income",
    icon: "Banknote",
    color: "hsl(142, 76%, 36%)",
  },
  {
    id: "10",
    name: "Part-time Job",
    type: "income",
    icon: "Briefcase",
    color: "hsl(217, 91%, 60%)",
  },
  {
    id: "11",
    name: "Scholarship",
    type: "income",
    icon: "Award",
    color: "hsl(38, 92%, 50%)",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    accountId: "1",
    categoryId: "1",
    amount: 35000,
    type: "expense",
    date: "2024-12-10",
    note: "Lunch at campus",
  },
  {
    id: "2",
    accountId: "3",
    categoryId: "2",
    amount: 25000,
    type: "expense",
    date: "2024-12-10",
    note: "Grab to campus",
  },
  {
    id: "3",
    accountId: "2",
    categoryId: "9",
    amount: 2000000,
    type: "income",
    date: "2024-12-09",
    note: "Monthly allowance from parents",
  },
  {
    id: "4",
    accountId: "1",
    categoryId: "1",
    amount: 45000,
    type: "expense",
    date: "2024-12-09",
    note: "Dinner with friends",
  },
  {
    id: "5",
    accountId: "4",
    categoryId: "5",
    amount: 75000,
    type: "expense",
    date: "2024-12-08",
    note: "Movie tickets",
  },
  {
    id: "6",
    accountId: "2",
    categoryId: "4",
    amount: 150000,
    type: "expense",
    date: "2024-12-07",
    note: "Monthly internet bill",
  },
  {
    id: "7",
    accountId: "3",
    categoryId: "1",
    amount: 28000,
    type: "expense",
    date: "2024-12-07",
    note: "Coffee shop",
  },
  {
    id: "8",
    accountId: "2",
    categoryId: "10",
    amount: 500000,
    type: "income",
    date: "2024-12-06",
    note: "Tutoring session",
  },
  {
    id: "9",
    accountId: "1",
    categoryId: "6",
    amount: 50000,
    type: "expense",
    date: "2024-12-06",
    note: "Printing assignments",
  },
  {
    id: "10",
    accountId: "2",
    categoryId: "7",
    amount: 200000,
    type: "expense",
    date: "2024-12-05",
    note: "New notebook",
  },
  {
    id: "11",
    accountId: "3",
    categoryId: "2",
    amount: 30000,
    type: "expense",
    date: "2024-12-05",
    note: "GoRide",
  },
  {
    id: "12",
    accountId: "1",
    categoryId: "1",
    amount: 40000,
    type: "expense",
    date: "2024-12-04",
    note: "Groceries",
  },
  {
    id: "13",
    accountId: "2",
    categoryId: "11",
    amount: 1500000,
    type: "income",
    date: "2024-12-01",
    note: "Semester scholarship",
  },
  {
    id: "14",
    accountId: "4",
    categoryId: "5",
    amount: 50000,
    type: "expense",
    date: "2024-12-03",
    note: "Game subscription",
  },
  {
    id: "15",
    accountId: "1",
    categoryId: "8",
    amount: 80000,
    type: "expense",
    date: "2024-12-02",
    note: "Medicine",
  },
];

export const mockBudgets: Budget[] = [
  { id: "1", categoryId: "1", amount: 800000, spent: 548000, month: "2024-12" },
  { id: "2", categoryId: "2", amount: 400000, spent: 305000, month: "2024-12" },
  { id: "3", categoryId: "4", amount: 200000, spent: 150000, month: "2024-12" },
  { id: "4", categoryId: "5", amount: 300000, spent: 275000, month: "2024-12" },
  { id: "5", categoryId: "6", amount: 150000, spent: 100000, month: "2024-12" },
  { id: "6", categoryId: "7", amount: 500000, spent: 400000, month: "2024-12" },
];

export const mockSavingsGoals: SavingsGoal[] = [
  {
    id: "1",
    name: "New Laptop",
    targetAmount: 15000000,
    currentAmount: 8500000,
    deadline: "2025-06-01",
    icon: "Laptop",
    color: "hsl(217, 91%, 60%)",
  },
  {
    id: "2",
    name: "Emergency Fund",
    targetAmount: 5000000,
    currentAmount: 3200000,
    deadline: "2025-03-01",
    icon: "Shield",
    color: "hsl(142, 76%, 36%)",
  },
  {
    id: "3",
    name: "Vacation Trip",
    targetAmount: 3000000,
    currentAmount: 750000,
    deadline: "2025-07-15",
    icon: "Plane",
    color: "hsl(25, 95%, 53%)",
  },
];

// Helper functions
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export function formatShortDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
}

export function getCategoryById(id: string): Category | undefined {
  return mockCategories.find((cat) => cat.id === id);
}

export function getAccountById(id: string): Account | undefined {
  return mockAccounts.find((acc) => acc.id === id);
}

export function getTotalBalance(): number {
  return mockAccounts.reduce((sum, acc) => sum + acc.balance, 0);
}

export function getMonthlyIncome(): number {
  return mockTransactions
    .filter((t) => t.type === "income" && t.date.startsWith("2024-12"))
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getMonthlyExpenses(): number {
  return mockTransactions
    .filter((t) => t.type === "expense" && t.date.startsWith("2024-12"))
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getSpendingByCategory(): {
  name: string;
  value: number;
  color: string;
}[] {
  const expenseTransactions = mockTransactions.filter(
    (t) => t.type === "expense" && t.date.startsWith("2024-12"),
  );
  const categoryTotals: Record<string, number> = {};

  expenseTransactions.forEach((t) => {
    categoryTotals[t.categoryId] =
      (categoryTotals[t.categoryId] || 0) + t.amount;
  });

  return Object.entries(categoryTotals)
    .map(([categoryId, value]) => {
      const category = getCategoryById(categoryId);
      return {
        name: category?.name || "Unknown",
        value,
        color: category?.color || "hsl(0, 0%, 50%)",
      };
    })
    .sort((a, b) => b.value - a.value);
}
