import { LuNetwork } from "react-icons/lu";
export default function About() {
  return (
    <div className="w-full h-full">
      <h2 className="text-7xl">ABOUT ME</h2>
      <progress className="progress progress-primary w-56" value="50" max="100"></progress>
      <div>
        <div className="w-[500px] h-[500px] bg-slate-400 flex justify-center items-center">
          <p className="text-white text-6xl">IMG</p>
        </div>
        <div>
          <p className="text-2xl">Name: Tiago Ramos Vasconcelos</p>
          <p className="text-2xl">Age: 37</p>
          <p className="text-2xl">Nationality: Brazilian</p>
          <p className="text-2xl">Languages: Portuguese, English</p>
          <p className="text-2xl">Location: Federal District, Brazil</p>
          <a href="https://drive.google.com/uc?export=download&id=1lZwbSv6A6KLb2_24LfTPMTxf_mFAN73j" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
            Download PDF
          </a>
        </div>
      </div>
      <h2 className="text-7xl">SERVICES</h2>
      <progress className="progress progress-primary w-56" value="50" max="100"></progress>
      <div className="flex w-full justify-evenly">
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
              <LuNetwork className="text-7xl text-indigo-600" />
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