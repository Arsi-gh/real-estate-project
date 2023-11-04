import Link from "next/link";
import NavControls from "./dashboardComponents/globalUsage/NavControls";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Nav({displayLogin , displaySignUp , displayAddEstate}) {
  return (
    <nav className="w-full p-2 flex px-6 border-b-[1px] bg-zinc-100 border-zinc-200 justify-between items-center sticky top-0 z-10">
        <ul className="flex gap-2">
            <Link href="/" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Home</Link>
            <Link href="/estates" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Estates</Link>
            <Link href="/articles" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Articles</Link>
            <Link href="/contact" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">Contact us</Link>
            <Link href="/about" className="p-2 px-5 rounded-md cursor-pointer hover:bg-zinc-200 transition-all">About us</Link>
        </ul>
        <NavControls displayAddEstate={displayAddEstate}/>
    </nav>
  )
}

const AuthenticateControls = () => {
  return (
    <div>
      <button onClick={() => displaySignUp(true)} className="px-4 p-2 bg-white shadow-customeOne text-neutral-800 rounded-md font-bold mr-2">sign up</button>
      <button onClick={() => displayLogin(true)} className="px-4 p-2 bg-neutral-800 rounded-md shadow-customeFour font-bold text-white">login</button>
    </div>
  )
}

const AuthenticatedControls = () => {
  return (
    <div className="flex gap-2">
      <button onClick={() => displayLogin(true)} className="px-4 p-2 bg-neutral-800 rounded-md text-white shadow-customeFour">Favorites</button>
      <button onClick={() => displaySignUp(true)} className="flex gap-2 px-4 p-2 bg-white shadow-customeOne rounded-md text-neutral-800">Log out <ArrowRightOnRectangleIcon className="w-[1.5rem]"/> </button>
    </div>
  )
}