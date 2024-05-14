import { useEffect, useRef, useState } from "react";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import Slider from "@material-ui/core/Slider";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import ControlsToggleButton from "./ControlsToggleButton";
import { setCurrentPlaying } from "../../../redux/music/actions";
import Name from "./Name";

const AudioPlayer = () => {
  const music = useAppSelector((state) => state.music.playing);
  const playlists = useAppSelector((state) => state.music.playlists);
  const dispatch = useAppDispatch();

  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [bannerToggle, setBannerToggle] = useState(false);

  const audioElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (music) {
      setCurrTrack(music);
    }
  }, [music]);

  useEffect(() => {
    const currentAudio = audioElement.current;
    if (currentAudio) {
      isPlaying
        ? currentAudio
            .play()
            .then(() => {})
            .catch((e: any) => {
              currentAudio.pause();
              currentAudio.currentTime = 0;
            })
        : currentAudio.pause();
      currentAudio.loop = isRepeatClicked;
      currentAudio.volume = volume / 100;
      currentAudio.muted = isVolumeClicked;
      currentAudio.onloadeddata = () => {
        setDuration(currentAudio.duration);
      };
      const interval = setInterval(() => {
        setCurrTime(currentAudio.currentTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isRepeatClicked, volume, isVolumeClicked]);

  useEffect(() => {
    setSeekTime(currTime / (duration / 100));
  }, [currTime, duration]);

  useEffect(() => {
    const currentAudio = audioElement.current;
    if (currentAudio) {
      currentAudio.onended = () => {
        setNextClicked(true);
      };
    }
  });

  useEffect(() => {
    if (isNextClicked) {
      let currTrackId = (id + 1) % playlists.length;
      dispatch(setCurrentPlaying(playlists[currTrackId]));
      setNextClicked(false);
    }
    if (isPrevClicked) {
      let currTrackId = (id - 1) % playlists.length;
      if (id - 1 < 0) {
        currTrackId = playlists.length - 1;
      }
      dispatch(setCurrentPlaying(playlists[currTrackId]));
      setPrevClicked(false);
    }
  }, [dispatch, id, isNextClicked, isPrevClicked, playlists]);

  const handleSeekChange = (event: any, newValue: any) => {
    if (audioElement.current) {
      audioElement.current.currentTime = (newValue * duration) / 100;
      setSeekTime(newValue);
    }
  };

  const handleVolumeChange = (event: any, newValue: any) => {
    setVolume(newValue);
  };

  const handleBannerToggle = () => {
    setBannerToggle(!bannerToggle);
  };

  function formatTime(secs: any) {
    const t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    let s = t.toTimeString().substr(0, 8);
    if (secs > 86399)
      s = Math.floor((+t - +new Date(1970, 0, 1)) / 3600000) + s.substr(2);
    return s.substring(3);
  }

  const handleToggle = (type: any, val: any) => {
    switch (type) {
      case "repeat":
        setRepeatClick(val);
        break;
      case "prev":
        setPrevClicked(val);
        break;
      case "play-pause":
        setPlayPauseClicked(val);
        break;
      case "next":
        setNextClicked(val);
        break;
      case "volume":
        setVolumeClicked(val);
        break;
      default:
        break;
    }
  };
  return (
    <div className="border-t bg-black border-gray-300 relative h-[10vh] flex flex-row items-center">
      <>
        <div className="absolute top-[-14px] z-[99999999] left-0 w-full overflow-hidden">
          {!isNaN(seekTime) && (
            <Slider
              style={{ color: "#0FACFD" }}
              className="w-full"
              value={seekTime}
              onChange={handleSeekChange}
            />
          )}
        </div>
      </>
    </div>
  );
};

export default AudioPlayer;
