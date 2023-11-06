import { BanknotesIcon, BeakerIcon, BuildingOffice2Icon, BuildingStorefrontIcon, ChevronDownIcon, ChevronUpDownIcon, HomeModernIcon, MapPinIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function MainHeader() {
  return (
    <header className="w-full relative">
      <div className="w-full bg-zinc-50 pb-12 border-b-[1px] border-zinc-200">
        <section className=" flex items-center max-w-[1400px] m-auto">
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
    <div className="w-1/2 flex flex-col p-8 gap-4 pl-8">
      <h1 className="text-[3.8rem] font-bold ">We will help you to find your dream home</h1>
      <p className="text-lg">mehrani estate with almost 50 years of experiance in real estate</p>
      <div className="flex">
        <span className="w-[2.5rem] h-[2.5rem] bg-neutral-800 rounded-full border-2 border-white "></span>
        <span className="w-[2.5rem] h-[2.5rem] bg-neutral-800 rounded-full border-2 border-white -ml-4"></span>
        <span className="w-[2.5rem] h-[2.5rem] bg-neutral-800 rounded-full border-2 border-white -ml-4"></span>
        <span className="w-[2.5rem] h-[2.5rem] bg-neutral-800 rounded-full border-2 border-white -ml-4"></span>
      </div>
    </div>
  )
}

const ImageWrapper = () => {
  return (
    <div className="w-1/2 flex flex-wrap p-4 py-12 gap-4 justify-center">
      <img className="h-[10rem] w-[8rem] rounded-md" src="header-imgs/x-1.png" alt="" />
      <img className="h-[10rem] w-[20rem] rounded-md" src="header-imgs/x-2.png" alt="" />
      <img className="h-[10rem] w-[8rem] rounded-md" src="header-imgs/x-3.png" alt="" />
      <img className="h-[10rem] rounded-md" src="header-imgs/y-1.png" alt="" />
      <img className="h-[10rem] rounded-md" src="header-imgs/y-2.png" alt="" />
    </div>
  )
}

const FilterEstates = () => {

  const [rent , setRent] = useState(false)

  return (
    <div className="p-2 w-2/3 max-w-[1000px] rounded-lg bg-neutral-200 absolute -bottom-[35%] left-[50%] transform  -translate-x-[50%] shadow-customeThree">
      <div className="flex rounded-t-lg overflow-hidden w-fit bg-white">
        <button onClick={() => setRent(false)} className={`p-2 px-4 outline-none ${!rent && 'bg-neutral-800 text-white font-bold '}`}>Buy estate</button>
        <button onClick={() => setRent(true)} className={`p-2 px-4 outline-none ${rent && 'bg-neutral-800 text-white font-bold '} `}>Rent estate</button>
      </div>
      <div className="w-full h-[10rem] bg-white rounded-lg rounded-tl-none flex items-center justify-between p-3 text-neutral-800">
        <EstateLocation/>
        <Seperator/>
        <EstateType/>
        <Seperator/>
        {rent ? <RentStatePrice/> : <EstatePrice/>}
        <button className="p-[10px] px-4  font-bold rounded-lg h-fit self-end mb-6 bg-neutral-800 text-white shadow-customeFour">Find Estate</button>
      </div>
    </div>
  )
}

const EstateLocation = () => {

  return (
    <div className="flex flex-col gap-4 text-lg relative">
      <label className='flex gap-2' htmlFor=""><MapPinIcon className='w-[1.5rem]'/> Property location</label>
      <input className="peer p-2 px-4 rounded-lg shadow-customeOne outline-neutral-800" type="text" placeholder="Enter location"/>
      <EstateLocationModal/>
    </div>
  )
}

const EstateLocationModal = () => {
  return (
    <ul className='hidden absolute top-24 bg-zinc-50 rounded-lg overflow-hidden  w-[18rem] shadow-customeOne peer-focus:block'>
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
      <label className='flex gap-2' htmlFor=""><HomeModernIcon className='w-[1.5rem]'/> Property type  </label>
      <button onClick={() => setIsOpen(!isOpen)} className='flex w-[12rem] p-2 items-center justify-between bg-zinc-100 shadow-customeOne rounded-lg'>
        All
        <ChevronUpDownIcon className='w-[1.5rem]'/>
      </button>
      {
        isOpen && (
          <ul onClick={() => setIsOpen(false)} className='w-[12rem] absolute top-24 bg-zinc-50 rounded-lg shadow-customeFour overflow-hidden'>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>All<Squares2X2Icon className='w-[1.5rem]'/></li>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>Apartment<BuildingOffice2Icon className='w-[1.5rem]'/></li>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>House<HomeModernIcon className='w-[1.5rem]'/></li>
            <li className='flex justify-between p-2 px-4 cursor-pointer hover:bg-zinc-200'>Commercial<BuildingStorefrontIcon className='w-[1.5rem]'/></li>
          </ul>
        )
      }
    </div>
  )

}

const EstatePrice = () => {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <p className='flex gap-2'><BanknotesIcon className='w-[1.5rem]'/> Select price</p>
      <button className='flex items-center bg-zinc-100 justify-between w-[12rem] rounded-lg shadow-customeOne p-2'>
        0 - 10.000.000 <ChevronUpDownIcon className='w-[1.5rem]'/>
      </button>
    </div>
  )
}

const RentStatePrice = () => {

  const [isOpen , setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4 text-lg relative">
      <p className='flex gap-2'><BanknotesIcon className='w-[1.5rem]'/> Select price</p>
      <button onClick={() => setIsOpen(!isOpen)} className='flex items-center bg-zinc-100 justify-between w-[12rem] rounded-lg shadow-customeOne p-2'>
        0 - 5.000 a month <ChevronUpDownIcon className='w-[1.5rem]'/>
      </button>
      {
        isOpen && (
          <ul className='absolute top-24 w-[15rem] bg-zinc-50 rounded-lg overflow-hidden shadow-customeOne'>
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
    <span className="h-[70%] w-[1px] bg-zinc-300"></span>
  )
}