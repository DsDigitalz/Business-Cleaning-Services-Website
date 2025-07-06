import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
export default function Scroll() {
  return (
    <section>
        <div className='fixed bottom-20 right-10 bg-[#ffffff85] p-4 shadow shadow-zinc-200 rounded-full text-3xl'>
      <MdKeyboardDoubleArrowDown />
      </div>
    </section>
  )
}
