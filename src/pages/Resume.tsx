export default function Resume() {
  const skills = [
    {
      name: "HTML5",
      value: 70
    },
    {
      name: "CSS3",
      value: 90
    },
    {
      name: "JavaScript",
      value: 85
    },
    {
      name: "TypeScript",
      value: 65
    },
    {
      name: "React JS",
      value: 70
    },
    {
      name: "PostgreSQL",
      value: 65
    },
    {
      name: "GraphQL",
      value: 65
    },
    {
      name: "Git",
      value: 75
    }
  ]
  const languages = [
    {
      name: "Portuguese",
      value: 100
    },
    {
      name: "English",
      value: 90
    }
  ]
  const workExperience = [
    {
      company: "Company 1",
      position: "Frontend Developer",
      startDate: "2020",
      endDate: "2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est nec elit gravida tincidunt. Ut at odio nec elit gravida tincidunt."
    },
    {
      company: "Company 2",
      position: "Web Designer",
      startDate: "2018",
      endDate: "2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est nec elit gravida tincidunt. Ut at odio nec elit gravida tincidunt."
    },
    {
      company: "Company 3",
      position: "Frontend Developer",
      startDate: "2016",
      endDate: "2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est nec elit gravida tincidunt. Ut at odio nec elit gravida tincidunt."
    }
  ]
  const education = [
    {
      institution: "University 1",
      degree: "Computer Science",
      startDate: "2012",
      endDate: "2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est nec elit gravida tincidunt. Ut at odio nec elit gravida tincidunt."
    },
    {
      institution: "University 2",
      degree: "Web Design",
      startDate: "2010",
      endDate: "2012",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet est nec elit gravida tincidunt. Ut at odio nec elit gravida tincidunt."
    }
  ]
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