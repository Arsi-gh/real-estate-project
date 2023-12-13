export default function Message() {
  return (
    <div className='w-80 h-60 shadow-customeTwo border-zinc-300 bg-white rounded-lg overflow-hidden transition-all hover:shadow-customeThree'>
        <h4 className='p-2 bg-zinc-50'><b>Title : </b>New estates have been uploaded</h4>
        <p style={{borderTop : '1px' , borderBottom : '1px'}} className='p-2 border-zinc-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsa natus expedita quam pariatur reprehenderit, veritatis praesentium sed voluptates amet aspernatur error dolor fugiat id. Velit, quisquam quidem! Architecto, fuga.</p>
        <button className='bg-zinc-100 p-2 w-full'>Read</button>
    </div>
  )
}
