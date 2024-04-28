import bgHeader from "../../../assets/Navbar/images/dark-blue-abstract-blur-background-vector.jpg";
import defaultLogo from "../../../assets/Navbar/images/user-profile-circle.svg";
import { useState } from "react";
import CommunityPlaylists from "./components/CommunityPlaylists";
import MyPlaylists from "./components/MyPlaylists";

const Playlists = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleClick = (componentNumber: number) => {
    if (componentNumber === 1) {
      setIsVisible1(!isVisible1);
    } else if (componentNumber === 2) {
      setIsVisible2(!isVisible2);
    }
  };
  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
      <div className="h-[180px] relative">
        <img
          src={bgHeader}
          alt=""
          className="w-full h-full object-center absolute inset-0"
        />
        <img
          src={defaultLogo}
          alt=""
          className="absolute top-3 right-3 cursor-pointer "
        />
        <h1 className="relative mt-[67px] mb-[67px] ml-[35px] font-semibold text-[38px]">
          Playlists
        </h1>

        <div className="flex absolute bottom-[13px] left-9 gap-[41px]">
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(1);
              setIsVisible2(false);
            }}
          >
            Community Playlists
          </h2>
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(2);
              setIsVisible1(false);
            }}
          >
            My Playlists
          </h2>
        </div>
      </div>
      <div className="flex flex-col relative ">
        {isVisible1 && <CommunityPlaylists />}
        {isVisible2 && <MyPlaylists />}
      </div>
    </div>
  );
};
export default Playlists;