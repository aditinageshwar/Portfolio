import ThreeScene from './ThreeScene';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const headingRef = useRef(null); 
  const subheadingRef = useRef(null); 
  const content1Ref = useRef(null); 
  const content2Ref = useRef(null); 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = [headingRef.current, subheadingRef.current, content1Ref.current, content2Ref.current];
    gsap.set(elements, {
      opacity: 0,
      scale: 0.5,
    });

    elements.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%', 
          end: 'top 10%',
          scrub: 1, 
        },
      });
    });
  }, []);

  return (
   <div className='flex items-center justify-evenly'> 
    <ThreeScene />
    <div className="container min-h-screen w-1/2 mb-[-350px]">
        <h2 className="text-3xl font-bold text-center mb-6" ref={headingRef}>About <span className="text-yellow-500 dark:text-cyan-500"> Me.. </span></h2>
        <h1 className="text-4xl font-semibold text-center mb-4" ref={subheadingRef}> I’m <span className="text-5xl font-bold text-yellow-500 dark:text-cyan-500">Aditi Nageshwar</span> from Bhopal, Madhya Pradesh</h1>
        <p className="text-lg text-gray-700 px-24 text-justify mb-4 dark:text-gray-300" ref={content1Ref}>
          A passionate and dedicated Master in Computer Applications (MCA) student at Maulana Azad National Institute of Technology, Bhopal. 
          With a solid foundation in computer science, I have developed a strong proficiency in various programming languages and frameworks.
          My skills span across the MERN stack and Java language. 
        </p>
        <p className="text-lg text-gray-700 px-24 text-justify dark:text-gray-300" ref={content2Ref}> 
          My passion for technology and problem-solving led me to secure impressive ranks in competitive exams like GATE-CSE and NIMCET. 
        </p>
    </div>
   </div> 
  );
}
export default About;