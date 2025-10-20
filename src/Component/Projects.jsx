import { FaGithub } from "react-icons/fa";
import InterHostelCart from "../Assest/InterHostelCart.png";
import SkillHub from "../Assest/SkillHub.png";
import Shopeur from "../Assest/Shopeur.png"
import Shopeur2 from "../Assest/Shopeur2.png"
import Shopeur3 from "../Assest/Shopeur3.png"
import Shopeur4 from "../Assest/Shopeur4.png"
import Weather from "../Assest/Weather.png";
import SkillHubVideo from "../Assest/SkillHubVideo.mp4";
import Slider from 'react-slick';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const projectsData = [
    {
      title: 'SkillHub',
      description: 'A web app for seekers to search & rent skills from providers with real-time engagement.',
      technology: 'MERN Stack, Socket.IO, WebRTC',
      github: 'https://github.com/aditinageshwar/RentSkill',
      photo: SkillHub,
      videos: SkillHubVideo,
    },
    {
      title: 'Inter Hostel Cart',
      description: 'A web app for MANIT hostel students to buy and sell second-hand items.',
      technology: 'React, Node.js, Express.js, MySQL, Socket.IO',
      github: 'https://github.com/aditinageshwar/InterHostelCart',
      photo: InterHostelCart,
    },
    {
      title: 'Shopeur',
      description: 'Responsive e-commerce website designed to mimic the core functionalities of a popular platform like Myntra.',
      technology: 'HTML, CSS, JavaScript',
      github: 'https://github.com/aditinageshwar/Shopeur',
      photos: [Shopeur, Shopeur2, Shopeur3, Shopeur4],
    },
  ];

  const projectRefs = useRef([]);
  const headingRef = useRef(null); 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([headingRef.current], {
      opacity: 0,
      scale: 0.5,
    });
       
    gsap.to(headingRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: 
      {
        trigger: headingRef.current,
        start: 'top 90%', 
        end: 'top 10%',
        scrub: 1, 
      },
    });

    projectRefs.current.forEach((pr, index) => {
      gsap.fromTo(pr,
      { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: 
        {
          trigger: pr,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      });
    });
  }, []);

  return (
   <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12" ref={headingRef}>My <span className="text-yellow-500 dark:text-cyan-500">Projects</span> </h2>
    {projectsData.map((project, index) => (   
      <div key={index} 
        ref={(el) => projectRefs.current[index] = el}
        className={`flex flex-col md:flex-row items-center justify-evenly mb-20 ${index % 2 === 0? 'md:flex-row-reverse' : ''}`}
      > 
          
        {project.photos ? (
            <div className="w-1/2 md:w-1/3">
              <Slider {...settings}>
                {project.photos.map((photo, i) => (
                  <div key={i}>
                    <img src={photo} className="w-full h-auto rounded-md shadow-sm" />
                  </div>
                ))}
              </Slider>
            </div>
          ) : 
        project.videos ? (
            <div className="w-1/2 md:w-1/3">
              <video
                controls 
                src={project.videos}
                poster={project.photo}
                muted
                className="w-full h-auto rounded-md shadow-sm"
              />
            </div>
          ) : (
        <img 
          src={project.photo} 
          alt={project.title} 
          className="w-1/2 md:w-1/3 rounded-md shadow-lg"
        />
        )}

        <div className="md:w-1/3 p-6 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="mb-2 text-gray-700 dark:text-gray-300">{project.description}</p>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-300"><strong className="text-lg">Technologies:</strong> {project.technology}</p>
          <a href={project.github} target="_blank" className="text-2xl text-cyan-900 dark:text-gray-400"> <FaGithub/> </a>
        </div>
      </div>      
    ))}
   </div>
  );
}
export default Projects