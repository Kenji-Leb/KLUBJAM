import Header from "./components/Header";
import AnalyticsCards from "./components/AnalyticsCards";

const Analytics = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <AnalyticsCards></AnalyticsCards>
    </div>
  );
};

export default Analytics;
