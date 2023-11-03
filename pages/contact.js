import { AtSymbolIcon, DevicePhoneMobileIcon, EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Contact() {
  return (
    <section className='max-w-[1400px] m-auto flex flex-col gap-4 px-4 text-neutral-800 mt-[1rem] mb-[4rem]'>
        <div className='w-full flex items-center'>
            <div className='flex flex-col gap-4 p-4 w-1/2 '>
                <h3 className='text-[3rem] font-bold'>Feel free to reach out</h3>
                <p className='text-lg'>We are always ready to listen to you and help you with your real estate needs.</p>
                <ContactForm/>
                <p className='text-lg'>Thanks you for your trust in mehrani estates  . we are commited to being your truste partner  in all your property needs</p>
            </div>
            <div className='w-1/2 flex gap-4 flex-col items-center'>
                <img className='w-[30rem] h-[20rem] shadow-customeThree rounded-lg' src="/contact.png" alt="" />
                <ContactOptions/>
            </div>
        </div>
    </section>
  )
}

const ContactForm = () => {
    return (
        <form className='flex flex-col my-4 gap-2 w-[25rem]'>
            <h4 className='rounded-t-md flex gap-2 items-center text-white bg-neutral-800 p-2'>
                <EnvelopeOpenIcon className='w-[2rem] p-1'/>
                <p>Send a request</p>
            </h4>
            <select className='p-2 px-4 bg-zinc-50  shadow-customeOne form-select'>
                <option value="select">select categoty</option>
                <option value="err">Error in site</option>
                <option value="req">Have a request</option>
                <option value="other">other</option>
            </select>
            <input className='p-2 outline-neutral-600 px-4 bg-zinc-50  shadow-customeOne' type="email" placeholder='Enter your email'/>
            <input className='p-2 outline-neutral-600 px-4 bg-zinc-50  shadow-customeOne' type="text" placeholder='Write your subject'/>
            <textarea className='h-[10rem] p-2 outline-neutral-600 px-4 bg-zinc-50  shadow-customeOne' placeholder='Write description'></textarea>
            <button className='bg-neutral-800 p-2 rounded-b-md text-white font-bold'>submit</button>
        </form>
    )
}

const ContactOptions = () => {
    return (
        <div className='flex  gap-6 flex-col m-[1rem]'>
            <ContactOption title="Email : " text="mehraniestates@gmail.com">
                <AtSymbolIcon className='w-[3rem] p-3 rounded-full bg-neutral-800 text-white'/>
            </ContactOption>
            <ContactOption title="Phone number" text="+32 6219 8615">
                <DevicePhoneMobileIcon className='w-[3rem] p-3 rounded-full bg-neutral-800 text-white'/>
            </ContactOption>
            <ContactOption title="Location" text="Los angles sen valley jr alley mehrani office USA 3454">
                <MapPinIcon className='w-[3rem] p-3 rounded-full bg-neutral-800 text-white'/>
            </ContactOption>
        </div>
    )
}

const ContactOption = ({children , title , text }) => {
    return (
        <div className='flex gap-4 items-center'>
            {children}
            <div>
                <h4 className='font-semibold text-lg'>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}