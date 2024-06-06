import OverviewCard from "./OverviewCard"

const SideMenu = ({ tasks }) => {
  const pendingTasks = tasks.filter((task) => !task.done)
  const finishedTasks = tasks.filter((task) => task.done)

  return (
    <div className="w-full h-auto sm:w-[30%] grid grid-cols-2 grid-rows-2 sm:grid-rows-4">
      <OverviewCard title="Total" tasks={tasks} className={"col-span-2"} />
      <OverviewCard title="Pending" tasks={pendingTasks} className={"col-span-1 sm:col-span-2 md:col-span-1"} />
      <OverviewCard title="Finished" tasks={finishedTasks} className={"col-span-1 sm:col-span-2 md:col-span-1"} />
    </div>
  )
}

export default SideMenu