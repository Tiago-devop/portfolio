import { useEffect, useState } from "react";
import { workExperience } from "../__mocks__";

interface TimelineProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
  skillAcquired: string[];
  description: string;
}

export default function Timeline() {
  const [data, setData] = useState<TimelineProps[]>([]);
  useEffect(() => {
    if(data.length === 0) {
      setData(workExperience);
    }
  }, [data]);
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {data.map((item, index) => (
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-${index % 2 === 0 ? "start" : "end"} mb-10 ${index % 2 === 0 && "md:text-end"} my-2 mx-1`}>
            <time className="font-mono">06 months</time>
            <div className="text-lg font-black">{item.company}</div>
            <div className="text-sm font-bold">{item.position}</div>
            <ul className="list-disc list-inside">
              {item.bulletPoints.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
            <div className="text-sm font-bold">Skills Acquired:</div>
            <ul className="list-disc list-inside">
              {item.skillAcquired.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <hr />
        </li>)
      )}
    </ul>
  )
}