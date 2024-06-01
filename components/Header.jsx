const Header = () => {
  return (
    <header className="w-full p-3 bg-blue-700 flex flex-col sm:flex-row align-middle justify-between">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold">
        Task Manager
      </h1>
      <button className="text-white text-md py-1 px-4 bg-black/35 rounded-md hover:bg-black/50 transition ease-in-out duration-300 mt-2 sm:mt-0">
        + Tarea
      </button>
    </header>
  );
};

export default Header;
