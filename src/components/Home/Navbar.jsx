import React from "react";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const navItems = ["WORK", "SERVICES", "FOURWARD", "ABOUT", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-transparent z-50 text-gray-700 font-formula bg-cyan-500 tracking-[0.5rem] text-[1.5rem] font-bold">
      <ul className="flex items-center justify-between mx-6 gap-10 h-full tracking-[0.1rem] text-white text-2xl font-bold">
        {navItems.map((item, index) => (
          <li key={index}>
            <AnimatedText
              text={item}
              customClasses={
                item === "FOURWARD"
                  ? "text-gray-200 text-3xl tracking-widest font-formula font-extrabold hover:text-white hover:opacity-100"
                  : "text-gray-200 opacity-80 text-xl font-semibold hover:text-white hover:opacity-100"
              }
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;



// import React from 'react';

// const Navbar = () => {
//   const navItems = ['WORK', 'SERVICES', 'FOURWARD', 'ABOUT', 'CONTACT'];

//   return (
//     <nav className="fixed top-0 left-0 w-full h-16 bg-transparent z-50 text-gray-700 font-formula bg-cyan-500 tracking-[0.5rem] text-[1.5rem] font-bold">
//       <ul className="flex items-center justify-between mx-6 gap-10 h-full tracking-[0.1rem] text-white text-2xl font-bold">
//         {navItems.map((item, index) => (
//           <li key={index}>
//             <a
//               href={`#${item}`}
//               data-link-alt={item}
//               className={`${
//                 item === 'FOURWARD'
//                   ? 'text-red-500 text-3xl tracking-widest font-formula font-extrabold relative block overflow-hidden'
//                   : 'text-red-500 opacity-80 text-xl font-semibold relative block overflow-hidden'
//               }`}
//             >
//               <span className="block transition-transform transform hover:-translate-y-full hover:opacity-0 duration-500">{item}</span>
//               <span className="absolute left-0 top-full opacity-0 hover:opacity-100 hover:top-0 transition-all duration-500" aria-hidden="true">{item}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// a[data-link-alt] {
//   position: relative;
//   display: block;
//   overflow: hidden;
// }

// a[data-link-alt] > span {
//   display: block;
//   transition: transform 0.5s, opacity 0.5s;
// }

// a[data-link-alt] > span:nth-child(2) {
//   position: absolute;
//   left: 0;
//   top: 100%;
//   opacity: 0;
//   transition: all 0.5s;
// }

// a[data-link-alt]:hover > span:nth-child(1) {
//   transform: translateY(-100%);
//   opacity: 0;
// }

// a[data-link-alt]:hover > span:nth-child(2) {
//   top: 0;
//   opacity: 1;
// }
