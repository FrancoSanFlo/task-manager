import PlusIcon from "./PlusIcon";
import Button from "./Button";

const Header = ({ handleButtonClick }) => {
  return (
    <header className="w-full p-3 bg-blue-950 flex flex-row items-center justify-between">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold">
        Task Manager
      </h1>
    </header>
  );
};

export default Header;
