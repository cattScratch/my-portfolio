function About(){
    return(
        <>
        <section >
            <h2 className="font-bold text-5xl mb-10 text-center relative">
                About
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <section className="text-2xl p-10">
                <p className="text-center border p-5 border-gray-300 shadow-black shadow-sm rounded-lg leading-relaxed">
                    Hi! I'm Marck Justine Guiaz, a fresh graduate in <span>Computer Engineering</span> from Lyceum of Alabang.
                    <br /><br/>
                    I specialize in web development and have hands-on experience in building responsive and dynamic web applications. 
                    <br/>I'm proficient in <span>Java, C#, Python, JavaScript, React, Tailwind CSS </span>and have experience managing<br/> MySQL databases using DBeaver and Docker for deployment.
                
                    I'm a fast learner, highly adaptable, and passionate about problem-solving. I thrive in environments where I can continuously learn and contribute meaningfully through code.
                    <br /><br/>
                    My current goal is to grow and enhance my skills in software development, and <span>to be part of innovative projects that make a real impact.</span>
                </p>
            
            </section>
        </section>
        </>
    );
}export default About