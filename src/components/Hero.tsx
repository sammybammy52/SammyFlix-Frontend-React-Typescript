import React from "react";
import { Link } from "react-router-dom";
import HeroBG from "../assets/peakpx.jpg";

const Hero = () => {
  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const mssg = ()=> {
    alert("feature not added yet");
  }
  return (
    <div className="w-full h-[800px] text-white">
      <div className="w-full h-[800px] relative">
        <div className="absolute w-full h-[800px] bg-gradient-to-r from-black"></div>
        {/* <img className="w-full h-full object-cover" src={HeroBG} /> */}

        <video
          className="w-full h-[1080px] absolute z-[-10] top-[-150px] object-cover"
          controls={false}
          loop
          autoPlay
          muted
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/seye-reactfirebase.appspot.com/o/videoplayback.mp4?alt=media&token=efb22a5a-ed8e-4da3-ab23-15a8ba56eda7"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>

        <div className="absolute w-full top-[30%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            Avatar: Way Of Water
          </h1>
          <div className="my-4">
            <Link to={"/movies/63e410107d7976482b73f714"}>
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5" >
                Play
              </button>
            </Link>

            <button className="border text-white border-gray-300 py-2 px-5 ml-4" onClick={mssg}>
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released: 2022</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(
              "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
              150
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
