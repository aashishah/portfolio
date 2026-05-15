import { use, useEffect, useState } from "react";

export default function Experience() {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    async function fetchExperienceData() {
      const resp = await fetch("/experience.json")
        .then((response) => response.json())
        .then((data) => {
          setExperienceData(data);
        })
        .catch((error) =>
          console.error("Error fetching experience data:", error),
        );
    }

    fetchExperienceData();
  }, []);

  console.log(experienceData);
  return (
    <>
      {experienceData && (
        <div className="experience">
          <h1>Experience</h1>
          <p>Brief overview of my professional experience.</p>

          <div className="experience-list">
            {experienceData.map((item) => (
              <div key={item.id} className="experience-item">
                <h2>
                  {item.position} {item.company && `at ${item.company}`}
                </h2>
                <p>{item.duration}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
