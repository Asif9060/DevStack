import heroImg from "../assets/banner-stack.png"
const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-10">
            <div className="text-center md:text-left">
                <div className="font-inter font-bold md:text-6xl text-3xl mb-7 md:mr-17 whitespace-nowrap tracking-tighter">
                    <h2 className="text-[#0F172A]">Build Your Ideal</h2>
                    <h2 className="brand-gradient text-transparent bg-clip-text">Development Stack</h2>
                </div>

                <p className="mb-10 text-[#475569] md:text-[18px] text-[14px] md:max-w-130 max-w-85 mx-auto md:mx-0 font-jakarta">Explore frontend, backend, database, and tooling options, 
                    compare them side by side, and put together the stack that fits your 
                    next project.</p>

                <div className="flex md:flex-row justify-center md:justify-start gap-2">
                    <button className="btn font-inter font-[550] brand-gradient text-white rounded-lg">Explore Technologies</button>
                    <button className="btn px-10 font-inter text-[#374151] font-[450]">Learn More</button>
                </div>
            </div>

            <div className="md:ml-45 md:mt-0 flex justify-center">
                <img className="" src={heroImg} alt="" />
            </div>

        </div>
    );
};

export default Hero;