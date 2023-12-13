import {BuildingOfficeIcon, ChartPieIcon, DocumentTextIcon, HandThumbUpIcon } from "@heroicons/react/24/outline"

export default function InfoBoxes() {
  return (
    <section style={{maxWidth : '1500px'}} className="flex flex-wrap gap-4 justify-around xl:mt-60 mt-8 mb-20 mx-auto max-md:justify-center max-sm:m-4">
        <InfoBox>
            <BuildingOfficeIcon className="w-10 p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>

        <InfoBox>
            <ChartPieIcon className="w-10 p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>

        <InfoBox>
            <DocumentTextIcon className="w-10 p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>

        <InfoBox>
            <HandThumbUpIcon className="w-10 p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>
    </section>
  )
}

const InfoBox = ({children}) => {
    return (
        <div className="rounded-lg w-72 shrink shadow-customeOne bg-white overflow-hidden max-md:w-2/5 max-sm:w-full">
            <div className="p-3  flex items-center gap-4">
                {children}
            </div>
            <p style={{borderTop : '1px solid rgba(212 , 212 , 216 , 70%)'}} className="p-4 border-zinc-300 max-md:hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laborum quaerat voluptate, eius neque deleniti impedit repudiandae repellendus vel nobis, vitae dolores odio totam quasi sit voluptas quidem, deserunt doloribus.</p>
        </div>
    )
}