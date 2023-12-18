import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-toastify";
import { toastConfings } from "../toastConfigs";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
    <div className="w-[30rem] z-30 fixed top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-wihte p-4  grid place-items-center">
        <h3 className="flex items-center w-full justify-between text-lg font-semibold">Delete {text}<XMarkIcon onClick={() => display(false)} strokeWidth={2} className="w-7 cursor-pointer"/></h3>
        <span className="w-full h-[1px] bg-zinc-300 my-4"></span>
        <ExclamationTriangleIcon className="w-16 text-rose-600"/>
        <p className="text-lg text-center mt-2 justify-self-start">Are you sure you want to delete this {text} ? </p>
        <p className="text-center justify-self-start mb-4 text-red-600">After removing there is no other way to bring it back. </p>
        <div className="justify-self-end mt-2">
            <button onClick={() => display(false)} className="p-2 px-4 rounded-md bg-zinc-100 shadow-customeOne mr-2 hover:bg-zinc-200">Cancel</button>
            <button onClick={() => deleteFn()} className="p-2 px-4 rounded-md bg-rose-600 bg-opacity-95 text-white hover:bg-rose-700">Delete user</button>
        </div>
    </div>
    </>
  )
}
