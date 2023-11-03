import React from 'react'

export default function Parallax() {
  return (
    <section className='max-w-[1800px] my-[5rem] m-auto h-[25rem] relative '>
        <img className='object-cover w-full h-full filter brightness-[30%]' src="/parallax.png" alt="" />
        <p className='w-full text-center px-[3rem] font-bold text-zinc-200 text-[4.3rem] absolute left-[50%] top-[15%] transform -translate-x-[50%] uppercase opacity-70'>it doesnt matter who you are or where you are , the bottom line is calling you to come home</p>
    </section>
  )
}
