import { HandThumbUpIcon, HomeIcon, TrophyIcon, UserIcon } from "@heroicons/react/24/outline"

export default function Achivement() {
  return (
    <section className="max-w-[1400px] mx-auto p-4">
        <h3 className="text-3xl font-bold text-center">What we have achived in 50 years of work</h3>
        <div className="flex justify-around items-center my-[3rem]">
            <AchivementItem text="Solded house">
                <HomeIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md"/>
                <span className="text-[2rem] font-bold p-2">40K</span>
            </AchivementItem>

            <AchivementItem text="Customer">
                <UserIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md"/>
                <span className="text-[2rem] font-bold p-2">200K</span>
            </AchivementItem>

            <AchivementItem text="Happy customer">
                <HandThumbUpIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md"/>
                <span className="text-[2rem] font-bold p-2">180K</span>
            </AchivementItem>

            <AchivementItem text="Award wining">
                <TrophyIcon  className="w-[2.6rem] p-2 bg-neutral-800 text-white rounded-l-md"/>
                <span className="text-[2rem] font-bold p-2">200</span>
            </AchivementItem>
        </div>
    </section>
  )
}

const AchivementItem = ({children , text}) => {
    return (
        <div>
            <div className="flex items-center">
                {children}
            </div>
            <p>{text}</p>
        </div>
    )
}