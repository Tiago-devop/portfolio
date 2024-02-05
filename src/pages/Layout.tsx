import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div className="container flex mx-auto px-4 bg-cyan-600 text-white">
        <nav className="flex flex-col items-center justify-between p-4">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <div className="flex flex-col text-2xl">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="resume">Resume</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </div>
        </nav>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}