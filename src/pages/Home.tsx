import TextAnimation from "../components/TextAnimation"
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const text = "Hello world, I am Tiago Ramos"
export default function Home() {
  return (
    <div>
      <TextAnimation text={text} />
      <p>This is my Personal Portfolio, in here you can find a little bit more about me and my work.</p>
      <div className="flex w-56 justify-between">
        <a href="" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className="text-6xl text-red-700" /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="text-6xl text-red-700" /></a>
        <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-6xl text-red-700" /></a>
      </div>
    </div>
  )
}
