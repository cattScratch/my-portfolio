//Timeline
import {VerticalTimeLine, VerticalTimelineElement, VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect} from "react";

function Blog(){

    const[timelineData, timeline] = useState(null);

    // ADD THIS: Icon mapping to convert JSON strings to actual FontAwesome icons
    const iconMap = {
        'faSchool': faSchool,
        'faGraduationCap': faGraduationCap
    };

    useEffect(() => {
        fetch("/my-portfolio/timelineData.json")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch");
            return response.json();
        })
        .then((json) => timeline(json))
        .catch((error) => console.error("Error fetching data:", error));
    },[])

    if (!timelineData) return <p>Loading...</p>;

    return(
        <>
            <h2 className="font-bold text-2xl lg:text-5xl lg:ml-10 relative">
                Blog
                <div className="absolute hidden lg:block lg:-top-2 lg:mt-[7vh] -right-0 mr-[29.5vh] lg:mr-[121.5vh] transform -translate-x-1/2 w-5 lg:w-15 h-1 bg-[#3125d4] rounded-full"></div>
            </h2>
        <section>
            <section className="text-2xl pt-5 lg:p-[4vh] pb-10">
                <p className="text-[2vh] border p-5 border-[#212121] shadow-black shadow-sm rounded-lg leading-relaxed">
                    Hello, This is my first time creating a blog page. Once again
                    I am Marck, let cut the obvious part. In this part I'll be sharing My
                    journey as a developer, the challenges I've faced, and the Lessons I've learned along the way.<br/><br/>
                    So I'll start with my journey with this timeline.
                </p>
                <section>
                    <VerticalTimeline lineColor="#100c08">
                    {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--experience"
                        contentStyle={{ background: item.background, color: item.textColor, boxShadow: "none" }}
                        contentArrowStyle={{ borderRight: `7px solid ${item.background}` }}
                        iconStyle={{ background: item.iconBg, color: item.iconColor, boxShadow: "black 0px 0px 1vh" }}
                        icon={<FontAwesomeIcon icon={iconMap[item.icon] || faSchool} />}
                        >
                        <p>{item.date}</p>
                        <p>{item.content}</p>
                    </VerticalTimelineElement>))}
                    </VerticalTimeline>
                <p className="text-[2vh] border p-5 border-[#212121] shadow-black shadow-sm rounded-lg leading-relaxed">
                        During college I'm discovering what I want for myself so I tried alot of things such as cisco skillsforall basic networking,
                        freecodecamp, tryhackme, hackthebox. If you want to do capture the flag, I recommend to learn linux and BASH also a patience.  
                        Now I am a Graduate from being student, I'm Currently trying to patch some of my knowledge gaps and enhance my skills not only in web development but also
                        in Data Structure and Algorithms.
                        <br/><br/>
                        For now this is only a simple blog page, but in the future I plan to add more features because if this continued, it is pain in the ass for those people who tried read this,
                        I'm also trying to keep this as summarize as possible because I know most of the people ain't reading alot.
                </p>
                </section>
            </section>
        </section>   
        </>
    );
    
} 

export default Blog