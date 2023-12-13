import DashLayout from "@/components/dashboardComponents/globalUsage/DashLayout";
import { UsersIcon } from "@heroicons/react/24/outline";


export default function Index() {
  return (
    <DashLayout>
      <div className="w-full h-full p-2 grid gap-3 grid-cols-4 grid-rows-3">
        <UsersInfo/>
        <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-white rounded-lg shadow-customeOne"></div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-4 bg-white rounded-lg shadow-customeOne"></div>
        <div className="col-start-1 col-end-4 row-start-3 row-end-4 bg-white rounded-lg shadow-customeOne"></div>
      </div>
    </DashLayout>
  )
}

const UsersInfo = () => {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-white rounded-lg shadow-customeOne overflow-hidden">
      <p className="flex justify-between bg-neutral-800 p-2 text-white font-bold">Users info <UsersIcon className="w-6"/> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Online users : <b>5</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Users logged in today : <b>10</b></p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Users signed up today : <b>20</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Users logged in this month : <b>100</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Users signed up this month : <b>200</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Users logged in this year : <b>400</b> </p>
      <p style={{borderBottom : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-2 border-zinc-300">Users signed up this year : <b>500</b> </p>
    </div>
  )
}