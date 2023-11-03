import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import {BsTwitter , BsInstagram , BsYoutube , BsTelegram} from 'react-icons/bs'
import {IoIosHelpBuoy} from 'react-icons/io'
import {IoShareSocialSharp} from 'react-icons/io5'
import {HiOutlineDocumentText} from 'react-icons/hi'
import Link from 'next/link'

export default function FooterPart() {
  return (
    <footer className='w-full bg-neutral-900 text-white text-lg'>
        <div className='max-w-[1400px] m-auto flex px-4 py-6 items-start justify-around'>
            <ul className='flex flex-col'>
                <h3 className='flex gap-2 m-3 ml-0 items-center font-semibold text-2xl'>
                    <HiOutlineDocumentText/>
                    Pages
                </h3>
                <Link href="/estates">Estates</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/contact">Contact us</Link>
                <Link href="/about">About us</Link>
            </ul>
            <ul>
                <h3 className='flex gap-2 m-3 ml-0 items-center font-semibold text-2xl'>
                    <IoIosHelpBuoy/>
                    Need help ?
                </h3>
                <li>FAQs</li>
                <li>Report a bug</li>
            </ul>
            <ul>
                <h3 className='flex gap-2 m-3 ml-0 items-center font-semibold text-2xl'>
                    <IoShareSocialSharp/>
                    Socials
                </h3>
                <li className='flex items-center gap-2'>
                    <BsInstagram/>
                    <p>meh_est</p>
                </li>
                <li className='flex items-center gap-2'>
                    <BsTwitter/>
                    <p>mehrani_est</p>
                </li>
                <li className='flex items-center gap-2'>
                    <BsYoutube/>
                    <p>mehrani_estates</p>
                </li>
                <li className='flex items-center gap-2'>
                    <BsTelegram/>
                    <p>meh_estates</p>
                </li>
            </ul>
            <div>
                <h3 className='font-semibold text-2xl m-3 ml-0'>Subscibe to news</h3>
                <div className='flex gap-1 mt-4'>
                    <input className='px-4 p-2 rounded-l-lg outline-none bg-zinc-100 text-neutral-700' placeholder='Email' type="email" />
                    <button className='flex gap-2 items-center p-1 pl-2 rounded-r-lg font-bold bg-white text-neutral-800'>Send <PaperAirplaneIcon className='w-[2.4rem] rounded-lg p-2 bg-neutral-800 text-white'/> </button>
                </div>
            </div>
        </div>
    </footer>
  )
}
