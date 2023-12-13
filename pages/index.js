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
      <h3 className='text-2xl font-bold text-center mb-12 max-sm:text-lg max-sm:mb-4'>Check out some estates</h3>
      <section style={{maxWidth : '1400px'}} className='flex gap-4 justify-around flex-wrap mx-auto my-4 max-md:p-3'>
        {estates.map(estate => {
          return <Estate key={estate.id} {...estate}/>
        }) }
      </section>
      <Parallax/>
      <h3 className='text-2xl font-bold text-center my-12'>Some of our documents</h3>
      <section style={{maxWidth : '1400px'}} className='flex flex-wrap gap-4 justify-around mx-auto my-8 max-md:m-4'>
        <DocumentItem img="/documents/1.png"/>
        <DocumentItem img="/documents/2.png"/>
        <DocumentItem img="/documents/3.png"/>
        <DocumentItem img="/documents/4.png"/>
      </section>
      <AgentsSection/>
      <h3 className='text-2xl font-bold text-center mt-16 max-sm:mt-8'>FAQs</h3>
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
