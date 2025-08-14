import { Link } from "react-router-dom";
import { projects } from "../__mocks__";
import ProjectCard from "../components/ProjectCard.tsx" 

export default function Projects() {
  return (
    <div className="size-full flex flex-col items-center">
      <h2 className="text-7xl">Projects</h2>
      <progress
        className="progress progress-primary w-[300px] mb-[100px] mt-[10px]"
        value="100"
        max="100"
      ></progress>
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {projects.map(({img, project, webpage}) => {
          return (
            <ProjectCard  img={img} project={project} webpage={webpage}/>
          )
        })}
      </div>
    </div>
  );
}
