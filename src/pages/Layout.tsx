import { Outlet, Link } from 'react-router-dom';
import { Picture, Brazil, US } from '../assets';
import ImgWithTooltip from '../components/ImgWithTooltip';

export default function Layout() {
  return (
    <div className="container min-h-screen flex mx-auto bg-[#10121A] text-white font-mono">
      <nav className="flex flex-col items-center justify-around min-h-screen box-border border-r border-white w-80 p-4">
        <div className='flex items-center justify-center rounded-full bg-slate-100 h-60 w-60'>
          <img src={Picture} alt="profile" className="object-cover h-56 w-56" />
        </div>
        <div className='flex w-24 justify-around'>
          <ImgWithTooltip src={Brazil} alt="Portugues" />
          <ImgWithTooltip src={US} alt="English" />
        </div>
        <div className="flex flex-col w-full justify-evenly items-center text-3xl font-semibold h-96 box-border border-y border-white">
          <Link to="/" className='bg-none w-40 rounded-full text-center hover:bg-indigo-600'>Home</Link>
          <Link to="about" className='bg-none w-40 rounded-full text-center hover:bg-indigo-600'>About</Link>
          <Link to="resume" className='bg-none w-40 rounded-full text-center hover:bg-indigo-600'>Resume</Link>
          <Link to="projects" className='bg-none w-40 rounded-full text-center hover:bg-indigo-600'>Projects</Link>
          <Link to="contact" className='bg-none w-40 rounded-full text-center hover:bg-indigo-600'>Contact</Link>
        </div>
        <footer className="w-full text-center text-white font-mono font-semibold"><p>@2024 <b className='text-white font-mono font-semibold'>Portfolio - All rights reserved</b></p></footer>
      </nav>

      <div className="flex items-center justify-center p-4 w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}
