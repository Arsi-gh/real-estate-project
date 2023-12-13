import React from 'react'

export default function Parallax() {
  return (
    <section style={{maxWidth : '1800px'}} className='my-20 m-auto h-96 relative overflow-hidden'>
        <img className='object-cover w-full h-full filter brightness-50' src="/parallax.png" alt="" />
        <p className='w-full h-96 text-center px-12 font-bold text-zinc-200 text-7xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl absolute left-1/2 top-3/4 max-sm:top-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase opacity-70'>it doesnt matter who you are or where you are , the bottom line is calling you to come home</p>
    </section>
  )
}
