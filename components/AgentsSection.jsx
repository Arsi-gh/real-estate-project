import { ArrowLongRightIcon} from "@heroicons/react/24/outline";

export default function AgentsSection() {
  return (
    <div className="bg-zinc-50 p-1">
        <h3 className='text-2xl font-bold text-center mt-8'>Agents</h3>
        <section style={{maxWidth : '1500px'}} className="p-8 flex gap-4 items-center justify-around mx-auto mt-8 my-8 max-lg:flex-col">
            <div className="h-fit bg-white pr-4 flex gap-2 rounded-lg shadow-customeThree max-sm:text-sm">
                <img className="rounded-l-lg w-32 h-32 object-cover" src="/portraits/1.png" alt="" />
                <span className="p-2 flex flex-col justify-center gap-2">
                    <p className="text-lg max-sm:text-base">Henry nicelson <b>MA and co founder</b></p>
                    <p>a greate reale estate agent is like a real friend </p>
                </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center items-center content-start w-1/2 h-44 max-lg:w-full max-lg:my-5 max-md:hidden">
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Martin Cummings</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Eric wright</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Robert Vargas</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Gary hodsgone</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Dean parker</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Neal day</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Arnold carline</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Philip shilingford</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit shadow-customeOne border-zinc-300">
                    <img className="w-12 h-12 rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Basil blanton</p>
                </span>
            </div>
        </section>
        <div style={{width : '1500px'}} className="text-lg flex items-center gap-4 justify-between px-20 mx-auto mt-16 my-8 max-sm:flex-col">
            <p>Wanna become an agnet ?</p>
            <button className="text-white bg-neutral-800 rounded-md shadow-customeFour p-2 px-4 flex items-center gap-2">Enroll know <ArrowLongRightIcon className="w-6"/> </button>
        </div>
    </div>
  )
}
