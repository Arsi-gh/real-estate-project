import { CloudArrowUpIcon, CpuChipIcon, FilmIcon, LockClosedIcon, PhotoIcon, ShoppingBagIcon, ShoppingCartIcon, WifiIcon, WrenchScrewdriverIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { BiBath, BiBed, BiCalendar } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { PiGarageDuotone } from "react-icons/pi";
import { TbBed } from "react-icons/tb";


export default function AddEstateForm({displayHandler}) {
  
  const [currentPart , setCurrentPart] = useState(0)

  const estatesParts = [<EstateFirstPart/> , <EstateSecPart/>]

  const toggleDisplay = (e) => {
    e.preventDefault()
    displayHandler(false)
  }

  return (
    <>
      <div onClick={(e) => toggleDisplay(e)} className="w-screen h-screen z-20 bg-black opacity-70 fixed top-0 left-0"></div>
      <form className="bg-white w-[40rem]  p-4 flex flex-col gap-2 gap-y-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-30 shadow-customeFour">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-xl font-bold">Import new estate</h3>
            <XMarkIcon onClick={(e) => toggleDisplay(e)} className="w-[1.8rem] cursor-pointer"/>
          </div>
          <span className="my-2 w-full h-[1px] bg-zinc-300"></span>
          {estatesParts[currentPart]}
          <FormControls currentPart={currentPart} hadleParts={setCurrentPart}/>
      </form>
    </>
  )
}

const EstateFirstPart = () => {
  return (
    <>
      <h3 className="font-bold">Main estate info : </h3>
      <PartsCon><EstateTitle/></PartsCon>
      <PartsCon><EstateLocation/></PartsCon>
      <PartsCon><EstateStatus/><EstatePrice/></PartsCon>
      <span className="my-2 w-full h-[1px] bg-zinc-300"></span>
      <h3 className="font-bold">Features : </h3>
      <EstateProperties/>
      <span className="my-2 w-full h-[1px] bg-zinc-300"></span>
      <h3 className="font-bold">Amentities : </h3>
      <EstateAmentities/>
    </>
  )
}

const EstateSecPart = () => {
  return (
    <>
      <EstateDesc/>
      <EstateImages/>
    </>
  )
}

const PartsCon = ({children}) => {
  return (
    <div className="w-full flex gap-2 items-center">{children}</div>
  )
}

const EstateTitle = () => {
  return (
    <>
      <label className="text-lg" htmlFor="">Title : </label>
      <input className="flex-1 bg-zinc-100 shadow-customeOne p-2 px-4 rounded-md text-neutral-800 outline-neutral-800" type="text"/>
    </>
  )
}

const EstateStatus = () => {
  return (
    <>
      <p>Property is for : </p>
      <button className="ml-4 p-1 px-4 shadow-customeOne rounded-md bg-zinc-100">Sale</button>
      <button className="p-1 px-4 shadow-customeOne rounded-md bg-zinc-100">Rent</button>
    </>
  )
}

const EstateLocation = () => {
  return (
    <>
        <label htmlFor="">Loaction : </label>
        <input className="flex-1 bg-zinc-100 shadow-customeOne p-2 px-4 rounded-md text-neutral-800 outline-neutral-800" type="text"  placeholder="Ex : USA - los angles"/>
    </>
  )
}

const EstatePrice = () => {
  return (
    <>
      <label className="ml-10" htmlFor="">Price : </label>
      <input className="shadow-customeOne bg-zinc-100 p-2 px-4 rounded-md text-neutral-800 outline-neutral-800" type="number" />
    </>
  )
}

const EstateProperties = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-between">
      <span className="w-[31.5%] justify-between flex gap-2 items-center">
        <input type="number" className="w-[3rem] p-2 shadow-customeOne bg-zinc-100 outline-neutral-800 rounded-md"/>
        <BiBed className="text-[1.5rem]"/>
        <p className="flex-1">Bedrooms</p>
      </span>
      <span className="w-[31.5%] justify-between flex gap-2 items-center">
        <input type="number" className="w-[3rem] p-2 shadow-customeOne bg-zinc-100 outline-neutral-800 rounded-md"/>
        <BiBath className="text-[1.5rem]"/>
        <p className="flex-1">Bethrooms</p>
      </span>
      <span className="w-[31.5%] justify-between flex gap-2 items-center">
        <input type="number" className="w-[3rem] p-2 shadow-customeOne bg-zinc-100 outline-neutral-800 rounded-md"/>
        <PiGarageDuotone className="text-[1.5rem]"/>
        <p className="flex-1">Indoor garage</p>
      </span>
      <span className="w-[31.5%] justify-between flex gap-2 items-center">
        <input type="number" className="w-[3rem] p-2 shadow-customeOne bg-zinc-100 outline-neutral-800 rounded-md"/>
        <MdOutlinePhotoSizeSelectSmall className="text-[1.5rem]"/>
        <p className="flex-1">Size</p>
      </span>
      <span className="w-[31.5%] justify-between flex gap-2 items-center">
        <input type="number" className="w-[3rem] p-2 shadow-customeOne bg-zinc-100 outline-neutral-800 rounded-md"/>
        <BiCalendar className="text-[1.5rem]"/>
        <p className="flex-1">Built in</p>
      </span>
      <span className="w-[31.5%] justify-between flex gap-2 items-center">
        <input type="number" className="w-[3rem] p-2 shadow-customeOne bg-zinc-100 outline-neutral-800 rounded-md"/>
        <TbBed className="text-[1.5rem]"/>
        <p className="flex-1">Guest room</p>
      </span>
    </div>
  )
}

