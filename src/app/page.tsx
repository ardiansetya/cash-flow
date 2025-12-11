import Header from "~/components/shared/Header";
import HeroSection from "~/components/shared/HeroSection";
import InsightCard from "~/components/shared/InsightCard";

const Home = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col gap-4">
        <Header />
        <HeroSection />
        <InsightCard/>
      </div>
    </div>
  );
};

export default Home;
