import { BanknotesIcon, BuildingOffice2Icon, BuildingStorefrontIcon, ChevronUpDownIcon, HomeModernIcon, MapPinIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function MainHeader() {
  return (
    <header className="w-full relative">
      <div style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="w-full bg-zinc-50 pb-12 border-zinc-200">
        <section style={{maxWidth : '1500px'}} className=" flex items-center m-auto max-lg:flex-col-reverse">
          <MainInfos/>
          <ImageWrapper/>
        </section>
      </div>
      <FilterEstates/>
    </header>
  )
}

const MainInfos = () => {
  return (
    <div className="w-1/2 flex flex-col p-8 gap-4 pl-8 max-lg:w-full">
      <h1 className="text-6xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:text-xl">We will help you to find your dream home</h1>
      <p className="text-lg">mehrani estate with almost 50 years of experiance in real estate</p>
      <div className="flex">
        <span className="w-10 h-10 bg-neutral-800 rounded-full border-2 border-white "></span>
        <span className="w-10 h-10 bg-neutral-800 rounded-full border-2 border-white -ml-4"></span>
        <span className="w-10 h-10 bg-neutral-800 rounded-full border-2 border-white -ml-4"></span>
        <span className="w-10 h-10 bg-neutral-800 rounded-full border-2 border-white -ml-4"></span>
      </div>
    </div>
  )
}

const ImageWrapper = () => {
  return (
    <div className="w-1/2 flex flex-wrap p-4 py-12 gap-4 justify-center max-lg:w-full max-lg:flex-nowrap max-lg:overflow-scroll">
      <img className="h-40 min-w-32 rounded-md max-md:w-8" src="header-imgs/x-1.png" alt="" />
      <img className="h-40 min-w-40 rounded-md max-md:w-8" src="header-imgs/x-2.png" alt="" />
      <img className="h-40 min-w-32 rounded-md max-md:w-8" src="header-imgs/x-3.png" alt="" />
      <img className="h-40 rounded-md" src="header-imgs/y-1.png" alt="" />
      <img className="h-40 rounded-md" src="header-imgs/y-2.png" alt="" />
    </div>
  )
}

const FilterEstates = () => {

  const [rent , setRent] = useState(false)

  return (
    <div style={{maxWidth : '1000px'}} className="max-lg:hidden p-2 w-2/3 rounded-lg bg-neutral-200 absolute -bottom-36 left-1/2 transform  -translate-x-1/2 shadow-customeThree">
      <div className="flex rounded-t-lg overflow-hidden w-fit bg-white">
        <button onClick={() => setRent(false)} className={`p-2 px-4 outline-none ${!rent && 'bg-neutral-800 text-white font-bold '}`}>Buy estate</button>
        <button onClick={() => setRent(true)} className={`p-2 px-4 outline-none ${rent && 'bg-neutral-800 text-white font-bold '} `}>Rent estate</button>
      </div>
      <div className="w-full h-40 bg-white rounded-lg rounded-tl-none flex items-center justify-between p-3 text-neutral-800">
        <EstateLocation/>
        <Seperator/>
        <EstateType/>
        <Seperator/>
        {rent ? <RentStatePrice/> : <EstatePrice/>}
        <button className="p-2 px-4  font-bold rounded-lg h-fit self-end mb-6 bg-neutral-800 text-white shadow-customeFour">Find Estate</button>
      </div>
    </div>
  )
}

const EstateLocation = () => {

  return (
    <div className="flex flex-col gap-4 text-lg relative">
      <label className='flex gap-2' htmlFor=""><MapPinIcon className='w-6'/> Property location</label>
      <input className="peer p-2 px-4 rounded-lg shadow-customeOne outline-neutral-800" type="text" placeholder="Enter location"/>
      <EstateLocationModal/>
    </div>
  )
}

const EstateLocationModal = () => {
  return (
    <ul className='hidden absolute top-24 bg-zinc-50 rounded-lg overflow-hidden  w-72 shadow-customeOne peer-focus:block'>
      <li className='p-2  hover:bg-zinc-200 cursor-pointer'>location one</li>
      <li className='p-2  hover:bg-zinc-200 cursor-pointer'>location one</li>
      <li className='p-2  hover:bg-zinc-200 cursor-pointer'>location one</li>
      <li className='p-2  hover:bg-zinc-200 cursor-pointer'>location one</li>
    </ul>
  )
}

const EstateType = () => {

  const [isOpen , setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 text-lg text-neutral-800 relative">
      <label className='flex gap-2' htmlFor=""><HomeModernIcon className='w-6'/> Property type  </label>
      <button onClick={() => setIsOpen(!isOpen)} className='flex w-48 p-2 items-center justify-between bg-zinc-100 shadow-customeOne rounded-lg'>
        All
        <ChevronUpDownIcon className='w-6'/>
      </button>
      {
        isOpen && (
          <ul onClick={() => setIsOpen(false)} className='w-48 absolute top-24 bg-zinc-50 rounded-lg shadow-customeFour overflow-hidden'>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>All<Squares2X2Icon className='w-6'/></li>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>Apartment<BuildingOffice2Icon className='w-6'/></li>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>House<HomeModernIcon className='w-6'/></li>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>Commercial<BuildingStorefrontIcon className='w-6'/></li>
          </ul>
        )
      }
    </div>
  )

}

const EstatePrice = () => {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <p className='flex gap-2'><BanknotesIcon className='w-6'/> Select price</p>
      <button className='flex items-center bg-zinc-100 justify-between w-48 rounded-lg shadow-customeOne p-2'>
        0 - 10.000.000 <ChevronUpDownIcon className='w-6'/>
      </button>
    </div>
  )
}

const RentStatePrice = () => {

  const [isOpen , setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 text-lg relative">
      <p className='flex gap-2'><BanknotesIcon className='w-6'/> Select price</p>
      <button onClick={() => setIsOpen(!isOpen)} className='flex items-center bg-zinc-100 justify-between w-48 rounded-lg shadow-customeOne p-2'>
        0 - 5.000 a month <ChevronUpDownIcon className='w-6'/>
      </button>
      {
        isOpen && (
          <ul className='absolute top-24 w-60 bg-zinc-50 rounded-lg overflow-hidden shadow-customeOne'>
            <li className='p-2  hover:bg-zinc-200 cursor-pointer'>5.000 - 10.000 a month</li>
            <li className='p-2  hover:bg-zinc-200 cursor-pointer'>10.000 - 15.000 a month</li>
            <li className='p-2  hover:bg-zinc-200 cursor-pointer'>15.000 - 20.000 a month</li>
            <li className='p-2  hover:bg-zinc-200 cursor-pointer'>+20.000 a month</li>
          </ul>
        )
      }
    </div>
  )
}

const Seperator = () => {
  return (
    <span style={{width : '1px'}} className="h-3/4 bg-zinc-300"></span>
  )
}