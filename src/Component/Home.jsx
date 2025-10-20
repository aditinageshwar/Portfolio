import image from "../Assest/Aditi.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin, SiGmail} from "react-icons/si";
import Shadow from "./Shadow";
import { Typewriter } from 'react-simple-typewriter';
import React, {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';

function Home()
{
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };

  const headingRef = useRef(null); 
  const subheadingRef = useRef(null); 
  const contentRef = useRef(null); 
  const buttonRef = useRef([]); 
  const iconRef = useRef([]); 
  
  useEffect(() => {
  gsap.fromTo(headingRef.current,
    { opacity: 0, x: -50 },  
    { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.5 } 
  );

  gsap.fromTo(subheadingRef.current,
    { opacity: 0, x: -50 },  
    { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1 }
  );

  gsap.fromTo(contentRef.current,
    { opacity: 0, x: -50 },  
    { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1.3 } 
  );

  gsap.fromTo(buttonRef.current,
    { opacity: 0, x: -50 },  
    { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 1.5 } 
  );

  gsap.fromTo(iconRef.current,
    { opacity: 0, x: -50 },  
    { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 2 } 
  );
}, []);

  return (
      <div className="flex justify-center min-h-screen mb-[-300px]">  
        <div className="w-[45%]">
          <h1 className="text-xl font-bold mb-4" ref={headingRef}>Hello, I'm </h1>
          <h1 className="text-5xl font-bold mb-4" ref={subheadingRef}> Aditi Nageshwar</h1>
          <h1 className="text-3xl font-bold mb-3 text-yellow-500 dark:text-cyan-500">
            <Typewriter
             words={['A MERN Stack Web Developer', 'Competent in Java Programming', 'Passionate about Data Structures & Algorithms', 'Skilled in SQL']}
             loop={true}
             cursor
             cursorStyle='|'
             typeSpeed={90}
             deleteSpeed={50}
             delaySpeed={1000}
            />
          </h1>

          <p className="text-lg text-gray-700 mb-6 dark:text-gray-300" ref={contentRef}>
            Currently undertaking the MCA program at NIT Bhopal (MANIT), graduating in 2026. An active member of the Management Team at the Matrix Club, MANIT.
          </p>
          <div className="flex items-center space-x-4" ref={buttonRef}>
            <a href="https://www.linkedin.com/messaging/compose/?recipient=aditinageshwar" 
              className="font-semibold text-lg px-4 py-1 border-yellow-500 border-2 text-yellow-500 rounded-lg dark:bg-cyan-500 dark:text-slate-800 dark:hover:bg-cyan-600 dark:border-2 dark:border-cyan-500">
              Hire Me
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1NqtYeK3quh5TKgFtFJunF_LKnKs0hZP6" 
              className="flex items-center font-semibold text-lg px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 dark:bg-slate-800 dark:text-cyan-500 dark:border-2 dark:border-cyan-500">
              Resume
              <MdOutlineFileDownload className="ml-2" />
            </a>
          </div>
          <ul className="flex space-x-6 mt-8" ref={iconRef}>
            <li><a href="https://github.com/aditinageshwar" className="text-2xl text-gray-600 dark:text-gray-300"><FaGithub/> </a></li>
            <li><a href="https://www.linkedin.com/in/aditinageshwar" className="text-2xl text-gray-600 dark:text-gray-300"><SiLinkedin/> </a></li>
            <li><a href="https://mail.google.com/mail/u/0/?fs=1&to=aditinageshwar7@gmail.com&tf=cm" className="text-2xl text-gray-600 dark:text-gray-300"><SiGmail/> </a></li>
          </ul>  
        </div>

        <div className="relative mt-[-150px]">
          {!loading && <Shadow className="absolute left-40" />}
          <img 
            src={image} 
            className="h-[400px] w-[400px] mt-[-50px] rounded-full z-5 absolute left-[150px] top-[150px]" 
            alt="profile" 
            onLoad={handleImageLoad} 
          />    
        </div>
      </div>
  );
}
export default Home;