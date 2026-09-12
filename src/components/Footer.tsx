import logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="border-t md:mt-20 mt-10 border-[#F1F5F9] font-jakarta">
            <div className="max-w-7xl mx-auto flex gap-40 md:py-16 py-6">
                <div className="text-center md:text-left">
                    <img className="mb-4 flex justify-center mx-auto md:justify-start md:mx-0" src={logo} alt="" />
                    <p className="mb-4 text-[#64748B] md:text-[14px] text-[12px] md:max-w-110">Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul className="flex gap-7 md:text-[14px] text-[12px] justify-center md:justify-start text-[#475569] font-semibold">
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </div>


                <div className="leading-8 text-[#64748B] text-[14px] md:flex md:flex-col hidden">
                    <h2 className="mb-2 font-bold text-[#0F172A]">PRODUCT</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>

                <div className="leading-8 text-[#64748B] text-[14px] md:flex md:flex-col hidden">
                    <h2 className="mb-2 font-bold text-[#0F172A]">COMPANY</h2>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>

                <div className="leading-8 text-[#64748B] text-[14px] md:flex md:flex-col hidden">
                    <h2 className="mb-2 font-bold text-[#0F172A]">LEGAL</h2>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t max-w-7xl mx-auto border-[#F1F5F9]"></div>
            <div className="flex md:justify-between justify-around max-w-7xl mx-auto py-8 text-[#94A3B8] md:text-[14px] text-[11px] ">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex md:gap-8 gap-3">
                    <p><a href="">Privacy</a></p>
                    <p><a href="">Terms</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;