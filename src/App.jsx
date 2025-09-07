import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import About from './About'
import Project from './Project';
import Blog from './Blog';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Resume from './assets/files/Resume.pdf'
import pfp from './assets/image/pfp.jpg';

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
    label: "Position", 
    value: "Developer" 
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
            {/* main container */}
            <div className="flex ml-20 mt-20 gap-10 max-h-200">
                {/* gusto ko sana i loop nalang din to kaso tinatamad pa ako */}
            <div className="rounded-[15px] bg-[#212121] pt-10 pr-10 pb-25 pl-10">
                <div className="rounded-[15px] bg-[#5c5c5c3f] p-10">
                    <img src={pfp} alt="profile picure" className='p-0 m-0'/>
                </div>
                <p className='text-[20px] ml-2 mt-5 font-bold items-center'>Marck Justine Guiaz</p>
                <div className="mt-5 mb-10 p-2 text-center rounded-[5px] bg-[#5c5c5c3f]">
                    <p className="font-bold">Computer Engineer</p>
                </div>
                <hr/>
                {/* baka makalimutan mo puro function at, if else lang yan HAHAHAH */}
                <section>
                    <div className="grid grid-cols-1 gap-y-6 pt-[3vh]">
                        {infoItems.map((item, index) => (
                            <div key={index} className="flex items-center pt-[1vh]">
                                <div className="p-3 rounded-[10px] bg-[#5c5c5c3f]">
                                    <FontAwesomeIcon icon={item.icon} className="text-xs" />
                                </div>
                            {item.link ? (<a href={item.link} download className="ml-2 text-blue-500">            
                            {item.label}
                            </a>
                            ):(           
                                <div className="ml-2">
                                {item.label}: <br /> {item.value}
                                </div>)}
                            </div>
                        ))}
            </div>
                </section>

            </div>
            {/* second container */}
            <div className='bg-[#212121] mr-15 rounded-[15px] max-w-360 max-h-500 overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' >
                <ul className='flex gap-5 ml-265 pt-10 font-bold text-2xl '>
                    <li className={`p-2 rounded-[5px] cursor-pointer ${active === 'about' ? 'bg-[#5c5c5c3f] text-white shadow-black shadow-sm ' : 'bg-[#5c5c5c3f]'}`}
    onClick={() => setActive('about')} >
                        About
                    </li>
                    <li className={`p-2 rounded-[5px] cursor-pointer ${active === 'project' ? 'bg-[#5c5c5c3f] text-white shadow-black shadow-sm ' : 'bg-[#5c5c5c3f]'}`}
    onClick={() => setActive('project')}>
                        Project
                    </li>
                    <li className={`p-2 mr-20 rounded-[5px] cursor-pointer ${active === 'blog' ? 'bg-[#5c5c5c3f] text-white shadow-black shadow-sm ' : 'bg-[#5c5c5c3f]'}`}
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
                    className="p-5"
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
                    className="p-5"
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
                    className="p-5"
    >
      <Blog />
    </motion.div>
  )}
</AnimatePresence>

            </div>
        </div>

        </>
    );
} export default App