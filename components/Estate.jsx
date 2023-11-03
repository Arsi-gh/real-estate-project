import { HomeModernIcon } from '@heroicons/react/24/outline'
import {PiBathtubBold} from 'react-icons/pi'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import React from 'react'
import Link from 'next/link'

export default function Estate({id , images , forRent , location , type , price , rooms , bathrooms , size}) {
  if (!images) return (
    <div className='w-[20rem] h-fit flex flex-col rounded-xl overflow-hidden bg-zinc-100 shadow-customeOne cursor-pointer'>
      <div className='w-full h-[12rem] bg-zinc-300'></div>
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
    <Link href={`/estates/${id}`} className='w-[20rem] h-fit flex flex-col rounded-xl overflow-hidden bg-zinc-100 shadow-customeOne cursor-pointer'>
        <img className='rounded-xl h-[12rem] object-cover' src={images[0]} alt="" />
        <div className='flex flex-wrap items-center gap-2 gap-x-4 p-2'>
            <span className='text-lg font-bold text-green-500'>{price} $</span>
            {forRent && <b className='text-sm'>monthly</b>}
            <strong>{location}</strong>
            <p className='flex shadow-customeOne items-center gap-2 rounded-3xl bg-gray-200 p-1 pr-4'><HomeModernIcon className='w-[1.6rem] shadow-customeOne p-1 rounded-full bg-gray-100'/>house</p>
            <p>Loust st APT 201</p>
            <span className='w-full h-[1px] bg-zinc-300 my-1'></span>
            <div className='w-full px-2 flex gap-1 justify-between items-center'>
                <p className='flex gap-2 items-center'><PiBathtubBold/> {bathrooms} baths</p>
                <span className='h-4 w-[1px] bg-zinc-400'></span>
                <p className='flex gap-2 items-center'><MdOutlineMeetingRoom/> {rooms} rooms</p>
                <span className='h-4 w-[1px] bg-zinc-400'></span>
                <p className='flex gap-2 items-center'> {size} mt</p>
            </div>
        </div>
    </Link>
  )
}
