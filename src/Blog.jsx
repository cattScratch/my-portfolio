import {VerticalTimeLine, VerticalTimelineElement, VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Blog(){
    const timelineData = [
  {
    date: "2021 (Student)",
    background: "#5c5c5c3f",
    textColor: "#fff",
    iconBg: "#212121",
    iconColor: "#000000",
    content: "1st Year of College, language that they taught us was Java with few activities and Data Structure."
  },
  {
    date: "2022 (Student)",
    background: "#5c5c5c3f",
    textColor: "#fff",
    iconBg: "#212121",
    iconColor: "#fff",
    content: "We still using java and make a project with it, but aside from that I tried to learned Web Development that is where I found FreeCodeCamp."
  },
  {
    date: "2023 (Student)",
    background: "#5c5c5c3f",
    textColor: "#fff",
    iconBg: "#212121",
    iconColor: "#fff",
    content: "We use different language like python and learned Operating Systems, BASH, Networking and technoprenuership."
  },
  {
    date: "2024 (Student)",
    background: "#5c5c5c3f",
    textColor: "#fff",
    iconBg: "#212121",
    iconColor: "#fff",
    content: "We used arduino for our embedded system subject, and use C for programming it. Also I tried to learn React.js and Tailwind CSS"
  },
  {
    date: "2025 (Student)",
    background: "#5c5c5c3f",
    textColor: "#fff",
    iconBg: "#212121",
    iconColor: "#fff",
    content: "I become backend developer Intern at MONAD Solutions, my mentor is approachable and kind, I learned a lot from him. And our capstone we use python to program the uniAR: Uniform Fitting Kiosk using Augmented Reality"
  },
];

    return(
        <>
            <h2 className="font-bold text-[2vh] lg:text-5xl lg:ml-10 relative">
                Blog
                <div className="absolute hidden lg:block lg:-top-2 lg:mt-[7vh] -right-0 mr-[29.5vh] lg:mr-[121.5vh] transform -translate-x-1/2 w-5 lg:w-15 h-1 bg-[#3125d4] rounded-full"></div>
            </h2>
        <section>
            <section className="text-2xl pt-5 pb-10">
                <p className="text-[2vh] border p-5 border-[#212121] shadow-black shadow-sm rounded-lg leading-relaxed">
                    <h3 className="font-bold">Introduction</h3><br/>
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
                            iconStyle={{ background: item.iconBg, color: item.iconColor, boxShadow: "black 0px 0px 1vh" }}>
                            <p>{item.date}</p>
                            <p>{item.content}</p>
                        </VerticalTimelineElement>))}
                        </VerticalTimeline>
                    <p className="text-[2vh] border p-5 border-[#212121] shadow-black shadow-sm rounded-lg leading-relaxed">
                            Now I am a Graduate from being student, I'm Currently trying to patch some of my knowledge gaps and enhance my skills not only in web development but also
                            in Data Structure and ALgorithms.
                            <br/><br/>
                            For now this is only a simple blog page, but in the future I plan to add more features because if this became long it is pain in the ass to those people who read this,
                            I'm also trying to keep this as summarize as possible because I know most of the people ain't reading alot.
                    </p>

                    </section>
            </section>
        </section>   
        </>
    );
    
} export default Blog