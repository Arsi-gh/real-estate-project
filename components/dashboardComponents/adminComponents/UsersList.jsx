import { ChevronDownIcon, MagnifyingGlassIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline"

export default function UsersList() {
  return (
    <div className="w-full">
        <UsersFilter/>
        <div className="flex gap-4 p-2">
            <UsersCon/>
            <UsersChartCon/>
        </div>
    </div>
  )
}

const UsersFilter = () => {
    return (
        <div className="flex gap-x-2 m-4 items-center">
            <b>Filter : </b>
            <button className='flex gap-2 items-center p-1 px-3 bg-white shadow-customeOne rounded-md'>Sort <ChevronDownIcon className='w-[1.2rem]'/></button>
            <div className="flex gap-2 items-center">
                <input type="text" className="bg-white shadow-customeOne rounded-md p-1 px-2 text-base outline-neutral-800" placeholder="Search"/>
                <MagnifyingGlassIcon strokeWidth={2} className="w-[2rem] h-[2rem] p-1  rounded-md text-white bg-neutral-800 cursor-pointer"/>
            </div>
        </div>
    )
}

const UsersChartCon = () => {
    return (
        <div className="h-fit flex-1 flex flex-col bg-white rounded-lg shadow-customeOne overflow-hidden">
            <p className="flex justify-between bg-neutral-800 p-2 text-white font-bold">Users info <UsersIcon className="w-[1.5rem]"/> </p>
            <p className="p-2 border-t-[1px] border-zinc-300">Online users : <b>5</b> </p>
            <p className="p-2 border-t-[1px] border-zinc-300">Users logged in today : <b>10</b></p>
            <p className="p-2 border-t-[1px] border-zinc-300">Users signed up today : <b>20</b> </p>
            <p className="p-2 border-t-[1px] border-zinc-300">Users logged in this month : <b>100</b> </p>
            <p className="p-2 border-t-[1px] border-zinc-300">Users signed up this month : <b>200</b> </p>
            <p className="p-2 border-t-[1px] border-zinc-300">Users logged in this year : <b>400</b> </p>
            <p className="p-2 border-t-[1px] border-zinc-300">Users signed up this year : <b>500</b> </p>
        </div>
    )
}

const UsersCon = () => {
    return (
        <div className="flex flex-col gap-2">
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
            <UsersItem/>
        </div>
    )
}

const UsersItem = () => {
    return (
        <div className="w-fit flex p-2 pl-4 gap-x-5 items-center rounded-lg bg-white shadow-customeOne">
            <p>1</p>
            <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
            <p>Arsalan ghoochani</p>
            <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
            <p>arsalaghoochani15@gmail.com</p>
            <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
            <p><b>Created at : </b>2023 - 10 - 12</p>
            <TrashIcon  className="w-[1.6rem] cursor-pointer text-red-500"/>
        </div>
    )
}