import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{maxWidth : '1400px'}} className="m-auto mb-20 p-4 flex flex-col items-center">
        <span style={{fontSize : '10rem'}} className="font-bold">404</span>
        <p className="text-3xl flex gap-2 items-center"> Page not found <ExclamationTriangleIcon className="w-7"/></p>
        <p className="text-lg my-4">The page you are looking for is not available</p>
        <Link href="/" className="my-4 p-3 text-xl font-bold text-neutral-800 border-4 rounded-full border-neutral-800 hover:bg-neutral-800 hover:text-white">Go to main page</Link>
    </div>
  )
}
