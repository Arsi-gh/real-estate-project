import SearchCom from '@/components/FilterComponents/SearchCom'
import SortCom from '@/components/FilterComponents/SortCom'
import { ChevronDownIcon, CpuChipIcon, EyeIcon, FilmIcon, FingerPrintIcon, HomeModernIcon, MagnifyingGlassIcon, PencilSquareIcon, TrashIcon, WifiIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { BiBath, BiBed, BiCalendar } from 'react-icons/bi'
import { MdOutlinePhotoSizeSelectSmall } from 'react-icons/md'
import { PiGarageDuotone } from 'react-icons/pi'
import { TbBed } from 'react-icons/tb'

export default function EsateteList() {
  return (
    <div className="w-full flex p-2">
        <div className="flex flex-1 flex-col gap-4 p-2">
            <EstateFilters/>
            <EstateList/>
        </div>
        <EstatePreview/>
    </div>
  )
}

const EstateFilters = () => {
    return (
        <div className='flex gap-2  items-center'>
            <b>Filter : </b>
            <SortCom/>
            <button className='flex gap-2 items-center p-1 px-3 bg-white shadow-customeOne rounded-md'>Property type <ChevronDownIcon className='w-[1.2rem]'/></button>
            <button className='flex gap-2 items-center p-1 px-3 bg-white shadow-customeOne rounded-md'>Price <ChevronDownIcon className='w-[1.2rem]'/></button>
            <SearchCom/>
        </div>
    )
}

const EstateList = () => {
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <EstateItem/>
            <EstateItem/>
            <EstateItem/>
            <EstateItem/>
            <EstateItem/>
        </div>
    )
}

const EstateItem = () => {
    return (
        <div className='bg-white p-2 pr-4 rounded-lg flex items-center justify-between gap-2 gap-x-4 shadow-customeOne'>
            <img className='w-[5rem] h-[3rem] rounded-lg shadow-customeOne object-cover' src="/estates-imgs/10.png" alt="" />
            <span className='h-[2rem] w-[1px] bg-zinc-300'></span>
            <p>2-bedroom apartment los angles</p>
            <span className='h-[2rem] w-[1px] bg-zinc-300'></span>
            <p>for rent</p>
            <span className='h-[2rem] w-[1px] bg-zinc-300'></span>
            <span className='text-lg text-green-500 font-bold'>3.000 $</span>
            <span className='cursor-pointer'>
                <EyeIcon className='w-[1.7rem]'/>
            </span>
        </div>
    )
}

const EstatePreview = () => {
    return (
        <div className='w-[25rem] h-[39rem] overflow-auto flex flex-wrap justify-between items-center p-2 gap-2 rounded-lg bg-white shadow-customeOne'>
            <img className='w-full h-[15rem] rounded-lg' src="/estates-imgs/10.png" alt="" />
            <div className='flex gap-2'>
                <img className='w-1/3 h-[5rem] object-cover rounded-lg' src="/estates-imgs/10.png" alt="" />
                <img className='w-1/3 h-[5rem] object-cover rounded-lg' src="/estates-imgs/2.png" alt="" />
                <img className='w-1/3 h-[5rem] object-cover rounded-lg' src="/estates-imgs/3.png" alt="" />
            </div>
            <b className='text-lg'>2 bedroom apartment los angles</b>
            <p>USA , Los angles</p>
            <p className='text-lg font-bold text-green-500 px-4'>3000 <span className='text-sm text-neutral-700'>monthly</span></p>
            <p className='flex shadow-customeOne items-center gap-2 rounded-3xl bg-gray-200 p-1 pr-4'><HomeModernIcon className='w-[1.6rem] shadow-customeOne p-1 rounded-full bg-gray-100'/>house</p>
            <span className='w-full h-[1px] bg-zinc-300 my-2'></span>
            <div className='flex gap-2'>
                <b className='w-full'>Amentities : </b>
                <div className='flex gap-x-6 ml-4'>
                    <FingerPrintIcon className='w-[1.6rem]'/>
                    <WifiIcon className='w-[1.6rem]'/>
                    <CpuChipIcon className='w-[1.6rem]'/>
                    <FilmIcon className='w-[1.6rem]'/>
                </div>
            </div>
            <span className='w-full h-[1px] bg-zinc-300 my-2'></span>
                <b className='w-full'>Features : </b>
                <div className='flex gap-2  flex-wrap '>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>rooms 2<BiBed className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>bathroom 1<BiBath className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>garage 1<PiGarageDuotone className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>size : 200 m2<MdOutlinePhotoSizeSelectSmall className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>built in 2020<BiCalendar className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>guest room 1<TbBed className="text-[1.5rem]"/></span>
                </div>
            <span className='w-full h-[1px] bg-zinc-300 my-2'></span>
            <b className='w-full'>Description : </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus voluptatibus, vel nostrum recusandae repellendus quidem illo dolore est! Voluptatibus vero minus nesciunt at porro nostrum, repellendus iusto voluptatem eum. Qui est quasi earum quis mascipit consectetur eque maiores dignissimos rem? Sit ab expedita suscipit qui alias veniam eveniet nihil cum eum. A officia qui incidunt! Deleniti alias latate eius quod, mollitia accusamus. Praesentium, laborum amet voluptas facere esse quaerat quia obcaecati nesciunt quae veritatis libero sed corrupti officiis vitae. Corporis veritatis adipisci fugit recusandae maxime deserunt asperiores et doloremque voluptatibus aut tenetur error mollitia est nisi cupiditate impedit velit, vero deleniti inventore. Est reprehenderit dolorum necessitatibus natus aliquam aperiam?</p>
            <div className='w-full flex gap-2 my-1'>
                <button className='flex gap-3 justify-center items-center w-1/4 border-2 border-blue-400 text-blue-500  font-bold p-[6px] rounded-md'>Edit <PencilSquareIcon className='w-[1.5rem]'/> </button>
                <button className='flex gap-2 justify-center items-center w-1/4 border-2 border-red-500 text-red-500 font-bold p-[6px] rounded-md'>Delete <TrashIcon className='w-[1.5rem]'/> </button>
                <button className='flex gap-3 justify-center items-center flex-1 border-2 border-neutral-800 text-neutral-700 font-bold p-[6px] rounded-md'>customer view <EyeIcon className='w-[1.5rem]'/> </button>
            </div>
        </div>
    )
}