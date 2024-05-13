import globe from "./assets/icons/globe.svg";
import save from "./assets/icons/save-02.svg";

const Production = () => {
  return (
    <div className="flex justify-center bg-background w-screen h-screen px-[12px] py-[20px]">
      <div>
        <div className="flex gap-[10px]">
          <div className="w-[1210px] h-[75px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="flex justify-between items-start gap-[9px]">
            <div className="flex items-center justify-center w-[120px] h-[46px] bg-transparent cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[5px] hover:opacity-70 rounded-md border-[2px] border-solid border-primary">
              <img src={save} alt="" className="w-[28px] h-[28px]" />
              <h2 className="font-bold text-[14px]">Save</h2>
            </div>
            <div className="flex items-center justify-center w-[120px] h-[46px] bg-primary cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[5px] hover:opacity-70 rounded-md">
              <img src={globe} alt="" className="w-[28px] h-[28px]" />
              <h2 className="font-bold text-[14px]">Publish</h2>
            </div>
          </div>
        </div>
        <div className="flex mt-[9px] gap-[6px]">
          <div className="w-[187px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="w-[156px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="w-[854px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="flex flex-col gap-2">
            <div className="w-[270px] h-[240px] border-[2px] border-solid rounded-[5px] border-primary"></div>
            <div className="w-[270px] h-[370px] border-[2px] border-solid rounded-[5px] border-primary flex flex-col justify-between">
              <div></div>
              <div className="flex flex-col">
                <div className="border border-solid border-primary"></div>
                <div className="px-[5px] py-[9px] flex justify-between gap-1">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="border-[2px] border-solid rounded-[5px] border-primary w-[192px] h-[30px] bg-transparent p-1"
                  />
                  <button className="bg-primary rounded-[5px] flex-grow font-bold">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
