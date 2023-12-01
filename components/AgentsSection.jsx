import { ArrowLongRightIcon} from "@heroicons/react/24/outline";

export default function AgentsSection() {
  return (
    <div className="bg-zinc-50 p-1">
        <h3 className='text-2xl font-bold text-center mt-[2rem]'>Agents</h3>
        <section className="p-8 flex gap-4 items-center justify-around max-w-[1400px] mx-auto mt-[2rem] my-[2rem] max-[1100px]:flex-col">
            <div className="h-fit bg-white pr-4 flex gap-2 rounded-lg shadow-customeThree border-[1px] max-sm:text-sm">
                <img className="rounded-l-lg w-[8rem] h-[8rem] object-cover" src="/portraits/1.png" alt="" />
                <span className="p-2 flex flex-col justify-center gap-2">
                    <p className="text-lg max-sm:text-base">Henry nicelson <b>MA and co founder</b></p>
                    <p>a greate reale estate agent is like a real friend </p>
                </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center items-center content-start w-1/2 h-[11rem] max-[1100px]:w-full max-[1100px]:my-5 max-md:hidden">
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Martin Cummings</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Eric wright</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Robert Vargas</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Gary hodsgone</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Dean parker</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Neal day</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Arnold carline</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Philip shilingford</p>
                </span>
                <span className="bg-white p-1 rounded-lg overflow-hidden flex items-center h-fit border-[1px] border-zinc-300">
                    <img className="w-[3rem] h-[3rem] rounded-md object-cover" src="/portraits/4.png" alt="" />
                    <p className="p-2">Basil blanton</p>
                </span>
            </div>
        </section>
        <div className="text-lg flex items-center gap-4 justify-between px-20 max-w-[1400px] mx-auto mt-[4rem] my-[2rem] max-sm:flex-col">
            <p>Wanna become an agnet ?</p>
            <button className="text-white bg-neutral-800 rounded-md shadow-customeFour p-2 px-4 flex items-center gap-2">Enroll know <ArrowLongRightIcon className="w-[1.5rem]"/> </button>
        </div>
    </div>
  )
}
