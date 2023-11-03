import DashLayout from "@/components/dashboardComponents/globalUsage/DashLayout";


export default function Index() {
  return (
    <DashLayout>
      <div className="w-full h-full p-2 grid gap-3 grid-cols-4 grid-rows-3">
        <div className="col-start-1 col-end-2 row-start-1 row-end-3 bg-white rounded-lg shadow-customeOne"></div>
        <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-white rounded-lg shadow-customeOne"></div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-4 bg-white rounded-lg shadow-customeOne"></div>
        <div className="col-start-1 col-end-4 row-start-3 row-end-4 bg-white rounded-lg shadow-customeOne"></div>
      </div>
    </DashLayout>
  )
}
