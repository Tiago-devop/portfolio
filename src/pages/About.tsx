export default function About() {
  return (
    <div className="w-full h-full">
      <h1 className="text-7xl">ABOUT ME</h1>
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
    </div>
  )
}