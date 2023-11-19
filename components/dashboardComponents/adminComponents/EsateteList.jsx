import PriceCom from '@/components/FilterComponents/PriceFilterCom'
import PropertyCom from '@/components/FilterComponents/PropertyFilterCom'
import SearchCom from '@/components/FilterComponents/SearchFilterCom'
import SortCom from '@/components/FilterComponents/SortFilterCom'
import DeleteModal from '@/components/WarningModals/DeleteModal'
import { CpuChipIcon, EyeIcon, EyeSlashIcon, FilmIcon, FingerPrintIcon, HomeIcon, HomeModernIcon, LockClosedIcon, MagnifyingGlassIcon, PencilSquareIcon, ShoppingCartIcon, TrashIcon, WifiIcon, WrenchScrewdriverIcon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
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
        <div className='flex gap-2 items-center'>
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

    const containerRef = useRef()
    const [estate , setEstate] = useState(null)
    const [isLoading , setIsLoading] = useState(false)
    const [displayEdit , setDisplayEdit] = useState(false)
    const [displayDelete , setDisplayDelete] = useState(false)

    const router = useRouter()

    const fetchEstate = async () => {
        if (!id) return
        setIsLoading(true)
        const {data} = await axios.get(`http://localhost:5000/estates/${id}`)
        setEstate(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchEstate()
        if (containerRef.current) {
            containerRef.current.scrollTo(0 , 0)
        }
    } , [id])

    if (!id) return <div className='w-[25rem] h-[39rem] overflow-auto flex flex-col justify-center items-center p-2 gap-2 rounded-lg bg-zinc-200 shadow-customeOne'> <HomeIcon className='w-[3rem] text-neutral-600'/> Select a estate for more infos</div> 
    
    if (isLoading) return <div className='w-[25rem] h-[39rem] overflow-auto flex flex-wrap justify-center items-center p-2 gap-2 rounded-lg bg-white shadow-customeOne'>loading...</div>
    
    if (estate) return (  
        <>
            <div ref={containerRef} className='w-[25rem] h-[39rem] overflow-auto flex flex-wrap justify-between items-center p-2 gap-2 rounded-lg bg-white shadow-customeOne'>
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
                    <button onClick={() => setDisplayEdit(true)} className='flex gap-3 justify-center items-center w-1/4 border-2 border-blue-400 text-blue-500  font-bold p-[6px] rounded-md'>Edit <PencilSquareIcon className='w-[1.5rem]'/> </button>
                    <button onClick={() => setDisplayDelete(true)} className='flex gap-2 justify-center items-center w-1/4 border-2 border-red-500 text-red-500 font-bold p-[6px] rounded-md'>Delete <TrashIcon className='w-[1.5rem]'/> </button>
                    <button onClick={() => router.push(`/estates/${estate.id}`)} className='flex gap-3 justify-center items-center flex-1 border-2 border-neutral-800 text-neutral-700 font-bold p-[6px] rounded-md'>customer view <EyeIcon className='w-[1.5rem]'/> </button>
                </div>
            </div>
            {displayDelete && <DeleteModal id={id} category="estates" text="estate" display={setDisplayDelete} callback={() => console.log()}/>}
            {displayEdit && <EstateEditModal id={id} displayHandler={setDisplayEdit}/>}
        </>
    )
    
}

const EstateEditModal = ({id , displayHandler}) => {

    const [estate , setEstate] = useState(null)
    const [isLoading , setIsLoading] = useState(false)

    const fetchEstate = async (id) => {
        setIsLoading(true)
        const {data} = await axios.get(`http://localhost:5000/estates/${id}`)
        setEstate(data)
        setIsLoading(false)
    }
    
    useEffect(() => {
        fetchEstate(id)
    }, [])

    if (isLoading) return (
        <>
        <div onClick={() => displayHandler(false)} className='w-screen h-screen fixed top-0 left-0 z-30 bg-black opacity-80'></div>
        <section className='flex justify-center items-center z-30 p-4 w-[70rem]  rounded-lg  bg-white fixed top-[5%] left-[50%] transform -translate-x-[50%]'>Loading ...</section>
        </>
    )

    if (estate) return (
        <>
            <div onClick={() => displayHandler(false)} className='w-screen h-screen fixed top-0 left-0 z-30 bg-black opacity-80'></div>
            <section className='flex flex-col z-30 p-4 w-[70rem]  rounded-lg  bg-white fixed top-[5%] left-[50%] transform -translate-x-[50%]'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-xl'>Edit estate</h3>
                    <XMarkIcon onClick={() => displayHandler(false)} className='w-[2rem] cursor-pointer'/>
                </div>
                <span className='h-[1px] bg-zinc-300 my-4'></span>
                <div className='w-full grid grid-cols-4 grid-rows-2 gap-x-4'>
                    <EditImagesCon images={estate.images}/>
                    <EditFeaturesCon {...estate}/>
                    <EditAmentitiesCon {...estate}/>
                    <EditMainInfosCon {...estate}/>
                </div>
                <button className='w-fit p-2 px-4 rounded-md bg-neutral-800 text-white font-bold shadow-customeFive mt-3'>submit changes</button>
            </section>
        </>
    )
}

const EditImagesCon = ({images}) => {
    return (
        <div className='col-start-4 col-end-5 row-start-1 row-end-3 flex flex-col gap-2'>
            {
                images.map((image , index) => {
                    return <img key={index} className='w-[15rem] h-[8.5rem] rounded-lg bg-zinc-100' src={image} alt="" />
                })
            }
        </div>
    )
}

