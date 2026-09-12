import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <div className="sticky top-0 bg-white">
            <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
                <button className="relative md:hidden left-0">
                    <RxHamburgerMenu />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <img className="md:w-32 w-24" src={logo} alt="" />
                </div>

                <div>
                    <ul className="gap-7 font-semibold text-[14px] hidden md:flex">
                        <li className="text-[#DB2777]"><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className="flex md:text-[14px] text-[10px]">
                    <button className="cursor-pointer">Sign In</button>
                    <button className=" bg-[#D91B7E] text-white rounded-4xl ml-3 md:py-2 md:px-4 py-1 px-2 cursor-pointer">Sign Up</button>
                </div>

            </nav>

        </div>
    );
};

export default Nav;