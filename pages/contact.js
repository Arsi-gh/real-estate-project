import ContactForm from '@/components/ContactForm'
import {AtSymbolIcon, DevicePhoneMobileIcon, MapPinIcon} from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section style={{maxWidth : '1400px'}} className='m-auto flex flex-col gap-4 px-4 text-neutral-800 mt-4 mb-8'>
        <div className='w-full flex items-center max-lg:flex-col'>
            <div className='flex flex-col gap-4 p-4 w-1/2 max-lg:w-full'>
                <h3 className='text-5xl font-bold max-sm:text-3xl'>Feel free to reach out</h3>
                <p className='text-lg max-sm:text-sm'>We are always ready to listen to you and help you with your real estate needs.</p>
                <ContactForm/>
                <p className='text-lg max-sm:text-sm'>Thanks you for your trust in mehrani estates  . we are commited to being your truste partner  in all your property needs</p>
            </div>
            <div className='w-1/2 flex gap-4 flex-col items-center max-lg:w-full max-lg:items-start'>
                <img style={{width : "30rem" , height : "20rem"}} className='shadow-customeThree rounded-lg max-lg:hidden' src="/contact.png" alt="" />
                <ContactOptions/>
            </div>
        </div>
    </section>
  )
}

const ContactOptions = () => {
    return (
        <div className='flex  gap-6 flex-col m-4 max-sm:text-sm'>
            <ContactOption title="Email : " text="mehraniestates@gmail.com">
                <AtSymbolIcon className='w-12 p-3 rounded-full bg-neutral-800 text-white'/>
            </ContactOption>
            <ContactOption title="Phone number" text="+32 6219 8615">
                <DevicePhoneMobileIcon className='w-12 p-3 rounded-full bg-neutral-800 text-white'/>
            </ContactOption>
            <ContactOption title="Location" text="Los angles sen valley jr alley mehrani office USA 3454">
                <MapPinIcon className='w-12 p-3 rounded-full bg-neutral-800 text-white'/>
            </ContactOption>
        </div>
    )
}

const ContactOption = ({children , title , text }) => {
    return (
        <div className='flex gap-4 items-center'>
            {children}
            <div>
                <h4 className='font-semibold text-lg'>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}