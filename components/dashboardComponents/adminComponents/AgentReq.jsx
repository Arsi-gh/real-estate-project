export default function AgentReq() {
  return (
    <div className='bg-white p-2 pl-4 rounded-lg shadow-customeOne flex items-center justify-between gap-2'>
        <p><b>Name : </b> Arsalan ghoochani</p>
        <span style={{width : '1px'}} className="h-8 bg-zinc-300"></span>
        <p><b>State : </b>California</p>
        <span style={{width : '1px'}} className="h-8 bg-zinc-300"></span>
        <p><b>Salary request : </b>12.000 $</p>
        <span style={{width : '1px'}} className="h-8 bg-zinc-300"></span>
        <p><b>Work experiance : </b>4 years</p>
        <span style={{width : '1px'}} className="h-8 bg-zinc-300"></span>
        <button className='p-2 px-4 rounded-lg bg-zinc-50 shadow-customeOne hover:bg-zinc-200'>See more</button>
    </div>
  )
}

export const AgentReqModal = () => {
    return (
        <>
        <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-30 z-30"></div>
        <div className="bg-white w-80 h-80 p-2 rounded-lg z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -trasnlate-y-1/2">

        </div>
        </>
    )
}