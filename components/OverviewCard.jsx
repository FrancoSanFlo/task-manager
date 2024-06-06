const OverviewCard = ({ title, tasks, className }) => {
  return (
    <div className={`${className} flex flex-col items-center justify-center border border-gray-300 rounded-lg p-6 m-2 shadow-md transition-all duration-300 ease-in-out`}>
      <h1 className="text-xl text-gray-700">{title}</h1>
      <p className="text-lg text-gray-500">{tasks.length}</p>
    </div>
  )
}

export default OverviewCard