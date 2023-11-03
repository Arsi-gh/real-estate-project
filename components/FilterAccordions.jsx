import { ChevronDownIcon, HomeModernIcon, BanknotesIcon, MapIcon, MapPinIcon, AdjustmentsHorizontalIcon, CalendarDaysIcon, CubeIcon, RectangleGroupIcon } from "@heroicons/react/24/outline"
import { BiBed } from "react-icons/bi"
import { useState } from "react"

export const PropertyType = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="w-[16rem] border-t-[1px] border-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 w-full">
                <p className="flex gap-2 items-center">
                    <HomeModernIcon className="w-[1.5rem]"/>
                    Property type
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="border-l-[1px] border-zinc-200 ml-5 p-2 px-4 cursor-pointer">For sale</li>
                    <li className="border-l-[1px] border-zinc-200 ml-5 p-2 px-4 cursor-pointer">For rent</li>
                    <li className="border-l-[1px] border-zinc-200 ml-5 p-2 px-4 cursor-pointer">For stay</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyPrice = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className=" border-t-[1px] border-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 w-full">
                <p className="flex gap-2 items-center">
                    <BanknotesIcon className="w-[1.5rem]"/>
                    Property price
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
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
        <div className=" border-t-[1px] border-zinc-200">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 w-full">
                <p className="flex gap-2 items-center">
                    <MapPinIcon className="w-[1.5rem]"/>
                    Property location
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">one</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">two</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">three</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">four</li>
                </ul>
            )}
        </div>
    )
}

export const PropertySort = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 border-t-[1px] border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <AdjustmentsHorizontalIcon className="w-[1.5rem]"/>
                    Sort by
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">latest</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">oldest</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">popular</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyRooms = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 border-t-[1px] border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <BiBed className="text-xl"/>
                    Bedrooms
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">1 bedroom</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">2 bedrooms</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">3 bedrooms</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">+4 bedrooms</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyBuiltDate = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 border-t-[1px] border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <CalendarDaysIcon className="w-[1.2rem]"/>
                    Built date
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">this year</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">5 years</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">10 years</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">+15 years</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyMetrage = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 border-t-[1px] border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <CubeIcon className="w-[1.2rem]"/>
                    Property metrage
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">0 - 50 m2</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">50 - 100 m2</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">100 - 200 m2</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">200 - 300 m2</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">+300 m2</li>
                </ul>
            )}
        </div>
    )
}

export const PropertyFeatures = () => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 border-t-[1px] border-zinc-200 w-full">
                <p className="flex gap-2 items-center">
                    <RectangleGroupIcon className="w-[1.2rem]"/>
                    Property features
                </p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">Garage</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">Laundry room</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">Cleset room</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">Guest room</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">Master room</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">Balkoni</li>
                </ul>
            )}
        </div>
    )
}

const MinPrice = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className=" border-zinc-200 border-l-[1px] w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 pl-5 w-full">
                <p className="flex gap-2 items-center">Min price</p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4 px-2">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">one</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">two</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">three</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">four</li>
                </ul>
            )}
        </div>
    )
}

const MaxPrice = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className=" border-zinc-200 border-l-[1px] w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center p-3 pl-5 w-full">
                <p className="flex gap-2 items-center">Max price</p>
                <ChevronDownIcon className={`w-[1.2rem] transition-all ${isOpen && 'rotate-180'}`}/>
            </button>
            {isOpen && (
                <ul className="pb-4 px-2">
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">one</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">two</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">three</li>
                    <li className="ml-5 p-2 px-4 cursor-pointer border-l-[1px] border-zinc-200">four</li>
                </ul>
            )}
        </div>
    )
}