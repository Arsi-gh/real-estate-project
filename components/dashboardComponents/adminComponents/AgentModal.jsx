import { CalendarIcon, CreditCardIcon, ExclamationTriangleIcon, HandThumbUpIcon, HomeModernIcon, InformationCircleIcon, MapPinIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function AgentModal({setDisplay}) {
  return (
    <>
    <div onClick={() => setDisplay(false)} className='fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-30'></div>
    <div className="max-w-[32rem] flex flex-col gap-3 fixed top-[10%] left-[50%] transform -translate-x-[50%] z-30 rounded-lg bg-white p-4">
        <div className='flex w-full justify-between items-center'>
            <h4 className='text-lg font-bold'>Agent infos</h4>
            <XMarkIcon onClick={() => setDisplay(false)} className='w-[1.8rem] cursor-pointer'/>
        </div>
        <span className='w-full h-[1px] bg-zinc-300 my-2'></span>
        <AgentBasicInfos/>  
        <span className='w-full h-[1px] bg-zinc-300 my-1'></span>
        <AgentProps/>
        <span className='w-full h-[1px] bg-zinc-300 my-1'></span>
        <h3 className='flex gap-2'><MapPinIcon className='w-[1.5rem]'/>Location :</h3>
        <p>USA - California - 1470 Rosewood Lane - zip code : 10011</p>
        <FireAgentCon/>
    </div>
    </>
  )
}

const AgentBasicInfos = () => {
    return (
      <div className='flex gap-2'>
        <img className='rounded-lg w-[10rem] h-[10rem] object-cover' src="/portraits/1.png" alt="" />
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
            <span className='flex justify-between gap-2 items-center w-[48.5%] p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Estates added : 20 </p>
                <HomeModernIcon className='w-[1.6rem]'/>
            </span>
            <span className='flex justify-between gap-2 items-center w-[48.5%] p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Solded properties : 10</p>
                <CreditCardIcon className='w-[1.6rem]'/>
            </span>
            <span className='flex justify-between gap-2 items-center w-[48.5%] p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Happy customers : 10</p>
                <HandThumbUpIcon className='w-[1.6rem]'/>
            </span>
            <span className='flex justify-between gap-2 items-center w-[48.5%] p-2 rounded-md bg-neutral-800 shadow-customeFour text-white'>
                <p>Hired since : 2023-5-6</p>
                <CalendarIcon className='w-[1.6rem]'/>
            </span>
        </div>
    )
}

const FireAgentCon = () => {
    return (
        <div className='w-full mt-4 p-3 pt-6 border-2 border-red-400 relative rounded-lg'>
            <p className='flex gap-2 items-center text-red-500 bg-white px-2 absolute -top-4'> <TrashIcon className='w-[1.5rem]'/> Fire agent</p>
            <div className='flex gap-2'>
                <input className='flex-1 shadow-customeOne p-2 px-4 rounded-md bg-zinc-100 outline-neutral-800' placeholder='Agent name' type="text" />
                <button className='p-2 px-4 rounded-md border-2 border-red-500 text-red-500'>Fire agent</button>
            </div>
            <p className='mt-3 flex gap-2 items-center'><InformationCircleIcon className='w-[1.5rem] text-red-500'/>Write the exact name of agent and then click fire agent</p>
        </div>
    )
}

export const AgentMessageForm = () => {
    return (
        <form>
            <input type="text" className='p-2 px-4 rounded-md' placeholder='Title'/>
            <textarea className='p-2 rounded-md shadow-customeOne' placeholder='Description'></textarea>
            <button>Send message</button>
        </form>
    )
}
  
