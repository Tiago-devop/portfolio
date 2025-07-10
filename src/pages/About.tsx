import { LuNetwork, LuBrainCircuit } from "react-icons/lu";
import { AboutPicture } from "../assets";
export default function About() {
  return (
    <div className="w-full h-full">
      <h2 className="text-7xl ml-10">ABOUT ME</h2>
      <progress
        className="progress progress-primary w-56 ml-10"
        value="50"
        max="100"
      ></progress>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-[377px] h-[500px] border-4 border-slate-100">
          <img
            src={AboutPicture}
            alt="Profile Picture"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <h3 className="mt-7 text-4xl font-semibold">
            I am <span className="text-indigo-600">Tiago Ramos</span>
          </h3>
          <p className="text-center text-xl lg:text-2xl">
            I am a Frontend Developer with a passion for web design and problem
            solving. I am always looking for new challenges and opportunities to
            grow as a professional.
          </p>
        </div>
        <div className="flex flex-col justify-between my-10 h-80 ">
          <p className="text-2xl">
            <span className="font-semibold">Name:</span> Tiago Ramos
          </p>
          <p className="text-2xl">
            <span className="font-semibold">Nationality:</span> Brazilian
          </p>
          <p className="text-2xl">
            <span className="font-semibold">Languages:</span> Portuguese,
            English
          </p>
          <p className="text-2xl">
            <span className="font-semibold">Location:</span> Federal District,
            Brazil
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1lZwbSv6A6KLb2_24LfTPMTxf_mFAN73j"
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 text-center  bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
      </div>
      <h2 className="text-7xl ml-10">SERVICES</h2>
      <progress
        className="progress progress-primary w-56 ml-10"
        value="50"
        max="100"
      ></progress>
      <div className="lg:flex w-full justify-evenly my-10">
        <div className="card w-80 h-64 bg-[#1d232a] shadow-xl mx-auto my-10">
          <figure>
            <div className="w-full h-40 flex justify-center items-center">
              <LuNetwork className="text-7xl text-indigo-600" />
            </div>
          </figure>
          <div className="card-body border-t-2 border-slate-600">
            <h2 className="card-title">Web Design</h2>
            <progress className="progress progress-primary w-24 h-1"></progress>
          </div>
        </div>
        <div className="card w-80 h-64 bg-[#1d232a] shadow-xl mx-auto my-10">
          <figure>
            <div className="w-full h-40 flex justify-center items-center">
              <LuBrainCircuit className="text-7xl text-indigo-600" />
            </div>
          </figure>
          <div className="card-body border-t-2 border-slate-600">
            <h2 className="card-title">Problem Solving</h2>
            <progress className="progress progress-primary w-24 h-1"></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
