import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";

import resWeb from './assets/image/responsiveWeb.png';

function About(){
    const swiperRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const skills ={
            technical: ["Java", "JavaScript", "Python", "React.js", "ASP.NET Core", "HTML & CSS", "Tailwind", "Docker", "GitHub Desktop", "GitHub", "Postman", "MySQL", "Entity Framework", "LINQ", "RESTful API Development", "CRUD", "Clean Architecture", "CI/CD"],
            soft: ["Problem-Solving", "Adaptability", "Team Collaboration", "Time Management", "Effective Communication", "Critical Thinking", "Creativity", "Work Ethic"],
            certificate: [
                {title : "Responsive Web Design", img: resWeb, url: `https://www.freecodecamp.org/certification/fccf70b1170-73bb-4826-9254-66570a1db65a/responsive-web-design`},
                
            ],
        }

    const updateButtonStates = (swiper) => {
        if (prevButtonRef.current && nextButtonRef.current) {
            // Update prev button opacity
            if (swiper.isBeginning) {
                prevButtonRef.current.style.opacity = '0.3';
            } else {
                prevButtonRef.current.style.opacity = '1';
            }

            // Update next button opacity
            if (swiper.isEnd) {
                nextButtonRef.current.style.opacity = '0.3';
            } else {
                nextButtonRef.current.style.opacity = '1';
            }
        }
    };

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


                <h3 className="font-bold mt-15 text-5xl" >Certifications</h3>
                <div className="ml-[20vh] mt-[5vh] relative w-full max-w-[100vh]">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        onSwiper={(swiper) => {
                            // Initial button state
                            updateButtonStates(swiper);
                        }}
                        onSlideChange={(swiper) => {
                            // Update button states when slide changes
                            updateButtonStates(swiper);
                        }}
                        className="w-full max-w-[120vh] "
                        >
                    {skills.certificate.map((cert,index) => (
                        <SwiperSlide key={index}>
                            <a href={cert.url} rel="noopener noreferrer"><img src={cert.img} alt={cert.title}/></a>
                        </SwiperSlide>
                    ))}
                   </Swiper>                 
                {/* Custom arrows outside image */}
                    <button 
                        ref={prevButtonRef}
                        className="custom-prev absolute -left-12 top-1/2 -translate-y-1/2 text-white text-4xl z-20 transition-opacity duration-300"
                        style={{opacity: '0.3'}}
                    >
                        &#10094; {/* Left arrow symbol */}
                    </button>
                    <button 
                        ref={nextButtonRef}
                        className="custom-next absolute -right-12 top-1/2 -translate-y-1/2 text-white text-4xl z-20 transition-opacity duration-300"
                    >
                        &#10095; {/* Right arrow symbol */}
                    </button>
                    
                </div>
            </section>
        </section>
        </>
    );
}export default About