import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import About from './About'
import Project from './Project';
import Contact from './Contact';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Resume from './assets/files/Resume.pdf'

function App(){
    
    const [active, setActive] = useState('about')
    return(
        <>
            <div className="flex ml-20 mt-20 gap-10">
            <div className="rounded-4xl bg-gray-400 pt-10 pr-10 pb-25 pl-10">
                <div className="rounded-4xl bg-gray-300 p-25 shadow-black shadow-sm">
                    <img/>
                </div>
                <div className="mt-10 p-2 text-center rounded-4xl bg-gray-300">
                    <p className="font-bold">Computer Engineer</p>
                </div>
                <section>
                    <div className='pt-10 flex items-center'>
                        <div className='pl-2 pr-2 rounded-4xl bg-gray-300'>
                            <FontAwesomeIcon icon={faPerson} className='text-sm'/>
                        </div>
                        &nbsp;Marck Justine Guiaz
                    </div>
                    <div className='pt-10 flex items-center'>
                        <div className='pr-1 pl-1 rounded-4xl bg-gray-300'>
                            <FontAwesomeIcon icon={faSchool} className='text-xs'/>
                        </div>
                        &nbsp;Lyceum of Alabang
                    </div>
                    <div className='pt-10 flex items-center'>
                        <div className='pl-1 pr-1 rounded-2xl bg-gray-300'>
                            <FontAwesomeIcon icon={faCode} className='text-xs'/>
                        </div>
                        &nbsp;Application Developer
                    </div>
                    <div className='pt-10 flex items-center'>
                        <div className='pl-1 pr-1 rounded-2xl bg-gray-300'>
                            <FontAwesomeIcon icon={faLocation} className='text-sm'/>
                        </div>
                        &nbsp;Philippines
                    </div>
                    <div className='pt-10 flex items-center'>
                        <div className='pl-1 pr-1 rounded-2xl bg-gray-300'>
                            <FontAwesomeIcon icon={faFile} className='text-sm'/>
                        </div>
                        <a href={Resume} download ><span>
                            &nbsp;My Resume</span></a>
                    </div>
                </section>
            </div>
            
            <div className='bg-gray-400 rounded-4xl max-w-360 max-h-500'>
                <ul className='flex gap-5 ml-265 pt-10 font-bold text-2xl'>
                    <li className={`p-2 rounded-2xl cursor-pointer ${active === 'about' ? 'bg-blue-500 text-white shadow-black shadow-sm ' : 'bg-gray-300'}`}
    onClick={() => setActive('about')} >
                        About
                    </li>
                    <li className={`p-2 rounded-2xl cursor-pointer ${active === 'project' ? 'bg-blue-500 text-white shadow-black shadow-sm ' : 'bg-gray-300'}`}
    onClick={() => setActive('project')}>
                        Project
                    </li>
                    <li className={`p-2 mr-20 rounded-2xl cursor-pointer ${active === 'contact' ? 'bg-blue-500 text-white shadow-black shadow-sm ' : 'bg-gray-300'}`}
    onClick={() => setActive('contact')}>
                        Contact
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
                {active === 'contact' && (
                    <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="p-5"
    >
      <Contact />
    </motion.div>
  )}
</AnimatePresence>

            </div>
        </div>

        </>
    );
} export default App