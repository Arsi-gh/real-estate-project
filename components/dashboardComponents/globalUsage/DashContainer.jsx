export default function DashContainer({children}) {
  return (
    <section style={{height : '40rem'}} className='rounded-lg shadow-customeOne border-zinc-300 bg-zinc-50 flex-1'>
        {children}
    </section>
  )
}