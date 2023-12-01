import LikeBtn from "@/components/ActionButtons/LikeBtn";
import { CpuChipIcon, FilmIcon, FingerPrintIcon, WifiIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useRouter } from "next/router";
import { BiBed , BiBath, BiCalendar } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { PiCubeLight, PiGarageDuotone } from "react-icons/pi";
import { TbBed } from "react-icons/tb"


export default function HousePage({estate , isFallback}) {
  if (isFallback) return <p>loading</p>
  return (
    <main className="flex gap-2 max-w-[1400px] mx-auto">
      <section className="flex-1 flex flex-col gap-y-4 px-6 pt-2 pb-[5rem]">
        <ImageGallery images={estate.images}/>
        <p className="text-2xl my-4 hidden max-xl:block"><b>{estate.title}</b> , {estate.location}</p>
        <b className="hidden max-xl:block text-3xl text-green-500">{estate.price}$ {estate.forRent && "monthly"}</b>
        <EstateAmenities amenities={estate.amentities}/>
        <EstateFeaturesCon estate={estate}/>
        <EstateDesc desc={estate.desc}/>
      </section>
      <EstateSide estate={estate}/>
    </main>
  )
}

const EstateSide = ({estate}) => {
  return (
    <div className="w-[25rem] h-fit m-[1rem] max-[2rem] flex  flex-col gap-2 gap-y-4 sticky top-[10%] rounded-lg border-[1px] border-zinc-300 overflow-hidden max-xl:hidden">
          <img className="w-full h-auto" src={estate.images[0]} alt="" />
          <p className="px-3 text-2xl font-semibold">{estate.title}</p>
          <p className="px-3 text-lg">{estate.location}</p>
          <div className="px-3 w-full justify-between flex gap-4 items-center">
            <p className="flex gap-2"><PiCubeLight className="text-2xl"/>{estate.size} m2</p>
            <p className="flex gap-2"><BiBed className="text-2xl"/>{estate.rooms} bedrooms</p>
            <p className="flex gap-2"><BiBath className="text-2xl"/>{estate.bathrooms} bathroom</p>
          </div>
          <span className="flex gap-2 items-center px-3 pb-3 font-bold text-3xl text-green-400">{estate.price} $ <p className="text-neutral-800 text-lg">{estate.forRent ? 'Per month' : null}</p></span>
          <span className="absolute m-2 right-0"><LikeBtn id={estate.id}/></span>
      </div>
  )
}

const ImageGallery = ({images}) => {
  return (
    <div className="pt-4">
      <img className="w-full object-cover h-[25rem] rounded-lg max-sm:h-[10rem]" src={images[0]} alt="" />
      <div className="flex w-full mt-2 pr-4 gap-2">
        <img className="w-1/3 rounded-lg" src={images[1]} alt="" />
        <img className="w-1/3 rounded-lg" src={images[2]} alt="" />
        <img className="w-1/3 rounded-lg" src={images[3]} alt="" />
      </div>
    </div>
  )
}

const EstateFeaturesCon = ({estate}) => {
  return (
    <>
    <h3 className="font-semibold text-xl">Features</h3>
    <div className="w-full h-fit p-3 mb-4 rounded-lg flex flex-wrap items-center gap-2 border-2 border-neutral-800 max-[410px]:gap-4">
      <div className="flex-1 flex flex-col items-center gap-2 max-md:min-w-[10rem]">
        <BiBed className="text-[2rem]"/>
        <p>{estate.rooms} Bedrooms</p>
      </div>
      <span className="w-[1px] h-[30%] bg-neutral-400 max-[410px]:hidden"></span>
      <div className="flex-1 flex flex-col items-center gap-2 max-md:min-w-[10rem] max-[410px]:border-t-[1px] max-[410px]:pt-4">
        <BiBath className="text-[2rem]"/>
        <p>{estate.bathrooms} Bathroom</p>
      </div>
      <span className="w-[1px] h-[30%] bg-neutral-400 max-sm:hidden max-[410px]:hidden"></span>
      <div className="flex-1 flex flex-col items-center gap-2 max-md:min-w-[10rem] max-[410px]:border-t-[1px] max-[410px]:pt-4">
        <PiGarageDuotone className="text-[2rem]"/>
        <p>{estate.garage} indoor garage</p>
      </div>
      <span className="w-[1px] h-[30%] bg-neutral-400 max-md:hidden max-sm:block max-[410px]:hidden"></span>
      <div className="flex-1 flex flex-col items-center gap-2 max-md:min-w-[10rem] max-[410px]:border-t-[1px] max-[410px]:pt-4">
        <MdOutlinePhotoSizeSelectSmall className="text-[2rem]"/>
        <p>{estate.size} : 200 m2</p>
      </div>
      <span className="w-[1px] h-[30%] bg-neutral-400 max-sm:hidden max-[410px]:hidden"></span>
      <div className="flex-1 flex flex-col items-center gap-2 max-md:min-w-[10rem] max-[410px]:border-t-[1px] max-[410px]:pt-4">
        <BiCalendar className="text-[2rem]"/>
        <p>in {estate.built_date}</p>
      </div>
      <span className="w-[1px] h-[30%] bg-neutral-400 max-[410px]:hidden"></span>
      <div className="flex-1 flex flex-col items-center gap-2 max-md:min-w-[10rem] max-[410px]:border-t-[1px] max-[410px]:pt-4">
        <TbBed className="text-[2rem]"/>
        <p>{estate.guestrooms} guest room</p>
      </div>
    </div>
    </>
  )
}


const EstateDesc = ({desc}) => {
  return (
    <>
        <h3 className="font-semibold text-xl">Description </h3>
        <p>{desc}</p>
    </>
  )
}

const EstateAmenities = ({amenities}) => {
  return (
    <>
      <h3 className="font-semibold text-2xl mb-4">Amenities</h3>
      <div className="flex flex-wrap justify-between mb-4 max-md:gap-y-6">
        {amenities.map((amenitie , index) => {
          return (
            <span key={index} className="w-1/5 flex flex-col gap-3 max-md:w-1/2 max-sm:w-full">
              <p>{amenitie.desc}</p>
            </span>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps (context) {
  
  const {data} = await axios.get(`http://localhost:5000/estates/${context.params.Estate}`)

  return {
    props : {
      estate : data
    },
    revalidate : 10,
  }
}


export async function getStaticPaths () {
  return {
    paths : [
      {params  : {Estate : "1"}},
      {params  : {Estate : "2"}},
      {params  : {Estate : "3"}},
      {params  : {Estate : "4"}},
    ],
    fallback : true,
  }
}


