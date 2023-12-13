import { CalendarIcon, CreditCardIcon, HandThumbUpIcon, HomeModernIcon, InformationCircleIcon, MapPinIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function AgentModal({setDisplay}) {
  return (
    <>
    <div onClick={() => setDisplay(false)} className='fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-30'></div>
    <div style={{maxWidth : '32rem'}} className="flex flex-col gap-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg bg-white p-4">
        <div className='flex w-full justify-between items-center'>
            <h4 className='text-lg font-bold'>Agent infos</h4>
            <XMarkIcon onClick={() => setDisplay(false)} className='w-7 cursor-pointer'/>
        </div>
        <span style={{height : '1px'}} className='w-full bg-zinc-300 my-2'></span>
        <AgentBasicInfos/>  
        <span style={{height : '1px'}} className='w-full bg-zinc-300 my-1'></span>
        <AgentProps/>
        <span style={{height : '1px'}} className='w-full bg-zinc-300 my-1'></span>
        <h3 className='flex gap-2'><MapPinIcon className='w-6'/>Location :</h3>
        <p>USA - California - 1470 Rosewood Lane - zip code : 10011</p>
        <FireAgentCon/>
    </div>
    </>
  )
}

const AgentBasicInfos = () => {
    return (
      <div className='flex gap-2'>
        <img className='rounded-lg w-40 h-40 object-cover' src="/portraits/1.png" alt="" />
        <div className='flex flex-col gap-2'>
            <p> <b>Full name :</b>  Arsalan ghoochani</p>
            <p> <b>Email :</b>  arsalanghoochani15@gmail.com</p>
            <p> <b>Phone number :</b>  09136955525</p>
            <p> <b>Date of birth : </b>  1999 - 8 - 11 </p>
            <p> <b>State : </b>  California </p>
        </div>
      </div>
    )
}

const AgentProps = () => {
    return (
        <div className='w-full gap-3 flex flex-wrap'>
            <span style={{width : '48.5%'}} className='flex justify-between gap-2 items-center p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Estates added : 20 </p>
                <HomeModernIcon className='w-6'/>
            </span>
            <span style={{width : '48.5%'}} className='flex justify-between gap-2 items-center p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Solded properties : 10</p>
                <CreditCardIcon className='w-6'/>
            </span>
            <span style={{width : '48.5%'}} className='flex justify-between gap-2 items-center p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Happy customers : 10</p>
                <HandThumbUpIcon className='w-6'/>
            </span>
            <span style={{width : '48.5%'}} className='flex justify-between gap-2 items-center p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Hired since : 2023-5-6</p>
                <CalendarIcon className='w-6'/>
            </span>
        </div>
    )
}

const FireAgentCon = () => {
    return (
        <div className='w-full mt-4 p-3 pt-6 border-2 border-red-400 relative rounded-lg'>
            <p className='flex gap-2 items-center text-red-500 bg-white px-2 absolute -top-4'> <TrashIcon className='w-6'/> Fire agent</p>
            <div className='flex gap-2'>
                <input className='flex-1 shadow-customeOne p-2 px-4 rounded-md bg-zinc-100 outline-neutral-800' placeholder='Agent name' type="text" />
                <button className='p-2 px-4 rounded-md border-2 border-red-500 text-red-500'>Fire agent</button>
            </div>
            <p className='mt-3 flex gap-2 items-center'><InformationCircleIcon className='w-6 text-red-500'/>Write the exact name of agent and then click fire agent</p>
        </div>
    )
}

export const AgentMessageForm = ({setDisplay}) => {
    return (
        <>
        <div onClick={() => setDisplay(false)} className='fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-30'></div>
        <form style={{width : '30rem'}} className='fixed top-1/2 left-1/2 transform rounded-lg -translate-x-1/2 -translate-y-1/2 p-3 bg-white flex flex-col gap-2 z-30'>
            <div className='flex w-full justify-between items-center'>
                <h4 className='text-lg font-bold'>Send message</h4>
                <XMarkIcon onClick={() => setDisplay(false)} className='w-7 cursor-pointer'/>
            </div>
            <span style={{height : '1px'}} className='w-full bg-zinc-300 my-2'></span>
            <input type="text" className='bg-zinc-50 p-2 px-4 rounded-md shadow-customeOne' placeholder='Title'/>
            <textarea className='bg-zinc-50 h-60 p-2 rounded-md shadow-customeOne' placeholder='Description'></textarea>
            <button className='p-2 rounded-lg bg-neutral-800 shadow-customeFour text-white'>Send message</button>
        </form>
        </>
    )
}
  
