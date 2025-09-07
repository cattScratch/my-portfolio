function About(){
    const skills ={
            technical: ["Java", "JavaScript", "Python", "React.js", "ASP.NET Core", "HTML & CSS", "Tailwind", "Docker", "GitHub Desktop", "GitHub", "Postman", "MySQL", "Entity Framework", "LINQ", "RESTful API Development", "CRUD", "Clean Architecture", "CI/CD"],
            soft: ["Problem-Solving", "Adaptability", "Team Collaboration", "Time Management", "Effective Communication", "Critical Thinking", "Creativity", "Work Ethic"]
        }
    return(
        <>
        <section >
            <h2 className="font-bold text-5xl ml-10 relative">
                About
                <div className="absolute -bottom-4 left-[3vh] transform -translate-x-1/2 w-15 h-1 bg-[#3125d4] rounded-full"></div>
            </h2>
            <section className="text-2xl p-10">
                <p className="text-center border p-5 border-[#212121] shadow-black shadow-sm rounded-lg leading-relaxed">
                    Hi! I'm Marck Justine Guiaz, a fresh graduate in <span>Computer Engineering</span> from Lyceum of Alabang.
                    <br /><br/>
                    I specialize in web development and have hands-on experience in building responsive and dynamic web applications. 
                    <br/>I'm proficient in <span>Java, C#, Python, JavaScript, React, Tailwind CSS </span>and have experience managing<br/> MySQL databases using DBeaver and Docker for deployment.
                
                    I'm a fast learner, highly adaptable, and passionate about problem-solving. I thrive in environments where I can continuously learn and contribute meaningfully through code.
                    <br /><br/>
                    My current goal is to grow and enhance my skills in software development, and <span>to be part of innovative projects that make a real impact.</span>
                </p>
                <h3 className="font-bold mt-10 text-5xl" >Skills</h3>
                
                <h4 className=" mt-[5vh]">Technical Skills</h4>
                <div className="grid grid-cols-4 mb-[5vh] gap-4 mt-5">
                    {skills.technical.map((skills,index) => (
                        <div key={index} 
                        className="bg-[#5c5c5c3f] rounded-[5px] border-[#212121] shadow-black shadow-sm p-3">
                            <p>{skills}</p>
                        </div>
                    ))}
                </div>
                <h4>Soft Skills</h4>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    {skills.soft.map((skills,index) => (
                        <div key={index} className="bg-[#5c5c5c3f] rounded-[5px] border-[#212121] shadow-black shadow-sm p-3">
                            <p>{skills}</p>
                        </div>
                    ))
                    }
                </div>
            </section>
        </section>
        </>
    );
}export default About