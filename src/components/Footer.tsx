import logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="border-t mt-20 border-[#F1F5F9] font-jakarta">
            <div className="max-w-7xl mx-auto flex gap-40 py-16">
                <div>
                    <img className="mb-4" src={logo} alt="" />
                    <p className="mb-4 text-[#64748B] text-[14px]">Curated tools, technologies, and resources for developers building <br />
                        modern software.</p>
                    <ul className="flex gap-7 text-[14px] text-[#475569] font-semibold">
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </div>


                <div className="leading-8 text-[#64748B] text-[14px]">
                    <h2 className="mb-2 font-bold text-[#0F172A]">PRODUCT</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>

                <div className="leading-8 text-[#64748B] text-[14px]">
                    <h2 className="mb-2 font-bold text-[#0F172A]">COMPANY</h2>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>

                <div className="leading-8 text-[#64748B] text-[14px]">
                    <h2 className="mb-2 font-bold text-[#0F172A]">LEGAL</h2>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t max-w-7xl mx-auto border-[#F1F5F9]"></div>
            <div className="flex justify-between max-w-7xl mx-auto py-8 text-[#94A3B8] text-[14px]">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-8">
                    <p><a href="">Privacy</a></p>
                    <p><a href="">Terms</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;