const EstateAmentities = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <label htmlFor="wifi" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
        <WifiIcon className="w-[1.5rem]"/>
        <p>High wifi speed</p>
        <input id="wifi" type="checkbox" />
      </label>
      <label htmlFor="smart" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
        <CpuChipIcon className="w-[1.5rem]"/>
        <p>Smart tech</p>
        <input id="smart" type="checkbox" />
      </label>
      <label htmlFor="secure" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
        <LockClosedIcon className="w-[1.5rem]"/>
        <p>Lock and secure</p>
        <input id="secure" type="checkbox" />
      </label>
      <label htmlFor="theater" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
        <FilmIcon className="w-[1.5rem]"/>
        <p>movie theater</p>
        <input id="theater" type="checkbox" />
      </label>
      <label htmlFor="mall" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
        <ShoppingCartIcon className="w-[1.5rem]"/>
        <p>Shopping mall</p>
        <input id="mall" type="checkbox" />
      </label>
      <label htmlFor="repaire" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
        <WrenchScrewdriverIcon className="w-[1.5rem]"/>
        <p>Free repair service</p>
        <input id="repaire" type="checkbox" />
      </label>
    </div>
  )
}

const EstateDesc = () => {
  return(
    <>
      <h3 className="text-lg font-bold">Description</h3>
      <textarea className="h-[10rem] p-2 text-lg rounded-lg bg-zinc-100 shadow-customeOne outline-neutral-800"></textarea>
    </>
  )
}

const EstateImages = () => {
  return (
    <>
      <h3 className="text-lg font-bold">Images : </h3>
      <input id="images" className="hidden" type="file" />
      <div className="w-full flex flex-wrap gap-3">
        <div className="grid place-items-center w-[49%] h-[7rem] bg-zinc-100 rounded-lg shadow-customeOne"><PhotoIcon className="w-[5rem] text-neutral-400"/></div>
        <div className="grid place-items-center w-[49%] h-[7rem] bg-zinc-100 rounded-lg shadow-customeOne"><PhotoIcon className="w-[5rem] text-neutral-400"/></div>
        <div className="grid place-items-center w-[49%] h-[7rem] bg-zinc-100 rounded-lg shadow-customeOne"><PhotoIcon className="w-[5rem] text-neutral-400"/></div>
        <div className="grid place-items-center w-[49%] h-[7rem] bg-zinc-100 rounded-lg shadow-customeOne"><PhotoIcon className="w-[5rem] text-neutral-400"/></div>
      </div>
      <label className="flex justify-between items-center p-2 pr-4 rounded-lg  bg-zinc-100 cursor-pointer border-2 border-zinc-400 border-dashed hover:bg-zinc-200" htmlFor="images">
        <p>Upload images</p>
        <CloudArrowUpIcon className="w-[2rem]"/>
      </label>
    </>
  )
}

const FormControls = ({currentPart , hadleParts}) => {
  const togglePart = (e , value) => {
    e.preventDefault()
    hadleParts(prev => prev + value)
  }
  return (
    <div className="w-full flex gap-2 mt-2">
      <button onClick={(e) => togglePart(e , -1)} className={`flex-1 p-3 rounded-md shadow-customeOne ${currentPart == 0 && 'hidden'}`}>Back</button>
      <button onClick={(e) => togglePart(e , 1)} className={`flex-1 p-3 rounded-md bg-neutral-800 text-white font-bold ${currentPart == 1 && 'hidden'}`}>Next</button>
      <button className={`flex-1 p-3 rounded-md bg-neutral-800 text-white font-bold ${currentPart !== 1 && 'hidden'}`}>Add Estate</button>
    </div>
  )
}