export default function FiltersBackground({display , setDisplay}) {
  if (display) return (
    <div onClick={() => setDisplay(false)} className="w-screen h-screen bg-black absolute top-0 left-0 z-20 opacity-30"></div>
  )
}
