import { useEffect, useState } from "react";
import Timeline from "../components/Timeline"
import { languages, education } from "../__mocks__";
import * as fetchData from '../service/api';

export interface Skill {
  id: number;
  documentId: string;
  skill_name: string;
  percentage: number;
  createdAt: string;
}


export default function Resume() {
const [skills, setSkills] = useState<Skill[]>([])
  useEffect(() => {
    fetchData.getSkills()
      .then(response => {
        const {data} = response
        setSkills(data)
      })
      .catch(error => console.log('Error:', error))
  }, [])

  return (
    <div className="w-full h-full">
      <div>
        <h2 className="text-7xl ml-10">MY SKILLS</h2>
        <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>
        <div>
          {skills && skills.map(({skill_name, percentage}, idx) => (
            <div key={`skill${idx}`}>
              <h3>{skill_name}</h3>
              <div>
                <span>{`${percentage}%`}</span>
                <progress className="progress progress-primary w-56 ml-10" value={percentage} max='100'></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-7xl ml-10">LANGUAGES</h2>
        <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>
        <div className="mt-10 mb-10 ml-10">
          {languages.map(({ name, value }, idx) => (
            <div className="flex flex-col" key={`language${idx}`}>
              <h3>{name}</h3>
              <div className="flex items-center">
                <span className="block w-sm">{`${value}%`}</span>
                <progress className="progress progress-primary w-56 ml-10" value={value} max='100'></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-7xl ml-10">RESUME</h2>
        <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>

        <div>
          <h3>WORK EXPERIENCE</h3>
        </div>
        <div>
          <Timeline />
        </div>
        <div>
          <div>
            <h3>EDUCATION</h3>
          </div>
          <div>
            {education.map(({ institution, degree, description }, idx) => (
              <div key={`education${idx}`}>
                <h3>{institution}</h3>
                <div>
                  <h4>{degree}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}