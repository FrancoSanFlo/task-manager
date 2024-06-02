import PlusIcon from "./PlusIcon";
import Button from "./Button";

const Header = ({handleButtonClick}) => {

  return (
    <header className="w-full p-3 bg-blue-950 flex flex-row items-center justify-between">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold">
        Task Manager
      </h1>
      {/* Desktop */}
      <Button
        text="+ Tarea"
        className={
          "text-white text-md py-1 px-4 bg-black/35 rounded-md hover:bg-black/50 transition ease-in-out duration-300 mt-2 sm:mt-0 sm:block hidden"
        }
        onButtonClick={handleButtonClick}
      />
      {/* Mobile */}
      <Button
        className={
          "text-white p-1 flex items-center justify-center bg-black/35 rounded-full hover:bg-black/50 transition ease-in-out duration-300 mt-2 sm:mt-0 w-8 h-8 sm:hidden"
        }
        onButtonClick={handleButtonClick}
      >
        <PlusIcon />
      </Button>
    </header>
  );
};

export default Header;
