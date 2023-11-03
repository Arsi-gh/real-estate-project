import Link from 'next/link'

export default function NavControls({displayAddEstate}) {
  return (
    <div>
      <button onClick={() => displayAddEstate(true)} className="px-4 p-2  shadow-customeOne bg-white text-neutral-800 rounded-sm font-bold mr-2">Add Estate</button>
      <Link href="/dashboard" className="px-4 p-[10px] rounded-sm font-bold bg-neutral-800 text-white">Dashboard</Link>
    </div>
  )
}
