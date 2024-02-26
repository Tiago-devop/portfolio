import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Picture, Brazil, US } from '../assets';
import ImgWithTooltip from '../components/ImgWithTooltip';

function toggle(value: boolean): boolean {
  return !value
}

export default function Layout() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="relative container min-h-screen flex mx-auto bg-[#10121A] text-white font-mono">
      <nav className="md:flex hidden flex-col items-center justify-around min-h-screen box-border border-r border-white w-80 p-4">
        <div className='flex items-center justify-center rounded-full bg-slate-100 h-60 w-60'>
          <img src={Picture} alt="profile" className="object-cover h-56 w-56" />
        </div>
        <div className='flex w-24 my-2 justify-around'>
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
      
      <label className="md:hidden absolute top-1 left-1 btn btn-circle swap swap-rotate">
        <input type="checkbox" checked={checked} onChange={() => setChecked(toggle)} />
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
      </label>

      {checked && (
        <div className='md:hidden absolute inset-0 flex justify-center items-center' onClick={() => setChecked(toggle)}>
          <div className='w-full h-full bg-black bg-opacity-90 flex justify-center items-center'>
            <div className='flex flex-col justify-around items-center'>
              <Link to="/" className='bg-none w-40 rounded-full text-3xl text-center hover:bg-indigo-600'>Home</Link>
              <Link to="about" className='bg-none w-40 rounded-full text-3xl text-center hover:bg-indigo-600'>About</Link>
              <Link to="resume" className='bg-none w-40 rounded-full text-3xl text-center hover:bg-indigo-600'>Resume</Link>
              <Link to="projects" className='bg-none w-40 rounded-full text-3xl text-center hover:bg-indigo-600'>Projects</Link>
              <Link to="contact" className='bg-none w-40 rounded-full text-3xl text-center hover:bg-indigo-600'>Contact</Link>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center p-4 w-full min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}
