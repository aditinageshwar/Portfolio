import { Link } from 'react-scroll';
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import ThemeToggle from './Component/ThemeToggle';
import React, {useEffect,useRef} from 'react';
import gsap from 'gsap';

function App() {
  const menuRef = useRef(null); 
  const buttonRef = useRef(null); 
  const toggleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(menuRef.current,
      { opacity: 0, y: -50 },  
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 } 
    );
    gsap.fromTo(buttonRef.current,
      { opacity: 0, y: -50 },  
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 } 
    );
    gsap.fromTo(toggleRef.current,
      { opacity: 0, y: -50 },  
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 } 
    );
  }, []);

  return (
    <div className='bg-gray-50 dark:bg-slate-800 dark:text-white'>
     <nav className="w-full p-6 bg-white shadow-lg flex justify-between fixed z-10 dark:bg-slate-900">
        <div className="text-2xl font-bold ml-[50px]">
          <h1 className='text-yellow-500 dark:text-cyan-500'>Aditi Nageshwar</h1>
        </div>
        <ul className="flex ml-[600px] space-x-8" ref={menuRef}>
          <li><Link to="home" smooth={true} className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-yellow-600 dark:text-white dark:hover:text-cyan-500">Home</Link></li>
          <li><Link to="about" smooth={true} className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-yellow-600 dark:text-white dark:hover:text-cyan-500">About Me</Link></li>
          <li><Link to="skills" smooth={true} className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-yellow-600 dark:text-white dark:hover:text-cyan-500">Skills</Link></li>
          <li><Link to="project" smooth={true} className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-yellow-600 dark:text-white dark:hover:text-cyan-500">Projects</Link></li>
          <li><Link to="contact" smooth={true} className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-yellow-600 dark:text-white dark:hover:text-cyan-500">Contact</Link></li>
        </ul>
        <a href="https://drive.google.com/file/d/1HTHOuQl3GFnpEAo29KvxsG68e8UpPvci/view?usp=sharing" 
          className="font-semibold text-white text-lg px-2 py-1 bg-yellow-500 border-2 rounded-lg mt-[-5px] hover:bg-yellow-600 dark:border-0 dark:bg-cyan-500 dark:hover:bg-cyan-600"
          ref={buttonRef}
        >
          Resume
        </a>
        <div className='ml-4 mr-[-10px] mt-1' ref={toggleRef}>
          <ThemeToggle/>
        </div>
      </nav>

      <div className="pt-16">
        <div id="home" className='pt-52'>
          <Home />
        </div>
        <div id="about" className='pt-28'>
          <About />
        </div>
        <div id="skills" className='pt-28'>
          <Skills />
        </div>
        <div id="project" className='pt-28'>
          <Projects />
        </div>
        <div id="contact" className='pt-24'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
export default App;