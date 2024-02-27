export default function About() {
  return (
    <div className="w-full h-full">
      <h2 className="text-7xl">ABOUT ME</h2>
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
      <div className="flex w-full justify-evenly">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><div className="w-full h-72 bg-slate-400 text-6xl text-white flex justify-center items-center">IMG</div></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><div className="w-full h-72 bg-slate-400 text-6xl text-white flex justify-center items-center">IMG</div></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}