import Achivement from '@/components/Achivement'
import AgentsSection from '@/components/AgentsSection'
import DocumentItem from '@/components/DocumentItem'
import Estate from '@/components/Estate'
import FAQ from '@/components/FAQ'
import InfoBoxes from '@/components/InfoBoxes'
import MainHeader from '@/components/MainHeader'
import Parallax from '@/components/Parallax'
import Services from '@/components/Services'
import axios from 'axios'

export default function Home({estates}) {
  return (
    <>
      <MainHeader/>
      <InfoBoxes/>
      <Achivement/>
      <h3 className='text-2xl font-bold text-center mb-[3rem] max-sm:text-lg max-sm:mb-[1rem]'>Check out some estates</h3>
      <section className='flex gap-4 justify-around flex-wrap max-w-[1400px] mx-auto my-[1rem] max-md:p-3'>
        {estates.map(estate => {
          return <Estate key={estate.id} {...estate}/>
        }) }
      </section>
      <Parallax/>
      <h3 className='text-2xl font-bold text-center my-[3rem]'>Some of our documents</h3>
      <section className='flex gap-4 justify-around max-w-[1400px] mx-auto my-[2rem]'>
        <DocumentItem img="/documents/1.png"/>
        <DocumentItem img="/documents/2.png"/>
        <DocumentItem img="/documents/3.png"/>
        <DocumentItem img="/documents/4.png"/>
      </section>
      <AgentsSection/>
      <h3 className='text-2xl font-bold text-center mt-[4rem]'>FAQs</h3>
      <FAQ/>
      <Services/>
    </>
  )
}

export async function getStaticProps () {

  const { data } = await axios.get('http://localhost:5000/estates')

  return {
    props : {
      estates : data.slice(0 , 4)
    },
    revalidate : 10,
  }
}
