import React, { useState } from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

export default function ScrollDown() {
  // Create a hook using useState to manage the scroll position
   const [scrollPosition, setScrollPosition] = useState(true);
   // Function to handle scroll event
   function toggleScrollButton() {
     if (window.scrollX > 300) {
       setScrollPosition(true);
     } else {
       setScrollPosition(false);
     }
   }
   // Add event listener for scroll
   window.addEventListener("scroll", toggleScrollButton);
   // Remove event listener on component unmount
   // This is important to prevent memory leaks
   // return () => removeEventListener("scroll", toggleScrollButton);
 
   function scrollToDown() {
     window.scrollTo({
       bottom: 0,
       behavior: "smooth",
     });
   }
 
   return (
     <div>
       <button
         onClick={scrollToDown}
         className={`fixed bottom-20 right-3  lg:right-5 bg-[#ffffff85] text-2xl p-2 lg:p-3 shadow shadow-zinc-200 rounded-full lg:text-3xl ${
           scrollPosition ? "block" : "hidden"
         }`}
       >
         <MdKeyboardDoubleArrowDown />
       </button>
       {/* <div className="fixed bottom-20 right-3  lg:right-5 bg-[#ffffff85] text-2xl p-2 lg:p-3 shadow shadow-zinc-200 rounded-full lg:text-3xl">
         <MdKeyboardDoubleArrowDown />
       </div> */}
     </div>
   );
 }
