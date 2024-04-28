import Body from "./components/Body";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
      <Header />
      <Body />
    </div>
  );
};

export default Home;