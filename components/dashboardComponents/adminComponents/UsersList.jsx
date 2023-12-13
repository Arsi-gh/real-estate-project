import SearchCom from "@/components/FilterComponents/SearchFilterCom"
import SortCom from "@/components/FilterComponents/SortFilterCom"
import DeleteModal from "@/components/WarningModals/DeleteModal"
import { ChevronDownIcon, MagnifyingGlassIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { useEffect, useState } from "react"
import MessageForm from "./MessageForm"

export default function UsersList({users}) {
  return (
    <div className="w-full">
        <UsersFilter/>
        <div className="flex gap-4 p-2">
            <UsersCon/>
            <MessageForm to="users"/>
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

const UsersCon = () => {

    const [users , setUsers] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const fetchUsers = async () => {
        setIsLoading(true)
        const {data} = await axios.get('http://localhost:5000/users')
        setUsers(data)
        setIsLoading(false)

    }
    
    useEffect(() => {
        fetchUsers()
    } , [])

    if (isLoading) return <div className="flex flex-col gap-2"> laoding </div>

    if (users) return (
        <div className="flex flex-col gap-2">
            {
                users.map((user) => <UsersItem key={user.id} fetchUsers={fetchUsers} {...user}/>)
            }
        </div>
    )
}

const UsersItem = ({id , name , email , createdAt , fetchUsers}) => {

    const [displayModal , setDisplayModal] = useState(false)

    return (
        <>
        <div style={{width : '50rem'}} className="flex p-2 pl-4 gap-x-5  items-center rounded-lg bg-white shadow-customeOne">
            <p>{id}</p>
            <span style={{height : '1px'}} className="h-8 bg-zinc-300"></span>
            <p className="w-40">{name}</p>
            <span style={{height : '1px'}} className="h-8 bg-zinc-300"></span>
            <p className="flex-1">{email}</p>
            <span style={{height : '1px'}} className="h-8 bg-zinc-300"></span>
            <p><b>Created at : </b>{createdAt.slice(0 , 10)}</p>
            <TrashIcon onClick={() => setDisplayModal(true)} className="w-6 cursor-pointer text-red-500"/>
        </div>
        {displayModal && <DeleteModal id={id} category="users" text='user' display={setDisplayModal} callback={fetchUsers}/>}
        </>
    )
}