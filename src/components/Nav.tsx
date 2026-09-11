import logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <div>
            <nav className="max-w-7xl mx-auto flex justify-between items-center mt-6">
                <div>
                    <img className="w-32" src={logo} alt="" />
                </div>

                <div>
                    <ul className="flex gap-7 font-semibold text-[14px]">
                        <li className="text-[#DB2777]"><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className="flex text-[14px]">
                    <button className="cursor-pointer">Sign In</button>
                    <button className=" bg-[#D91B7E] text-white rounded-4xl ml-3 py-2.5 px-5 cursor-pointer">Sign Up</button>
                </div>
            </nav>

        </div>
    );
};

export default Nav;