import React from 'react'

export default function Parallax() {
  return (
    <section className='max-w-[1800px] my-[5rem] m-auto h-[25rem] relative overflow-hidden'>
        <img className='object-cover w-full h-full filter brightness-[30%]' src="/parallax.png" alt="" />
        <p className='w-full h-[25rem] text-center px-[3rem] font-bold text-zinc-200 text-[4.3rem] max-xl:text-[3.5rem] max-lg:text-[2.8rem] max-md:text-[2.5rem] max-sm:text-[1.5rem] max-[400px]:text-[1rem] absolute left-[50%] top-[70%] max-[280px]:top-[50%] transform -translate-x-[50%] -translate-y-[50%] uppercase opacity-70'>it doesnt matter who you are or where you are , the bottom line is calling you to come home</p>
    </section>
  )
}
