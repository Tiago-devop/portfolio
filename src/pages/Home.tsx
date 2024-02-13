import TextAnimation from "../components/TextAnimation"
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const text = "Hello world, I am"
const name = "Tiago Ramos"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full mr-auto ml-auto">
      <div className="flex flex-col items-center mb-8">
        <TextAnimation isWhite text={text} />
        <TextAnimation text={name} />
      </div>
      <p className="text-xl mb-8">This is my Personal Portfolio, in here you can find a little bit more about me and my work.</p>
      <div className="flex w-56 justify-between">
        <a href="https://api.whatsapp.com/send?phone=5561982411994&amp;text=Hello%20Tiago%20how%20are%20you%20%3F%20I%20just%20got%20your%20phone%20number%20from%20your%20portfolio%21%21" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className="text-6xl text-[#26d367] bg-white" /></a>
        <a href="https://github.com/Tiago-devop" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="text-6xl text-black bg-white" /></a>
        <a href="https://www.linkedin.com/in/tiagoramosvasconcelos/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-6xl text-[#0b66c3] bg-white" /></a>
      </div>
    </div>
  )
}