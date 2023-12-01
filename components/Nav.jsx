import Link from "next/link";
import NavControls from "./dashboardComponents/globalUsage/NavControls";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUser } from "./UserRoleProvider";
import { useState } from "react";

export default function Nav({displayLogin , displaySignUp , displayAddEstate , displayFavorites}) {

  const user = useUser().user

  const [toggleSide , setToggleSide] = useState(false)

  return (
    <nav className="w-full p-2 flex px-6 border-b-[1px] bg-zinc-100 border-zinc-200 justify-between items-center sticky top-0 z-10">
        <ul className="flex gap-2 max-md:hidden">
            <Link href="/" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Home</Link>
            <Link href="/estates" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Estates</Link>
            <Link href="/articles" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Articles</Link>
            <Link href="/contact" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Contact us</Link>
            <Link href="/about" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">About us</Link>
        </ul>
        <Bars3BottomLeftIcon onClick={() => setToggleSide(true)} className="w-[2rem] hidden max-md:block cursor-pointer"/>
        {toggleSide && <SideLinks displayHandler={setToggleSide}/>}
        {!user && <AuthenticateControls displaySignUp={displaySignUp} displayLogin={displayLogin}/>}
        {user && <NavControls displayAddEstate={displayAddEstate} displayFavorites={displayFavorites}/>}
    </nav>
  )
}

const SideLinks = ({displayHandler}) => {
  return (
    <>
    <div onClick={() => displayHandler(false)} className="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-30"></div>
    <ul className="h-screen bg-zinc-100 border-r-[1px] border-zinc-300 shadow-customeThree hidden max-md:flex flex-col w-[13rem] fixed left-0 top-0 z-30">
      <h3 className="font-bold flex justify-between items-center p-3 px-4 border-b-[1px] border-zinc-300">Links <XMarkIcon onClick={() => displayHandler(true)} className="w-[1.6rem] cursor-pointer"/> </h3>
      <Link onClick={() => displayHandler(false)} className="p-3 px-4 border-b-[1px] border-zinc-300 hover:bg-zinc-200" href="/">Home</Link>
      <Link onClick={() => displayHandler(false)} className="p-3 px-4 border-b-[1px] border-zinc-300 hover:bg-zinc-200" href="/estates">Estates</Link>
      <Link onClick={() => displayHandler(false)} className="p-3 px-4 border-b-[1px] border-zinc-300 hover:bg-zinc-200" href="/articles">Articles</Link>
      <Link onClick={() => displayHandler(false)} className="p-3 px-4 border-b-[1px] border-zinc-300 hover:bg-zinc-200" href="/contact">Contac us</Link>
      <Link onClick={() => displayHandler(false)} className="p-3 px-4 border-b-[1px] border-zinc-300 hover:bg-zinc-200" href="/about">About us</Link>
    </ul>
    </>
  )
}

const AuthenticateControls = ({displaySignUp , displayLogin}) => {
  return (
    <div>
      <button onClick={() => displaySignUp(true)} className="px-4 p-2 bg-white shadow-customeOne text-neutral-800 rounded-md font-bold mr-2">sign up</button>
      <button onClick={() => displayLogin(true)} className="px-4 p-2 bg-neutral-800 rounded-md shadow-customeFour font-bold text-white">login</button>
    </div>
  )
}