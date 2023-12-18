import { ShareIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { toast } from 'react-toastify';
import {toastConfings} from '../toastConfigs';

export default function ShareBtn({id}) {

  const toastNotif = () => {
    toast.success('Link copied', toastConfings);
  }  

  const clickHandler = () => {
    navigator.clipboard.writeText('http://localhost:3000/estates/' + id)
    toastNotif()
  }
    
  return (
    <span onClick={clickHandler} className='flex gap-x-4 pr-4 items-center m-2 absolute left-0 bg-white rounded-md shadow-customeThree p-2 cursor-pointer transition-all hover:scale-x-105 hover:bg-neutral-800 hover:text-white'>
        <ShareIcon className='w-6'/>
        <p>Share </p>
    </span>
  )
}