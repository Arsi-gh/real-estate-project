import { ArrowPathIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, CubeTransparentIcon, LanguageIcon, LockOpenIcon, PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section className="max-w-[1400px] h-[10rem] items-center m-auto flex my-[10rem] px-32">
        <div className="w-1/3 flex items-center justify-center relative">
            <p className="text-[3rem] font-semibold z-10 bg-white">Our servise</p>
            <ArrowPathIcon className="absolute -left-[10%] bottom-[40%] w-[5rem] h-[5rem] p-6 rounded-lg text-neutral-700 bg-white shadow-customeThree"/>
            <CubeTransparentIcon className="absolute right-[30%] bottom-[140%] w-[5rem] h-[5rem] p-6 rounded-lg text-neutral-700 bg-white shadow-customeThree"/>
            <LockOpenIcon className="absolute right-[40%] -bottom-[130%] w-[5rem] h-[5rem] p-6 rounded-lg text-neutral-700 bg-white shadow-customeThree"/>
            <span className="w-[14rem] -z-10 h-[14rem] border-4 border-r-0 rounded-3xl b border-neutral-600 absolute -left-2"></span>
        </div>
        <div className="w-2/3 flex items-center justify-center gap-4">
            <span className="flex flex-col gap-2 items-center overflow-hidden rounded-lg shadow-customeFour min-w-[15rem]">
                <LanguageIcon className="w-[2.5rem] m-3"/>
                <p className="w-full bg-neutral-800 font-bold text-white p-2 px-4 text-center">Support foreign languages</p>
            </span>
            <span className="flex flex-col gap-2 items-center overflow-hidden rounded-lg shadow-customeFour  min-w-[15rem]">
                <PhoneArrowUpRightIcon className="w-[2.5rem] m-3"/>
                <p className="w-full bg-neutral-800 font-bold text-white p-2 px-4 text-center">on phone consultancy</p>
            </span>
            <span className="flex flex-col gap-2 items-center overflow-hidden rounded-lg shadow-customeFour  min-w-[15rem]">
                <ClipboardDocumentListIcon className="w-[2.5rem] m-3"/>
                <p className="w-full bg-neutral-800 font-bold text-white p-2 px-4 text-center">Full estate documentories</p>
            </span>
        </div>
    </section>
  )
}