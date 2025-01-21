import java from "../Assest/java.png";
import bootstrap from "../Assest/bootstrap.png";
import C from "../Assest/C.png";
import css from "../Assest/css.png";
import dsa from "../Assest/dsa.png";
import express from "../Assest/express.png";
import git from "../Assest/git.png";
import html from "../Assest/html.png";
import javascript from "../Assest/javascript.png";
import mailer from "../Assest/mailer.png";
import mongodb from "../Assest/mongodb.png";
import nodeJs from "../Assest/nodeJs.png";
import postman from "../Assest/postman.png";
import python from "../Assest/python.png";
import react from "../Assest/react.png";
import socket from "../Assest/socket.png";
import sql from "../Assest/sql.png";
import tailwind from "../Assest/tailwind.png";
import webrtc from "../Assest/webrtc.png";

import React, {useEffect,useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: java },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'React', icon: react },
    { name: 'Node.js', icon: nodeJs },
    { name: 'Express.js', icon: express },
    { name: 'MongoDB', icon: mongodb },
    { name: 'C', icon: C },
    { name: 'Python', icon: python },
    { name: 'SQL', icon: sql },
    { name: 'Socket.IO', icon: socket },
    { name: 'WebRTC', icon: webrtc },
  ];
  const others = [
    { name: 'Git/GitHub', icon: git },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Postman', icon: postman },
    { name: 'Nodemailer', icon: mailer },
    { name: 'Data Structure & Algorithms', icon: dsa },
  ];

  const skillsRef = useRef([]);
  const othersRef = useRef([]);
  const headingRef = useRef(null); 
  const subheadingRef = useRef(null); 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = [headingRef.current, subheadingRef.current, ...skillsRef.current, ...othersRef.current];
    gsap.set(elements, {
      opacity: 0,
      scale: 0.5,
    });

    elements.forEach((el, index) => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1.5, 
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 10%',
          scrub: 2, 
        },
      });
    });
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center" ref={headingRef}> <span className="text-yellow-500 dark:text-cyan-500">My </span>Skills</h2>
      <p className="text-md text-gray-700 text-center mb-12 dark:text-gray-300" ref={subheadingRef}>What I am Expert In ?</p>
      <div className="flex flex-wrap justify-center gap-8 mx-32">
       {skills.map((skill, index) => (
        <div
          key={index}
          ref={(el) => skillsRef.current[index] = el}
          className="flex flex-col justify-center items-center sm:w-1/6 w-44 h-44 bg-white rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] dark:bg-slate-600"
        >
          <img src={skill.icon} alt={`${skill.name} Icon`} className="w-14 h-14 mb-2" />
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
        </div>
       ))}
      </div>

      <p className="font-semibold text-xl text-gray-700 ml-[150px] mt-12 mb-4 dark:text-gray-300">Others:</p>
      <div className="flex flex-wrap justify-center gap-8 mx-32">
       {others.map((skill, index) => (
        <div
          key={index}
          ref={(el) => othersRef.current[index] = el}
          className="flex flex-col justify-center items-center text-center sm:w-1/6 w-44 h-44 bg-white rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.2)] dark:bg-slate-600"
        >
          <img src={skill.icon} alt={`${skill.name} Icon`} className="w-14 h-14 mb-2" />
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{skill.name}</p>
        </div>
       ))}
      </div>
    </div>
  );
}
export default Skills;