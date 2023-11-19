import Estate from '@/components/Estate'
import { PropertyBuiltDate, PropertyFeatures, PropertyLocation, PropertyMetrage, PropertyPrice, PropertyRooms, PropertySort, PropertyStatus, PropertyType } from '@/components/FilterAccordions'
import SideFilter from '@/components/SideFilter'
import axios from 'axios'
import React from 'react'

export default function Estates({estates}) {
  return (
    <div className='max-w-[1500px] mx-auto px-4'>
      <main className='flex gap-4 m-[1rem] my-[2rem]'>
        <div className='h-fit sticky top-[5rem]'>
          <SideFilter>
            <PropertyStatus/>
            <PropertyType/>
            <PropertyPrice/>
            <PropertyLocation/>
            <PropertyMetrage/>
            <PropertySort/>
            <PropertyRooms/>
            <PropertyBuiltDate/>
            <PropertyFeatures/>
          </SideFilter>
        </div>
        <div className='ml-[2rem] content-start flex gap-6 flex-wrap'>
          {!estates && <p>loading...</p>}
          {estates.map((estate) => {
            return <Estate key={estate.id} {...estate}/>
          })}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  
  const {data} = await axios.get('http://localhost:5000/estates')
  
  return {
    props : {
      estates : data
    },
    revalidate : 10,
  }
}