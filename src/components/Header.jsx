import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ handleToggle }) => {
  return (
    <div>
      <header className="w-full ">
        <div className="">
          <nav className=" container py-6 flex justify-between items-center gap-4 ">
            <div className="flex justify-center items-center gap-8 ">
              <h2 className="text-3xl font-bold font-poppins">Shortly</h2>
              <ul className=" hidden lg:flex justify-center items-center font-poppins text-custom_gray gap-8">
                <li className="nav_link"> Features</li>
                <li className="nav_link">Price</li>
                <li className="nav_link">Resources</li>
              </ul>
            </div>
            <div>
              <button
                className="text-2xl md:hidden lg:hidden"
                onClick={handleToggle}
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div className="hidden md:flex justify-center items-center text-custom_gray gap-8">
              <p className="nav_link">Login</p>
              <button className=" px-4 py-2 bg-custom_primary_cyan text-white font-2xl rounded-full">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
