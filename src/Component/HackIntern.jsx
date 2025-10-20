import React from 'react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HackIntern = () => {
    const headingRef = useRef(null); 
    const divRef1 = useRef([]);
    const divRef2 = useRef([]);
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = [
    { ref: headingRef, start: 'top 90%', end: 'top 10%', duration: 1 },
    { ref: divRef1, start: 'top 70%', end: 'bottom 30%', duration: 1.5 },
    { ref: divRef2, start: 'top 70%', end: 'bottom 30%', duration: 1.5 },
  ];

  elements.forEach(({ ref, start, end, duration }) => {
    gsap.set(ref.current, { opacity: 0, scale: 0.5 });

    gsap.to(ref.current, {
      opacity: 1,
      scale: 1,
      duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub: 1,
      },
    });
  });

  // cleanup scroll triggers when component unmounts
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div className="mt-[-100px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12" ref={headingRef}><span className='text-yellow-500 dark:text-cyan-500'>Hackathons </span> 
        & <span className='text-yellow-500 dark:text-cyan-500'>Internships</span>
      </h2>

      {/* Grid Layout for a modern, two-column presentation */}
      <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Item 1: BNP Paribas Hackathon */}
                <div
                    className="p-6 md:p-8 border border-gray-200 bg-white rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] dark:bg-slate-600 dark:border-slate-600"
                    ref={divRef1}
                >
                    <h3 className="font-bold text-2xl mb-2 text-yellow-400 dark:text-cyan-400">
                        🏆 BNP Paribas Hackathon 2025
                    </h3>
                    <p><strong>Role:</strong> Frontend Developer</p>
                    <p className="text-gray-600 dark:text-gray-300"><strong className='text-white'> Description: </strong>
                      Led the frontend development of AML 360, an Anti-Money Laundering system for real-time transaction monitoring. Built interactive React landing pages and Streamlit multi-page frontend for transaction uploads, KPI dashboards and more.</p>
                    <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300"><strong>Skills: </strong>
                        React, Tailwind CSS, Python, Streamlit
                    </p>
                    <a href="https://github.com/aditinageshwar/AmlGuard" className='inline-block mt-4 px-3 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700 transition-colors duration-200 dark:bg-cyan-500 dark:hover:bg-cyan-600'>View More</a>
                </div>

                {/* Item 2: IBM SkillsBuild Internship */}
                <div
                    className="p-6 md:p-8 border border-gray-200 bg-white rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] dark:bg-slate-600 dark:border-slate-600"
                    ref={divRef2}
                >
                    <h3 className="font-bold text-2xl mb-2 text-yellow-400 dark:text-cyan-400">
                        🎓 Web Development Internship Program by IBM SkillsBuild
                    </h3>
                    <p><strong>Role:</strong> Frontend Developer</p>
                    <p className="text-gray-600 dark:text-gray-300"><strong className='text-white'> Description: </strong> 
                        Developed a web platform to help expecting parents stay organized and informed throughout their pregnancy. Features included tracking baby’s growth, managing appointments, vaccination reminders, and emergency support access.
                    </p>
                    <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300"><strong>Skills: </strong>
                        HTML, TailwindCSS, JavaScript
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HackIntern;
