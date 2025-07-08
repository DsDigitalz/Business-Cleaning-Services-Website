import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
export default function ScrollUp() {
  // Create a hook using useState to manage the scroll position
  const [scrollPosition, setScrollPosition] = useState(true);
  // Function to handle scroll event
  function toggleScrollButton() {
    if (window.scrollY > 500) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  }
  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleScrollButton);
    // Remove event listener on component unmount
    // This is important to prevent memory leaks
    return () => window.removeEventListener("scroll", toggleScrollButton);
  }, []);

  function scrollUp() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <button
        onClick={scrollUp}
        className={`cursor-pointer fixed bottom-20 right-3  lg:right-5 bg-[#ffffff85] text-2xl p-2 lg:p-3 shadow shadow-zinc-200 rounded-full lg:text-3xl transition duration-500 ${
          scrollPosition ? "opacity-100" : "opacity-0 "
        } `}
      >
        <MdKeyboardDoubleArrowUp />
      </button>
    </div>
  );
}
