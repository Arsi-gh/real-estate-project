import { HomeModernIcon } from '@heroicons/react/24/outline'
import {PiBathtubBold} from 'react-icons/pi'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import React from 'react'
import Link from 'next/link'

export default function Estate({id , title , images , forRent , location , type , price , rooms , bathrooms , size}) {
  if (!images) return (
    <div className='w-80 h-fit flex flex-col rounded-xl overflow-hidden bg-zinc-100 shadow-customeOne cursor-pointer'>
      <div className='w-full h-48 bg-zinc-300'></div>
      <div className='flex flex-col gap-2 p-2'>
        <span className='w-1/2 h-4 rounded-full bg-zinc-200'></span>
        <span className='w-full h-2 rounded-full bg-zinc-300'></span>
        <span className='w-full h-2 rounded-full bg-zinc-300'></span>
        <span className='w-full h-2 rounded-full bg-zinc-300'></span>
        <span className='w-3/4 h-2 rounded-full bg-zinc-300'></span>
      </div>
    </div>
  )
  return (
    <Link href={`/estates/${id}`} className='w-80 h-fit flex flex-col rounded-xl overflow-hidden bg-zinc-100 shadow-customeOne cursor-pointer max-md:w-full max-md:flex-row max-md:p-2 max-md:items-center max-sm:rounded-none max-sm:bg-white max-sm:shadow-none max-sm:border-t max-[350px]:flex-col border-zinc-300'>
        <img className='rounded-xl h-48 object-cover max-md:h-32 max-md:w-40 max-[350px]:w-full' src={images[0]} alt="" />
        <div className='flex flex-wrap items-center gap-2 gap-x-4 p-2 max-md:justify-between'>
            <b className='hidden max-md:block max-sm:text-sm'>{title}</b>
            <span className='text-lg font-bold text-green-500 max-sm:text-sm'>{price} $ {forRent && <b className='text-neutral-800 font-medium text-sm'>monthly</b>}</span>
            <strong className='max-sm:text-sm'>{location}</strong>
            <p className='flex shadow-customeOne items-center gap-2 rounded-3xl bg-gray-200 p-1 pr-4 max-md:hidden'><HomeModernIcon className='w-6 shadow-customeOne p-1 rounded-full bg-gray-100'/>house</p>
            <p>Loust st APT 201</p>
            <span style={{height : '1px'}} className='w-full bg-zinc-300 my-1 max-sm:hidden'></span>
            <div className='w-full px-2 flex gap-1 justify-between items-center max-sm:hidden'>
                <p className='flex gap-2 items-center'><PiBathtubBold/> {bathrooms} baths</p>
                <span style={{width : '1px'}} className='h-4 bg-zinc-400'></span>
                <p className='flex gap-2 items-center'><MdOutlineMeetingRoom/> {rooms} rooms</p>
                <span style={{width : '1px'}} className='h-4 bg-zinc-400'></span>
                <p className='flex gap-2 items-center'> {size} mt</p>
            </div>
        </div>
    </Link>
  )
}
