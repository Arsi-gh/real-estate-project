import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function FAQ() {

  const [displayAccordion , setDisplayAccordion] = useState(1)

  return (
    <section className='flex gap-4 max-w-[1400px] p-4 px-10 my-[1rem] m-auto max-sm:px-0'>
        <img className='w-[35rem] h-[25rem] rounded-lg shadow-customeThree max-xl:object-cover max-xl:w-1/3 max-lg:w-1/4 max-md:hidden' src="/FAQ/building.png" alt="" />
        <div className='flex flex-col gap-5 px-4 justify-center flex-1'>
            <DropDown index={1} displayHandler={setDisplayAccordion} display={displayAccordion} title="What would happen if contract get canceled ?" desc="Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!  Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi! Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!"/>
            <DropDown index={2} displayHandler={setDisplayAccordion} display={displayAccordion} title="What would happen if contract get canceled ?" desc="Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!  Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi! Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!"/>
            <DropDown index={3} displayHandler={setDisplayAccordion} display={displayAccordion} title="What would happen if contract get canceled ?" desc="Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!  Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi! Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!"/>
            <DropDown index={4} displayHandler={setDisplayAccordion} display={displayAccordion} title="What would happen if contract get canceled ?" desc="Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!  Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi! Lorem ipsum, dolor sit amet consectetur adipi. Necessitatibus optio dolor corrupti, ad facilis eos repellendus iure nesciunt ab eveniet excepturi!"/>
        </div>
    </section>
  )
}


const DropDown = ({index , displayHandler , title , desc , display}) => {
    return (
        <div className='rounded-lg shadow-customeOne overflow-hidden'>
            <div onClick={() => displayHandler(prev => prev == index ? null : index)} className='flex justify-between p-3 bg-zinc-100 cursor-pointer'>
                <p className='font-semibold max-md:text-sm'>{title}</p>
                <ChevronDownIcon className={`transition-all w-[1.4rem] ${+display === +index && 'rotate-180'}`}/>
            </div>
            <p className={`p-3 ${+display !== +index && 'hidden'} border-t-[1px] border-zinc-300`}>{desc}</p>
        </div>
    )
}
