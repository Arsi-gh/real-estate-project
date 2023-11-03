import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-xl-[1400px] m-auto mb-[5rem] p-4 flex flex-col items-center">
        <span className="text-[10rem] font-bold">404</span>
        <p className="text-3xl flex gap-2 items-center"> Page not found <ExclamationTriangleIcon className="w-[1.8rem]"/></p>
        <p className="text-lg my-4">The page you are looking for is not available</p>
        <Link href="/" className="my-4 p-3 text-xl font-bold text-neutral-800 border-4 rounded-full border-neutral-800 hover:bg-neutral-800 hover:text-white">Go to main page</Link>
    </div>
  )
}
