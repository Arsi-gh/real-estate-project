import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfings } from "../toastConfigs";

export default function DeleteModal({id , category ,  text , display , callback}) {
   
  const deleteFn = async () => {
    const {data} = await axios.delete(`http://localhost:5000/${category}/${id}`)
    display(false)
    callback()
    toast.success(`${text} has been deleted successfully` , toastConfings)
  }
    
  return (
    <>
    <div onClick={() => display(false)} className="w-screen h-screen fixed top-0 left-0 bg-black z-30 opacity-50"></div>
    <div className="z-30 fixed top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-wihte p-4 grid place-items-center gap-6">
        <ExclamationTriangleIcon className="w-20 text-red-600"/>
        <p className="text-lg text-center">Are you sure you want to delete this {text} ? </p>
        <div>
            <button onClick={() => display(false)} className="p-2 px-4 rounded-md bg-zinc-100 shadow-customeOne mr-2 hover:bg-zinc-200">Cancel</button>
            <button onClick={() => deleteFn()} className="p-2 px-4 rounded-md bg-red-600 text-white hover:bg-red-700">Delete user</button>
        </div>
    </div>
    </>
  )
}
