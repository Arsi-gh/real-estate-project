import PriceCom from '@/components/FilterComponents/PriceFilterCom'
import PropertyCom from '@/components/FilterComponents/PropertyFilterCom'
import SearchCom from '@/components/FilterComponents/SearchFilterCom'
import SortCom from '@/components/FilterComponents/SortFilterCom'
import { CpuChipIcon, EyeIcon, EyeSlashIcon, FilmIcon, FingerPrintIcon, HomeModernIcon, MagnifyingGlassIcon, PencilSquareIcon, TrashIcon, WifiIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiBath, BiBed, BiCalendar } from 'react-icons/bi'
import { MdOutlinePhotoSizeSelectSmall } from 'react-icons/md'
import { PiGarageDuotone } from 'react-icons/pi'
import { TbBed } from 'react-icons/tb'

export default function EsateteList() {
  
  const [activeEstate , setActiveEstate] = useState(null)  
    
  return (
    <div className="w-full flex p-2">
        <div className="flex flex-1 flex-col gap-4 p-2">
            <EstateFilters/>
            <EstateList activeEstate={activeEstate} toggleActiveEstate={setActiveEstate}/>
        </div>
        <EstatePreview id={activeEstate}/>
    </div>
  )
}

const EstateFilters = () => {
    return (
        <div className='flex gap-2  items-center'>
            <b>Filter : </b>
            <SortCom/>
            <PropertyCom/>
            <PriceCom/>
            <SearchCom/>
        </div>
    )
}

const EstateList = ({activeEstate , toggleActiveEstate}) => {

    const [estates , setEstates] = useState([])

    const fetchEstates = async () => {
        const {data} = await axios.get('http://localhost:5000/estates')
        setEstates(data)
    }

    useEffect(() => {
        fetchEstates()
    } , [])

        if (!estates) return <div className='flex-1 flex flex-col gap-2'>loading</div>

    return (
        <div className='flex-1 flex flex-col gap-2'>
            {estates.map((estate) => <EstateItem activeEstate={activeEstate} toggleActiveEstate={toggleActiveEstate} key={estate.id} {...estate}/> )}
        </div>
    )
}

const EstateItem = ({id , title , forRent , price , images , activeEstate , toggleActiveEstate}) => {
    return (
        <div className='bg-white p-2 pr-4 rounded-lg flex items-center justify-between gap-2 gap-x-4 shadow-customeOne'>
            <img className='w-[5rem] h-[3rem] rounded-lg shadow-customeOne object-cover' src={images[0]} alt="" />
            <span className='h-[2rem] w-[1px] bg-zinc-300'></span>
            <p className='w-[16rem]'>{title.length > 20 ? title.slice(0 , 30) + '...' : title}</p>
            <span className='h-[2rem] w-[1px] bg-zinc-300'></span>
            <p>{forRent ? 'for rent' : 'for sale'}</p>
            <span className='h-[2rem] w-[1px] bg-zinc-300'></span>
            <span className='flex-1 text-lg text-green-500 font-bold'>{price} $</span>
            <span onClick={() => activeEstate == id ? toggleActiveEstate(null) : toggleActiveEstate(id)} className='cursor-pointer'>
                {activeEstate == id ? <EyeSlashIcon className='w-[1.7rem]'/> : <EyeIcon className='w-[1.7rem]'/>}
            </span>
        </div>
    )
}

const EstatePreview = ({id}) => {

    const [estate , setEstate] = useState(null)
    const [isLoading , setIsLoading] = useState(false)

    const fetchEstate = async () => {
        if (!id) return
        setIsLoading(true)
        const {data} = await axios.get(`http://localhost:5000/estates/${id}`)
        setEstate(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchEstate()
    } , [id])

    if (!id) return <div className='w-[25rem] h-[39rem] overflow-auto flex flex-wrap justify-center items-center p-2 gap-2 rounded-lg bg-zinc-200 shadow-customeOne'>Select a estate for more infos</div> 
    
    if (isLoading) return <div className='w-[25rem] h-[39rem] overflow-auto flex flex-wrap justify-center items-center p-2 gap-2 rounded-lg bg-white shadow-customeOne'>loading...</div>
    
    if (estate) return (  
        <div className='w-[25rem] h-[39rem] overflow-auto flex flex-wrap justify-between items-center p-2 gap-2 rounded-lg bg-white shadow-customeOne'>
            <img className='w-full h-[15rem] rounded-lg' src={estate.images[0]} alt="" />
            <div className='flex gap-2'>
                {estate.images.slice(1).map((img , index) => <img key={index} className='w-1/3 h-[5rem] object-cover rounded-lg' src={img} alt="" />)}
            </div>
            <b className='text-lg'>{estate.title}</b>
            <p>{estate.location}</p>
            <p className='text-lg font-bold text-green-500 px-4'>{estate.price} $ {estate.forRent && <span className='text-sm text-neutral-700'>monthly</span>}</p>
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
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>rooms {estate.rooms}<BiBed className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>bathroom {estate.bathrooms}<BiBath className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>garage {estate.garage}<PiGarageDuotone className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>size : {estate.size} m2<MdOutlinePhotoSizeSelectSmall className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>built in {estate.built_date}<BiCalendar className="text-[1.5rem]"/></span>
                    <span className='flex shadow-customeOne p-2 rounded-lg gap-2 items-center'>guest room {estate.guestrooms}<TbBed className="text-[1.5rem]"/></span>
                </div>
            <span className='w-full h-[1px] bg-zinc-300 my-2'></span>
            <b className='w-full'>Description : </b>
            <p>{estate.desc}</p>
            <div className='w-full flex gap-2 my-1'>
                <button className='flex gap-3 justify-center items-center w-1/4 border-2 border-blue-400 text-blue-500  font-bold p-[6px] rounded-md'>Edit <PencilSquareIcon className='w-[1.5rem]'/> </button>
                <button className='flex gap-2 justify-center items-center w-1/4 border-2 border-red-500 text-red-500 font-bold p-[6px] rounded-md'>Delete <TrashIcon className='w-[1.5rem]'/> </button>
                <button className='flex gap-3 justify-center items-center flex-1 border-2 border-neutral-800 text-neutral-700 font-bold p-[6px] rounded-md'>customer view <EyeIcon className='w-[1.5rem]'/> </button>
            </div>
        </div>
    )
    
}

//redirect => http://localhost:3000/estates/{estate.id}