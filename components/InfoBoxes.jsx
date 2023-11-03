import { BuildingOffice2Icon, BuildingOfficeIcon, ChartPieIcon, ClipboardDocumentIcon, DocumentTextIcon, HandThumbUpIcon } from "@heroicons/react/24/outline"

export default function InfoBoxes() {
  return (
    <section className="flex justify-around mt-[15rem] mb-[5rem] max-w-[1400px] mx-auto">
        <InfoBox>
            <BuildingOfficeIcon className="w-[2.5rem] p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>

        <InfoBox>
            <ChartPieIcon className="w-[2.5rem] p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>

        <InfoBox>
            <DocumentTextIcon className="w-[2.5rem] p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>

        <InfoBox>
            <HandThumbUpIcon className="w-[2.5rem] p-2 rounded-full bg-neutral-800 text-white"/>
            <p>Title lorem morem</p>
        </InfoBox>
    </section>
  )
}

const InfoBox = ({children}) => {
    return (
        <div className="rounded-lg max-w-[18rem] shadow-customeOne bg-white overflow-hidden">
            <div className="p-3  border-b-[1px] border-zinc-300 flex items-center gap-4">
                {children}
            </div>
            <p className="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laborum quaerat voluptate, eius neque deleniti impedit repudiandae repellendus vel nobis, vitae dolores odio totam quasi sit voluptas quidem, deserunt doloribus.</p>
        </div>
    )
}