import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect } from "react"
import { useUser } from "./UserRoleProvider"
import Link from "next/link"

export default function FavoritesModal({displayHandler}) {
  return (
    <>
    <div onClick={() => displayHandler(false)} className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-30 z-30"></div>
    <section className="p-4 fixed w-[40rem] top-[10%] left-[50%] transform -translate-x-1/2 z-30 bg-white rounded-lg shadow-customeFour flex flex-col gap-2">
        <h3 className="flex justify-between items-center p-2 text-lg">
            <b>Favorites</b>
            <XMarkIcon onClick={() => displayHandler(false)} className="cursor-pointer w-[1.8rem]"/>
        </h3>
        <span className="h-[1px] bg-zinc-300 mb-2"></span>
        <Favorites displayHandler={displayHandler}/>
    </section>
    </>
  )
}

const Favorites = ({displayHandler}) => {

    const user = useUser().user

    return (
        <>
        {
            user.favorites.map((estate) => {
                return <FavoriteItem displayHandler={displayHandler} key={estate.estateId} {...estate}/>
            })
        }
        </>
    )
}

const FavoriteItem = ({estateId , images , forRent , title , price , displayHandler}) => {

    const deleteHandler = () => {
        
    }

    return (
        <Link onClick={() => displayHandler(false)} href={'http://localhost:3000/estates/' + estateId} className="flex bg-zinc-50 items-center  p-2 pr-4 gap-2 rounded-lg shadow-customeOne">
            <img className="w-[6rem] h-[4rem] rounded-lg" src={images[0]} alt="" />
            <p className="w-[23rem] truncate">{title}</p>
            <b className="text-green-500 w-[10rem]">{price}$ {forRent && 'monthly'}</b>
            <TrashIcon className="w-[1.8rem] cursor-pointer text-red-500"/>
        </Link>
    )
}