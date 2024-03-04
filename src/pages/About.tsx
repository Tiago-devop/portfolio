import { LuNetwork, LuBrainCircuit } from "react-icons/lu";
import { AboutPicture } from "../assets"
export default function About() {
  return (
    <div className="w-full h-full">
      <h2 className="text-7xl ml-10">ABOUT ME</h2>
      <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="w-[500px] h-[500px] border-4 border-slate-100">
          <img src={AboutPicture} alt="Profile Picture" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-between my-10 h-80 ">
          <p className="text-2xl"><span className="font-semibold">Name:</span> Tiago Ramos Vasconcelos</p>
          <p className="text-2xl"><span className="font-semibold">Age:</span> 37</p>
          <p className="text-2xl"><span className="font-semibold">Nationality:</span> Brazilian</p>
          <p className="text-2xl"><span className="font-semibold">Languages:</span> Portuguese, English</p>
          <p className="text-2xl"><span className="font-semibold">Location:</span> Federal District, Brazil</p>
          <a href="https://drive.google.com/uc?export=download&id=1lZwbSv6A6KLb2_24LfTPMTxf_mFAN73j" target="_blank" rel="noopener noreferrer" className="w-40 text-center  bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
            Download CV
          </a>
        </div>
      </div>
      <h2 className="text-7xl ml-10">SERVICES</h2>
      <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>
      <div className="flex w-full justify-evenly my-40">
        <div className="card w-80 h-64 bg-base-100 shadow-xl">
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
        <div className="card w-80 h-64 bg-base-100 shadow-xl">
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
  )
}