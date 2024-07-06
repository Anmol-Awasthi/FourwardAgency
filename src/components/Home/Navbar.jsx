import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navItems = ['WORK', 'SERVICES', 'FOURWARD', 'ABOUT', 'CONTACT'];
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach(item => {
      const word = item.querySelector('.word');
      const shadowWord = item.querySelector('.shadow-word');
      
      const hoverIn = () => {
        const letters = word.querySelectorAll('span');
        const shadowLetters = shadowWord.querySelectorAll('span');
        
        shadowLetters.forEach((letter, i) => {
          gsap.to(letter, { y: '100%', opacity: 0, delay: i * 0.05 });
          gsap.fromTo(letters[i], { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, delay: 0.5 + i * 0.05 });
        });
      };
      
      const hoverOut = () => {
        const letters = word.querySelectorAll('span');
        const shadowLetters = shadowWord.querySelectorAll('span');
        
        shadowLetters.forEach((letter, i) => {
          gsap.to(letter, { y: '-100%', opacity: 0, delay: i * 0.05 });
          gsap.fromTo(letters[i], { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, delay: 0.5 + i * 0.05 });
        });
      };
      
      item.addEventListener('mouseenter', hoverIn);
      item.addEventListener('mouseleave', hoverOut);
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-transparent z-50 font-formula tracking-wider text-xl font-bold">
      <ul className="flex items-center justify-between mx-6 gap-10 h-full text-white">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item === 'FOURWARD'
                ? 'text-gray-200 text-3xl tracking-widest font-extrabold cursor-pointer'
                : 'text-gray-200 opacity-80 text-xl font-semibold cursor-pointer'
            } relative overflow-hidden`}
            ref={el => itemsRef.current[index] = el}
          >
            <span className="word inline-block relative transition-opacity duration-300 ease-in-out">
              {item.split('').map((char, i) => (
                <span key={i} className="inline-block transition-transform duration-500">{char}</span>
              ))}
            </span>
            <span className="shadow-word absolute inline-block top-0 left-0 w-full text-center opacity-0 transition-opacity duration-300 ease-in-out">
              {item.split('').map((char, i) => (
                <span key={i} className="inline-block transition-transform duration-500">{char}</span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
