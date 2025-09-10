import { useState, useEffect } from "react";

function Project() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/my-portfolio/projects.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((json) => setProjects(json.projects))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!projects) return <p>Loading...</p>;

  return (
    <>
      <h2 className="font-bold text-2xl lg:text-5xl ml-1 lg:ml-10 relative">
        Project
        <div className="absolute hidden lg:block -bottom-2 lg:-bottom-4 left-[3vh] transform -translate-x-1/2 w-10 lg:w-15 h-1 bg-[#3125d4] rounded-full"></div>
      </h2>
      <section className="border p-5 mt-5 lg:m-10 xl:m-10 border-[#212121] shadow-black shadow-sm rounded-lg leading-relaxed">
        
        {projects.map((project, index) => (
          <div key={index} className="mb-[6vh]">
            <h3 className="font-bold text-[3vh] pt-1">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Project;