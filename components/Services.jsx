import { ArrowPathIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, CubeTransparentIcon, LanguageIcon, LockOpenIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section style={{maxWidth : '1500px'}} className="h-40 items-center m-auto flex my-40 px-32 max-md:flex-col max-sm:my-12">
        <div style={{minWidth : '25rem'}} className="flex items-center justify-center relative">
            <p className="text-5xl font-semibold  bg-white max-sm:text-3xl">Our servise</p>
            <ArrowPathIcon className="absolute -left-10 bottom-1/2 w-20 h-20 p-6 rounded-lg text-neutral-700 bg-white shadow-customeThree max-sm:hidden"/>
            <CubeTransparentIcon className="absolute right-1/3 bottom-20 w-20 h-20 p-6 rounded-lg text-neutral-700 bg-white shadow-customeThree max-sm:hidden"/>
            <LockOpenIcon className="absolute right-1/3 -bottom-32 w-20 h-20 p-6 rounded-lg text-neutral-700 bg-white shadow-customeThree max-sm:hidden"/>
            <span className="w-56 -z-10 h-56 border-4 border-r-0 rounded-3xl b border-neutral-600 absolute -left-2 max-sm:hidden"></span>
        </div>
        <div className="w-2/3 flex items-center justify-center gap-4 flex-wrap max-md:mt-32 max-sm:mt-8">
            <span style={{minWidth : '15rem'}} className="flex flex-col gap-2 items-center overflow-hidden rounded-lg shadow-customeFour">
                <LanguageIcon className="w-10 m-3"/>
                <p className="w-full bg-neutral-800 font-bold text-white p-2 px-4 text-center">Support foreign languages</p>
            </span>
            <span style={{minWidth : '15rem'}} className="flex flex-col gap-2 items-center overflow-hidden rounded-lg shadow-customeFour ">
                <PhoneArrowUpRightIcon className="w-10 m-3"/>
                <p className="w-full bg-neutral-800 font-bold text-white p-2 px-4 text-center">on phone consultancy</p>
            </span>
            <span style={{minWidth : '15rem'}} className="flex flex-col gap-2 items-center overflow-hidden rounded-lg shadow-customeFour">
                <ClipboardDocumentListIcon className="w-10 m-3"/>
                <p className="w-full bg-neutral-800 font-bold text-white p-2 px-4 text-center">Full estate documentories</p>
            </span>
        </div>
    </section>
  )
}
