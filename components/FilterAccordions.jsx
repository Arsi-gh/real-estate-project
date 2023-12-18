import { ChevronDownIcon, HomeModernIcon, BanknotesIcon, MapIcon, MapPinIcon, AdjustmentsHorizontalIcon, CalendarDaysIcon, CubeIcon, RectangleGroupIcon } from "@heroicons/react/24/outline"
import { BiBed } from "react-icons/bi"
import { useState } from "react"

export const PropertyStatus = () => {

    const [currentStat , setCurrentStat] = useState(1)

    const statusHandler = (index) => {
        setCurrentStat(index)
    }

    return (
        <div style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200 flex">
            <button onClick={() => statusHandler(1)} className={`flex-1 p-2 ${currentStat == 1 && 'bg-zinc-100'}`}>All</button>
            <button onClick={() => statusHandler(2)} style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)' , borderRight : '1px solid rgba(212 , 212 , 216 , 70%)'}} className={`flex-1 p-2 ${currentStat == 2 && 'bg-zinc-100'}`}>Buy</button>
            <button onClick={() => statusHandler(3)} className={`flex-1 p-2 ${currentStat == 3 && 'bg-zinc-100'}`}>Rent</button>
        </div>
    )
}

export const PropertyType = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="w-64  border-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 w-full">
                <p className="flex gap-2 items-center">
                    <HomeModernIcon className="w-6"/>
                    Property type
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200 ml-5 p-2 px-4 cursor-pointer transition-all hover:bg-zinc-100">all</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200 ml-5 p-2 px-4 cursor-pointer transition-all hover:bg-zinc-100">apartment</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200 ml-5 p-2 px-4 cursor-pointer transition-all hover:bg-zinc-100">house</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200 ml-5 p-2 px-4 cursor-pointer transition-all hover:bg-zinc-100">commercial</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyPrice = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="  border-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 w-full">
                <p className="flex gap-2 items-center">
                    <BanknotesIcon className="w-6"/>
                    Property price
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <div className=" flex flex-col pl-5 pb-4 ">
                    <MinPrice/>
                    <MaxPrice/>
                </div>
            )}
        </div>
    )
}

export const PropertyLocation = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="  border-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 w-full">
                <p className="flex gap-2 items-center">
                    <MapPinIcon className="w-6"/>
                    Property location
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">one</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">two</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">three</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">four</li>
                </ul>
            )}
        </div>
    )
}

export const PropertySort = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3  border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <AdjustmentsHorizontalIcon className="w-6"/>
                    Sort by
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">latest</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">oldest</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyRooms = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3  border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <BiBed className="text-xl"/>
                    Bedrooms
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">1 bedroom</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">2 bedrooms</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">3 bedrooms</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">+4 bedrooms</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyBuiltDate = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3  border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <CalendarDaysIcon className="w-5"/>
                    Built date
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">this year</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">5 years</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">10 years</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">+15 years</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyMetrage = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3  border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <CubeIcon className="w-5"/>
                    Property metrage
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">0 - 50 m2</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">50 - 100 m2</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">100 - 200 m2</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">200 - 300 m2</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">+300 m2</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyFeatures = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3  border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <RectangleGroupIcon className="w-5"/>
                    Property features
                </p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">Garage</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">Laundry room</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">Cleset room</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">Guest room</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">Master room</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">Balkoni</li>
                </ul>
            )}
        </div>
    )
}

const MinPrice = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200  w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 pl-5 w-full">
                <p className="flex gap-2 items-center">Min price</p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4 px-2">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">one</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">two</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">three</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">four</li>
                </ul>
            )}
        </div>
    )
}

const MaxPrice = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className=" border-zinc-200  w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 pl-5 w-full">
                <p className="flex gap-2 items-center">Max price</p>
                <ChevronDownIcon className={`w-5 transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4 px-2">
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">one</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">two</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">three</li>
                    <li style={{borderLeft : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="ml-5 p-2 px-4 cursor-pointer  border-zinc-200 transition-all hover:bg-zinc-100">four</li>
                </ul>
            )}
        </div>
    )
}