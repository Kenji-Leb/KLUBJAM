import globe from "./assets/icons/globe.svg";
import save from "./assets/icons/save-02.svg";
import back from "./assets/icons/arrow-left.svg";
import backward from "./assets/icons/fast-backward.svg";
import play from "./assets/icons/play-03.svg";
import repeat from "./assets/icons/refresh-01.svg";
import micro from "./assets/icons/microphone-01.svg";
import volume from "./assets/icons/volume-05.svg";
import settings from "./assets/icons/settings (1).svg";
import download from "./assets/icons/download-02.svg";
import elipse from "./assets/icons/Ellipse 41.svg";

const Production = () => {
  return (
    <div className="flex justify-center bg-background w-screen h-screen px-[12px] py-[20px]">
      <div>
        <div className="flex gap-[10px]">
          <div className="w-[1210px] h-[75px] border-[2px] border-solid rounded-[5px] border-primary flex items-center justify-between px-[18px]">
            <div>
              <img src={back} alt="" className="" />
            </div>
            <div>
              <div className="border-[2px] border-solid rounded-md border-primary  px-[18px] py-[6px] font-bold">
                <p>120 BPM</p>
              </div>
            </div>
            <div className="flex gap-[14px]">
              <img src={backward} alt="" className="" />
              <img src={play} alt="" className="" />
              <img src={elipse} alt="" className="" />
              <img src={repeat} alt="" className="" />
              <div className="border-[2px] border-solid rounded-md border-primary px-[18px] py-[6px]  font-bold">
                <p>00:00.0</p>
              </div>
            </div>
            <div className="flex">
              <img src={micro} alt="" className="" />
              <img src={volume} alt="" className="" />
              <p>1.8dB</p>
            </div>
            <div className="flex gap-[8px]">
              <img src={settings} alt="" className="" />
              <img src={download} alt="" className="" />
            </div>
          </div>
          <div className="flex justify-between items-start gap-[9px]">
            <div className="flex items-center justify-center w-[120px] h-[46px] bg-transparent cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[5px] hover:opacity-70 rounded-md border-[2px] border-solid border-primary">
              <img src={save} alt="" className="w-[28px] h-[28px]" />
              <h2 className="font-bold text-[14px] text-primary">Save</h2>
            </div>
            <div className="flex items-center justify-center w-[120px] h-[46px] bg-primary cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[5px] hover:opacity-70 rounded-md">
              <img src={globe} alt="" className="w-[28px] h-[28px]" />
              <h2 className="font-bold text-[14px]">Publish</h2>
            </div>
          </div>
        </div>
        <div className="flex mt-[9px] gap-[6px]">
          <div className="w-[187px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary flex flex-col gap-1 pl-[14px] pt-[14px]">
            <h2>Piano</h2>
            <h2>Guitar</h2>
            <h2>Beats</h2>
            <h2>presets</h2>
          </div>
          <div className="w-[156px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary p-[9px] flex flex-col gap-1">
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
            <div className="relative h-[64px] bg-green-950 rounded-md">
              <p className="absolute top-0 left-1">Bass</p>
            </div>
          </div>
          <div className="w-[854px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary p-[6px]">
            <div className="flex">
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">1</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">2</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">3</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">4</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">5</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">6</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">7</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">8</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">9</p>
              </div>
              <div className="relative border border-primary border-solid w-[84px] h-[40px]">
                <p className="absolute top-0 left-1">10</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="border border-dashed border-primary flex items-center justify-center h-[66px]">
                <h2>Drag a blob file</h2>
              </div>
            </div>
          </div>
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
                  <button className="bg-primary rounded-[5px] flex-grow font-bold hover:opacity-70">
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
