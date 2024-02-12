import { Outlet, Link } from 'react-router-dom';
import picture from '../assets/profile-pic.png'

export default function Layout() {
  return (
    <div className="container min-h-screen flex mx-auto bg-cyan-600 text-white font-mono">
      <nav className="flex flex-col items-center justify-around min-h-screen box-border border-r border-white w-80 p-4">
        <div className='flex items-center justify-center rounded-full bg-slate-100 h-60 w-60'>
          <img src={picture} alt="profile" className="object-cover h-56 w-56" />
        </div>
        <div className="flex flex-col w-full justify-evenly items-center text-3xl font-semibold h-96">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="resume">Resume</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact</Link>
        </div>
        <footer className="w-full text-center text-white font-mono font-semibold"><p>@2024 <b className='text-white font-mono font-semibold'>Portfolio - All rights reserved</b></p></footer>
      </nav>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}
