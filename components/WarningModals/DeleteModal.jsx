import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function DeleteModal({id , category ,  text , display , callback}) {
   
  const deleteFn = async () => {
    const {data} = await axios.delete(`http://localhost:5000/${category}/${id}`)
    display(false)
    callback()
  }
    
  return (
    <>
    <div onClick={() => display(false)} className="w-screen h-screen fixed top-0 left-0 bg-black z-30 opacity-50"></div>
    <div className="z-30 fixed top-[50%] left-[50%] bg-white transform -translate-x-[50%] -translate-y-[50%] rounded-lg bg-wihte p-4 grid place-items-center gap-6">
        <ExclamationTriangleIcon className="w-[5rem] text-neutral-700"/>
        <p className="text-lg text-center">Are you sure you want to delete this {text} ? </p>
        <div>
            <button onClick={() => display(false)} className="p-2 px-4 rounded-lg bg-zinc-100 shadow-customeOne mr-2 hover:bg-zinc-200">Cancel</button>
            <button onClick={() => deleteFn()} className="p-2 px-4 rounded-lg bg-neutral-800 text-white shadow-customeFour">Delete user</button>
        </div>
    </div>
    </>
  )
}
