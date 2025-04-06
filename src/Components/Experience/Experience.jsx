import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaGoogle,
  FaAmazon,
} from "react-icons/fa";
import {
  SiRedis,
  SiNodedotjs,
  SiGithub,
  SiMongodb,
  
  
} from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>

      <div className="flex flex-wrap items-center justify-around">
        
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub color="#ffffff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs color="#3C873A" size={50} />
          </span>
         
         
         
        </div>

        {/* Experience Cards */}
        <div>
          {/* Google */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior SDE-developer</li>
              </ul>
            </span>
          </div>

          {/* Netflix */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Netflix</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2022 - Aug 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Developed scalable video platform features.</li>
                <li>- Worked on high-performance React UI.</li>
              </ul>
            </span>
          </div>

          {/* Amazon */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Amazon</h2>
              <p className="text-sm leading-tight font-thin">
                July 2020 - Dec 2021
              </p>
              <ul className="text-sm p-2">
                <li>- Built secure backend APIs.</li>
                <li>- Contributed to Prime delivery systems.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
