import LikeBtn from "@/components/ActionButtons/LikeBtn";
import ShareBtn from "@/components/ActionButtons/ShareBtn";
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
    <main style={{maxWidth : '1500px'}} className="flex gap-2 mx-auto">
      <section className="flex-1 flex flex-col gap-y-4 px-6 pt-2 pb-20">
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
    <div style={{width : '25rem'}} className="h-fit m-4 max-8 flex  flex-col gap-2 gap-y-4 sticky top-20 rounded-lg shadow-customeOne border-zinc-300 overflow-hidden max-xl:hidden">
          <img className="w-full h-auto" src={estate.images[0]} alt="" />
          <p className="px-3 text-2xl font-semibold">{estate.title}</p>
          <p className="px-3 text-lg">{estate.location}</p>
          <div className="px-3 w-full justify-between flex gap-4 items-center">
            <p className="flex gap-2"><PiCubeLight className="text-2xl"/>{estate.size} m2</p>
            <p className="flex gap-2"><BiBed className="text-2xl"/>{estate.rooms} bedrooms</p>
            <p className="flex gap-2"><BiBath className="text-2xl"/>{estate.bathrooms} bathroom</p>
          </div>
          <span className="flex gap-2 items-center px-3 pb-3 font-bold text-3xl text-green-400">{estate.price} $ <p className="text-neutral-800 text-lg">{estate.forRent ? 'Per month' : null}</p></span>
          <LikeBtn id={estate.id}/>
          <ShareBtn id={estate.id}/>
      </div>
  )
}

const ImageGallery = ({images}) => {
  return (
    <div className="pt-4">
      <img className="w-full object-cover h-96 rounded-lg max-sm:h-40" src={images[0]} alt="" />
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
    <div className="w-full h-fit p-3 mb-4 rounded-lg flex flex-wrap items-center gap-2 border-2 border-neutral-800 max-sm:flex-nowrap max-sm:flex-col max-sm:gap-4">
      <div style={{minWidth : '8rem'}} className="flex-1 flex flex-col items-center gap-2">
        <BiBed className="text-2xl"/>
        <p>{estate.rooms} Bedrooms</p>
      </div>
      <div style={{minWidth : '8rem'}} className="flex-1 flex flex-col items-center gap-2 max-sm:border-t-2 max-sm:w-full max-sm:pt-4">
        <BiBath className="text-2xl"/>
        <p>{estate.bathrooms} Bathroom</p>
      </div>
      <div style={{minWidth : '8rem'}} className="flex-1 flex flex-col items-center gap-2 max-sm:border-t-2 max-sm:w-full max-sm:pt-4">
        <PiGarageDuotone className="text-2xl"/>
        <p>{estate.garage} indoor garage</p>
      </div>
      <div style={{minWidth : '8rem'}} className="flex-1 flex flex-col items-center gap-2 max-sm:border-t-2 max-sm:w-full max-sm:pt-4">
        <MdOutlinePhotoSizeSelectSmall className="text-2xl"/>
        <p>{estate.size} : 200 m2</p>
      </div>
      <div style={{minWidth : '8rem'}} className="flex-1 flex flex-col items-center gap-2 max-sm:border-t-2 max-sm:w-full max-sm:pt-4">
        <BiCalendar className="text-2xl"/>
        <p>in {estate.built_date}</p>
      </div>
      <div style={{minWidth : '8rem'}} className="flex-1 flex flex-col items-center gap-2 max-sm:border-t-2 max-sm:w-full max-sm:pt-4">
        <TbBed className="text-2xl"/>
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


