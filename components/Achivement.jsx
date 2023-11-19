import { HandThumbUpIcon, HomeIcon, TrophyIcon, UserIcon } from "@heroicons/react/24/outline"

export default function Achivement() {
  return (
    <section className="max-w-[1400px] mx-auto p-4">
        <h3 className="text-3xl font-bold text-center max-md:text-lg">What we have achived in 50 years of work</h3>
        <div className="flex flex-wrap gap-8 justify-around max-md:justify-center items-center my-[3rem] max-[500px]:p-4">
            <AchivementItem text="Solded house">
                <HomeIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md max-md:rounded-md"/>
                <span className="text-[2rem] font-bold p-2 max-md:text-lg">40K</span>
            </AchivementItem>

            <AchivementItem text="Customer">
                <UserIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md max-md:rounded-md"/>
                <span className="text-[2rem] font-bold p-2 max-md:text-lg">200K</span>
            </AchivementItem>

            <AchivementItem text="Happy customer">
                <HandThumbUpIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md max-md:rounded-md"/>
                <span className="text-[2rem] font-bold p-2 max-md:text-lg">180K</span>
            </AchivementItem>

            <AchivementItem text="Award wining">
                <TrophyIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md max-md:rounded-md"/>
                <span className="text-[2rem] font-bold p-2 max-md:text-lg">200</span>
            </AchivementItem>
        </div>
    </section>
  )
}

const AchivementItem = ({children , text}) => {
    return (
        <div className="max-md:w-[45%] max-[500px]:w-full max-md:flex flex-row-reverse items-center justify-between gap-3">
            <div className="flex items-center max-md:flex-row-reverse">
                {children}
            </div>
            <p>{text}</p>
        </div>
    )
}