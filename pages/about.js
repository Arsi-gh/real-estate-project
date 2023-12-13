import React from 'react'

export default function About() {
  return (
    <>
    <div style={{maxWidth : '1400px'}} className='m-auto flex gap-4 p-4 my-12 max-xl:flex-col-reverse'>
        <img className='w-1/2 rounded-lg shadow-customeThree max-xl:w-full' src="/about-pic.png" alt="" />
        <div className='w-1/2 text-lg text-justify flex gap-4 flex-col max-xl:w-full max-sm:text-sm'>
            <h3 className='text-2xl font-bold max-sm:text-lg'>Mehrani estates</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit libero at nostrum sed maiores amet, quidem officiis id necessitatibus qui labore. Corrupti voluptatem delectus vel vitae fugit repellat, optio eum.
            Molestiae fugiat quos doloribus vitae iste possimus, ea nulla corrupti eos placeat delectus earum voluptates facilis fugit dolore soluta iusto. Tenetur similique, quam est itaque laudantium maiores obcaecati excepturi voluptates?
            Vero beatae vel maiores amet provident ipsum elips ducimus! Repellat sequi distinctio at iste blanditiis quae neque eveniet, officia minus, adipisci nostrum?</p>
            <h4 className='text-xl font-bold max-sm:text-lg'>Why we are here ? </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quibusdam qui neque vel obcaecati corporis aliquam porro deleniti, hic, illo est necessitatibus ullam eum voluptate eos fugit, delectus accusantium veritatis?
            Odio, alias. Est placeat atque velit  asperiores quidem sequi. Cumque expedita molestias excepturi nulla sunt provident alias, libero, voluptates atque praesentium possimus vel porro aliquid quae quis laborum laboriosam.</p>
        </div>
    </div>
    <ExpertsCon/>
    </>
  )
}

const ExpertsCon = () => {
    return (
        <div style={{maxWidth : '1400px'}} className='m-auto p-4 my-8 flex justify-around gap-6 max-md:flex-wrap'>
            <ExpertCard position="Expert" img="/portraits/4.png"/>
            <ExpertCard position="CEO" img="/portraits/2.png"/>
            <ExpertCard position="MA" img="/portraits/1.png"/>
        </div>
    )
}

const ExpertCard = ({img , position}) => {
    return (
        <div style={{width : "25rem" , height : "25rem"}} className='rounded-lg overflow-hidden shadow-customeOne relative max-sm:w-full max-sm:text-sm max-sm:h-auto'>
            <img className='w-full h-full object-cover' src={img} alt="" />
            <p className='p-2 text-justify absolute bottom-0 z-10 bg-white/90 filter backdrop-opacity-20'>Lorem ipsum dolor sit amet consectetur addol enim quaerat numquam. Illum aut corrupti quas. Dolore tenetur excepturi adipisci . <b>{position}</b></p>
        </div>
    )
}
