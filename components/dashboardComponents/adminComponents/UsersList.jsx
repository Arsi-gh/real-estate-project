import SearchCom from "@/components/FilterComponents/SearchFilterCom"
import SortCom from "@/components/FilterComponents/SortFilterCom"
import { ChevronDownIcon, MagnifyingGlassIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { useEffect, useState } from "react"

export default function UsersList({users}) {
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
            <SortCom/>
            <SearchCom/>
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

    const [users , setUsers] = useState([])

    const getFn = async () => {
        const {data} = await axios.get('http://localhost:5000/users')
        setUsers(data)
    }
    
    useEffect(() => {
        getFn()
    } , [])

    if (!users) return <div className="flex flex-col gap-2"> laoding </div>

    return (
        <div className="flex flex-col gap-2">
            {
                users.map((user) => <UsersItem key={user.id} {...user}/>)
            }
        </div>
    )
}

const UsersItem = ({id , name , email , createdAt}) => {
    return (
        <div className="w-[50rem] flex p-2 pl-4 gap-x-5  items-center rounded-lg bg-white shadow-customeOne">
            <p>{id}</p>
            <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
            <p className="w-[10rem]">{name}</p>
            <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
            <p className="flex-1">{email}</p>
            <span className="h-[2rem] w-[1px] bg-zinc-300"></span>
            <p><b>Created at : </b>{createdAt.slice(0 , 10)}</p>
            <TrashIcon  className="w-[1.6rem] cursor-pointer text-red-500"/>
        </div>
    )
}