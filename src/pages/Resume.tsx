import Timeline from "../components/Timeline"
import { skills, languages, workExperience, education } from "../__mocks__";

export default function Resume() {
  return (
    <div className="w-full h-full">
      <div>
        <h2 className="text-7xl ml-10">MY SKILLS</h2>
        <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>
        <div>
          {skills.map(({ name, value }, idx) => (
            <div key={`skill${idx}`}>
              <h3>{name}</h3>
              <div>
                <span>{`${value}%`}</span>
                <progress className="progress progress-primary w-56 ml-10" value={value} max='100'></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-7xl ml-10">LANGUAGES</h2>
        <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>
        <div>
          {languages.map(({ name, value }, idx) => (
            <div key={`language${idx}`}>
              <h3>{name}</h3>
              <div>
                <span>{`${value}%`}</span>
                <progress className="progress progress-primary w-56 ml-10" value={value} max='100'></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-7xl ml-10">RESUME</h2>
        <progress className="progress progress-primary w-56 ml-10" value="50" max="100"></progress>

        <Timeline />
        <div>
          <h3>WORK EXPERIENCE</h3>
        </div>
        <div>
          {workExperience.map(({ company, position, startDate, endDate, description }, idx) => (
            <div key={`work${idx}`}>
              <h3>{company}</h3>
              <div>
                <h4>{position}</h4>
                <p>{`${startDate} - ${endDate}`}</p>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h3>EDUCATION</h3>
        </div>
        <div>
          {education.map(({ institution, degree, startDate, endDate, description }, idx) => (
            <div key={`education${idx}`}>
              <h3>{institution}</h3>
              <div>
                <h4>{degree}</h4>
                <p>{`${startDate} - ${endDate}`}</p>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}