import { IoIosSend } from "react-icons/io";
import { FaTelegram, FaRegArrowAltCircleUp, FaInstagramSquare  } from "react-icons/fa";
import { SiLinkedin} from "react-icons/si";
import { Link } from 'react-scroll';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const contactRef = useRef(null); 
  const formRef = useRef(null); 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = [contactRef.current, formRef.current];
    gsap.set(elements, {
      opacity: 0,
      scale: 0.5,
    });

    elements.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom', 
          end: 'bottom top',
          scrub: 1, 
        },
      });
    });
  }, []);

  return (
    <>
     <div className="flex items-center justify-evenly">
      <div className="mt-[-100px]" ref={contactRef}>
        <h2 className="text-3xl font-bold mb-4">Contact <span className="text-yellow-500 dark:text-cyan-500"> Me.. </span></h2>
        <p className="text-xl text-semibold text-gray-700 dark:text-gray-300">Fill the form to connect if any query or </p>
        <p className="text-xl text-semibold mb-10 text-gray-700 dark:text-gray-300">need beautiful design for your website.</p>
        <p className="text-gray-600 dark:text-gray-400">+91-9340520507</p>
        <p className="text-gray-600 dark:text-gray-400">aditinageshwar7@gmail.com</p>
        <ul className="flex space-x-6 mt-8">
          <li><a href="https://www.linkedin.com/in/aditinageshwar" className="text-2xl text-[#0077B9]"><SiLinkedin/> </a></li>
          <li><a href="https://www.instagram.com/aditi_nagesh15" className="text-3xl text-pink-700"><FaInstagramSquare/> </a></li>
          <li><a href="https://web.telegram.org/k/#@aditiNagesh" className="text-3xl text-[#0088cc] "><FaTelegram/> </a></li>
        </ul>
      </div> 
      <div> 
       <form action="https://formspree.io/f/xlddkqjv" method="POST" className="w-[600px] space-y-4" ref={formRef}>
        <input 
           type="text" 
           name="name" 
           placeholder="Your Name" 
           className="w-full p-2 border-2 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-1 focus:ring-yellow-500 dark:bg-slate-600 dark:border-0"
           required
        />
        <input 
           type="email" 
           name="email" 
           placeholder="Your Email Address" 
           className="w-full p-2 border-2 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-1 focus:ring-yellow-500 dark:bg-slate-600 dark:border-0"
           required 
        />
        <input 
           type="tel" 
           pattern="[0-9]{10}" 
           name="mobile" 
           placeholder="Your Mobile Number"
           className="w-full p-2 border-2 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-1 focus:ring-yellow-500 dark:bg-slate-600 dark:border-0" 
           required 
        />
        <textarea 
           name="message" 
           cols="35" rows="5" 
           placeholder="Write your message.." 
           className="w-full p-2 border-2 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-1 focus:ring-yellow-500 dark:bg-slate-600 dark:border-0"
           required
        />
        <div className="flex justify-center">
          <button 
           type="submit"
           className="flex items-center gap-1 bg-yellow-500 text-lg p-1 px-4 rounded-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-600 dark:bg-cyan-500 dark:hover:bg-cyan-600"
          > 
            <IoIosSend />
            Send 
          </button>
        </div>
       </form>
      </div>
     </div>

     {/* Footer */}
     <p className="bg-gray-300 dark:bg-slate-900 p-6 mt-16 flex items-center justify-center gap-20">
      © Copyright Aditi Nageshwar 2025. All Rights Reserved.
      <Link to="home" smooth={true} className="text-xl text-yellow-800 hover:scale-110 hover:mt-[-5px] dark:text-slate-300"> <FaRegArrowAltCircleUp/> </Link>
     </p> 
    </> 
  );
}
export default Contact;