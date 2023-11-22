import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function MessageForm({to}) {
    return (
        <form className="w-[18rem] h-fit flex flex-col gap-2 bg-white p-2 rounded-lg shadow-customeOne">
          <h3 className="flex gap-2 items-center"> <EnvelopeIcon className="w-[1.5rem]"/> Send message to all {to} </h3>
          <input className="bg-slate-50 p-2 px-4 outline-neutral-800 rounded-md shadow-customeOne" placeholder="Title" type="text" name="title" />
          <textarea className="bg-slate-50 h-[26rem] outline-neutral-800 p-2 px-4 rounded-md shadow-customeOne" placeholder="Description"></textarea>
          <button className="p-2 px-4 rounded-md shadow-customeOne text-white bg-neutral-800">Send message</button>
        </form>
    )
}
