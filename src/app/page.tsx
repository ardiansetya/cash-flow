import BudgetOverview from "~/components/shared/BudgetOverview";
import Header from "~/components/shared/Header";
import HeroSection from "~/components/shared/HeroSection";
import InsightCard from "~/components/shared/InsightCard";
import RecentsTransactions from "~/components/shared/RecentsTransactions";
import SavingGoals from "~/components/shared/SavingGoals";
import { SpendingChart } from "~/components/shared/SpendingChart";

const Home = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col gap-4">
        <Header />
        <HeroSection />
        <InsightCard />
        <div className="flex gap-4">
          <div className="w-3/5 space-y-4">
            <RecentsTransactions />
            <SpendingChart />
          </div>
          <div className="w-2/5 space-y-4">
            <BudgetOverview />
            <SavingGoals/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
