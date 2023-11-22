import { ArrowUpTrayIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AgentReqForm({}) {
  return (
    <>
    <div className="w-screen h-screen z-20 bg-black opacity-70 fixed top-0 left-0"></div>
    <div className="bg-white w-[40rem] p-4 flex flex-col gap-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-30 shadow-customeFour">
        <div className="flex w-full justify-between items-center">
          <h3 className="text-xl font-bold">Send request</h3>
          <XMarkIcon className="w-[1.8rem] cursor-pointer"/>
        </div>
        <span className="my-2 w-full h-[1px] bg-zinc-300"></span>
        <form className="flex gap-2">
            <FileUploader/>
            <span className="h-[24rem] w-[1px] bg-zinc-300 mx-2"></span>
            <FormInputs/>
        </form>
        <button className="p-3 bg-neutral-800 font-bold text-white rounded-lg shadow-customeFour">Send requests</button>
    </div>
    </>
  )
}

const FormInputs = () => {
    return (
        <div className="flex-1 flex flex-col gap-2">
            <input className="p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800" type="text" placeholder="Full name" />
            <input className="p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800" type="email" placeholder="Email" />
            <input className="p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800" type="number" placeholder="Phone number" />
            <select className="p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800">
                <option value="select">state</option>
                <option value="california">california</option>
                <option value="los angles">los angles</option>
                <option value="los santos">los santos</option>
                <option value="washangton">washangton</option>
                <option value="virgina">virgina</option>
            </select>
            <input className="p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800" type="date" placeholder="Date of birth"/>
            <input className="p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800" type="number" placeholder="Years of experiance" />
            <textarea className="h-[6rem] p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne outline-neutral-800" placeholder="Write down your location"></textarea>
        </div>
    )
}

const FileUploader = () => {
    return (
        <div className="w-[18rem]">
            <div className="w-full grid place-items-center h-[15rem] rounded-lg bg-zinc-50 shadow-customeOne">
                <PhotoIcon className="w-[8rem] text-zinc-400"/>
            </div>
            <label className="mt-2 flex items-center justify-between p-2 rounded-lg bg-zinc-50 shadow-customeOne cursor-pointer hover:bg-zinc-200" htmlFor="agent-image">
                <p>Upload your image</p>
                <ArrowUpTrayIcon className="w-[1.5rem]"/>
            </label>
            <input className="hidden" id="agent-image" type="file" />
            <h3 className="mt-2">Resume : </h3>
            <label className="mt-2 flex items-center justify-between p-2 rounded-lg bg-zinc-50 border-2 border-dashed border-zinc-400 cursor-pointer hover:bg-zinc-200" htmlFor="agent-image">
                <p>Upload your resume</p>
                <ArrowUpTrayIcon className="w-[1.5rem]"/>
            </label>
        </div>
    )
}
