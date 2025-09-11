//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
//components
import About from './About'
import Project from './Project';
import Blog from './Blog';
//hooks
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
//files and images
import Resume from './assets/files/Resume.pdf'
import pfp from './assets/pfp.jpg';

function App(){
    //information to para don sa 1st container wag mo kakalimutan gumamit ako ng hashmap 
    const infoItems = [
  { 
    icon: faSchool, 
    label: "School", 
    value: "Lyceum of Alabang" 
  },
  { 
    icon: faCode, 
    label: "Focus on", 
    value: "Software Developer" 
  },
  { 
    icon: faLocation, 
    label: "Country", 
    value: "Philippines" 
  },
  { 
    icon: faFile, 
    label: "My Resume",
    value: "Downloadable",
    link: Resume 
  }
];
    //para to sa active tab don sa 2nd container
    const [active, setActive] = useState('about')
    return(
        <>
            {/* main container - RESPONSIVE: stack on mobile, side-by-side on lg+ */}
        
            <div className="flex flex-col lg:flex-row items-center 2xl:w-[190vh] lg:w-[190vh] md:w-[40vh] sm:p-8 lg:pr-30 2xl:ml-20 lg:ml-20 gap-6 lg:gap-10">
                
                {/* first container - RESPONSIVE: full width on mobile, fixed width on lg+ */}
                <div className="w-[80%] mt-[5vh] lg:mt-[4vh] 2xl:mt-[4vh] pt-10 2xl:h-[85vh] lg:h-[85vh] lg:w-auto rounded-[15px] lg:bg-[#212121] pr-6 lg:pr-10 pb-6 pl-6 lg:pl-10 ">
                    <div className="rounded-[15px]  lg:bg-[#5c5c5c3f] m-[10 p-4 lg:m-[0] lg:p-10">
                        <img src={pfp} alt="profile picure" className='w-full h-auto  max-w-48 mx-auto lg:mx-0 p-0 m-0 lg:rounded-[1vh] rounded-[100%] '/>
                    </div>
                    
                    {/* RESPONSIVE: center text on mobile, left on lg+ */}
                    <p className='text-lg sm:text-xl lg:text-[20px] text-center lg:text-left lg:ml-2 mt-5 font-bold items-center'>
                        Marck Justine Guiaz
                    </p>
                    
                    <div className="mt-5 mb-2 lg:mb-10 p-2 text-center rounded-[5px] bg-[#5c5c5c3f]">
                        <p className="font-bold  text-sm sm:text-base">Computer Engineer</p>
                    </div>
                    
                    <hr className='hidden lg:block'/>
                    
                    {/* baka makalimutan mo puro function at, if else lang yan HAHAHAH */}
                    <section>
                        <div className="grid items-center grid-cols-2 lg:grid-cols-1 gap-y-4 lg:gap-y-6 pt-4 lg:pt-[3vh]">
                            {infoItems.map((item, index) => (
                                <div key={index} className="flex items-center pt-2 lg:pt-[1vh]">
                                    <div className="p-2 lg:p-3">
                                        <FontAwesomeIcon icon={item.icon} className="text-[1.5vh]" />
                                    </div>
                                {item.link ? (
                                    <a href={item.link} download className="ml-2 font-bold text-sm sm:text-base">            
                                        {item.label}
                                    </a>
                                ):(           
                                    <div className="ml-2 text-sm sm:text-base">
                                        {item.label}: <br /> {item.value}
                                    </div>
                                )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
                
                {/* second container - RESPONSIVE: full width on mobile, constrained on lg+ */}
                <div className='w-[80%] 2xl:h-[85vh] lg:h-[85vh] lg:mt-[4vh] lg:bg-[#212121] rounded-[15px] 2xl:w-full 2xl:max-w-360 lg:w-full lg:max-w-360  overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' >
                    
                    {/* RESPONSIVE: center nav on mobile, right-aligned on lg+ */}
                    <ul className='flex gap-3 sm:gap-5 justify-center lg:justify-center 2xl:ml-250 lg:ml-250 pt-2 2x;:pt-10 lg:pt-10 px-[8vh] 2xl:px-0 lg:px-0 font-bold text-lg sm:text-xl lg:text-2xl '>
                        <li className={`p-2 rounded-[5px] cursor-pointer text-sm sm:text-base lg:text-2xl ${active === 'about' ? 'bg-[#5c5c5c3f] text-white shadow-black shadow-sm ' : 'bg-[#5c5c5c3f]'}`}
                            onClick={() => setActive('about')} >
                            About
                        </li>
                        <li className={`p-2 rounded-[5px] cursor-pointer text-sm sm:text-base lg:text-2xl ${active === 'project' ? 'bg-[#5c5c5c3f] text-white shadow-black shadow-sm ' : 'bg-[#5c5c5c3f]'}`}
                            onClick={() => setActive('project')}>
                            Project
                        </li>
                        <li className={`p-2 lg:mr-20 rounded-[5px] cursor-pointer text-sm sm:text-base lg:text-2xl ${active === 'blog' ? 'bg-[#5c5c5c3f] text-white shadow-black shadow-sm ' : 'bg-[#5c5c5c3f]'}`}
                            onClick={() => setActive('blog')}>
                            Blog
                        </li>
                    </ul>
                    
                    <AnimatePresence mode="wait">
                        {active === 'about' && (
                            <motion.div
                            key="about"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="p-4 lg:p-5"
                            >
                            <About />
                            </motion.div>
                        )}
                        {active === 'project' && (
                            <motion.div
                            key="project"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="p-4 lg:p-5"
                            >
                            <Project />
                            </motion.div>
                        )}
                        {active === 'blog' && (
                            <motion.div
                            key="blog"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="p-4 lg:p-5"
                            >
                            <Blog />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
           

        </>
    );
} 

export default App