const EditFeaturesCon = ({rooms , guestrooms , bathrooms , size , built_date , garage}) => {
    return (
        <div className='col-start-2 col-end-4 row-start-1 row-end-2 flex justify-around flex-wrap'>
            <span className='w-[40%] flex justify-between items-center'>
                <label className='flex gap-2' htmlFor="Bedroom">
                <BiBed className="text-[1.5rem]"/>    
                Bedrooms
                </label>
                <input value={rooms} className='ml-4 bg-zinc-100 w-[5rem] p-2 px-4 shadow-customeOne rounded-lg' type="number" />
            </span>
            <span className='w-[40%] flex justify-between items-center'>
                <label className='flex gap-2' htmlFor="bathroom">
                <BiBath className="text-[1.5rem]"/>    
                Bathrooms
                </label>
                <input value={bathrooms} className='ml-4 bg-zinc-100 w-[5rem] p-2 px-4 shadow-customeOne rounded-lg' type="number" />
            </span>
            
            <span className='w-[40%] flex justify-between items-center'>
                <label className='flex gap-2' htmlFor="garage">
                <PiGarageDuotone className="text-[1.5rem]"/>    
                Garage
                </label>
                <input value={garage} className='ml-4 bg-zinc-100 w-[5rem] p-2 px-4 shadow-customeOne rounded-lg' type="number" />
            </span>
            <span className='w-[40%] flex justify-between items-center'>
                <label className='flex gap-2' htmlFor="size">
                <MdOutlinePhotoSizeSelectSmall className="text-[1.5rem]"/>    
                Size
                </label>
                <input value={size} className='ml-4 bg-zinc-100 w-[5rem] p-2 px-4 shadow-customeOne rounded-lg' type="number" />
            </span>
            <span className='w-[40%] flex justify-between items-center'>
                <label className='flex gap-2' htmlFor="built-date">
                <BiCalendar className="text-[1.5rem]"/>    
                Built in
                </label>
                <input value={built_date} className='ml-4 bg-zinc-100 w-[5rem] p-2 px-4 shadow-customeOne rounded-lg' type="number" />
            </span>
            <span className='w-[40%] flex justify-between items-center'>
                <label className='flex gap-2' htmlFor="guestroom">
                <TbBed className="text-[1.5rem]"/>    
                Guestroom
                </label>
                <input value={guestrooms} className='ml-4 bg-zinc-100 w-[5rem] p-2 px-4 shadow-customeOne rounded-lg' type="number" />
            </span>
        </div>
    )
}

const EditAmentitiesCon = () => {
    return (
        <div className='col-start-2 col-end-4 row-start-2 row-end-3 flex flex-col gap-2'>
            <label htmlFor="wifi" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
                <WifiIcon className="w-[1.5rem]"/>
                <p className='flex-1'>High wifi speed</p>
                <input id="wifi" type="checkbox" />
            </label>
            <label htmlFor="smart" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
                <CpuChipIcon className="w-[1.5rem]"/>
                <p className='flex-1'>Smart tech</p>
                <input id="smart" type="checkbox" />
            </label>
            <label htmlFor="secure" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
                <LockClosedIcon className="w-[1.5rem]"/>
                <p className='flex-1'>Lock and secure</p>
                <input id="secure" type="checkbox" />
            </label>
            <label htmlFor="theater" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
                <FilmIcon className="w-[1.5rem]"/>
                <p className='flex-1'>movie theater</p>
                <input id="theater" type="checkbox" />
            </label>
            <label htmlFor="mall" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
                <ShoppingCartIcon className="w-[1.5rem]"/>
                <p className='flex-1'>Shopping mall</p>
                <input id="mall" type="checkbox" />
            </label>
            <label htmlFor="repaire" className="cursor-pointer p-2 px-3 rounded-md flex items-center gap-2 bg-zinc-100 shadow-customeOne">
                <WrenchScrewdriverIcon className="w-[1.5rem]"/>
                <p className='flex-1'>Free repair service</p>
                <input id="repaire" type="checkbox" />
            </label>
        </div>
    )
}

const EditMainInfosCon = ({title , desc , price , location , forRent}) => {
    return (
        <div className='col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col gap-4'>
            <span className='flex items-center gap-2 justify-between'>
                <label htmlFor="">Title : </label>
                <input value={title} type="text" className='p-2 px-4 w-[11rem] rounded-lg bg-zinc-100 shadow-customeOne' />
            </span>
            <span className='flex items-center gap-2 justify-between'>
                <label htmlFor="">Location : </label>
                <input value={location} type="text" className='p-2 px-4 w-[11rem] rounded-lg bg-zinc-100 shadow-customeOne' />
            </span>
            <span className='flex items-center gap-2 justify-between'>
                <p>Status : </p>
                <div className='flex gap-2'>
                    <button className='p-2 px-4 rounded-lg bg-zinc-100 shadow-customeOne'>for rent</button>
                    <button className='p-2 px-4 rounded-lg bg-zinc-100 shadow-customeOne'>for sale</button>
                </div>
            </span>
            <span className='flex items-center gap-2 justify-between'>
                <label htmlFor="">Price :</label>
                <input value={price} type="text" className='p-2 px-4 w-[11rem] rounded-lg bg-zinc-100 shadow-customeOne' />
            </span>
            <textarea value={desc} className='h-[21rem] p-2 rounded-lg bg-zinc-100 shadow-customeOne' placeholder='Description : '></textarea>
        </div>
    )
}