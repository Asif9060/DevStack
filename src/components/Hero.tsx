import heroImg from "../assets/banner-stack.png"
const Hero = () => {
    return (
        <div className="flex items-center max-w-7xl mx-auto mt-10">
            <div>
                <div className="font-inter font-bold text-6xl mb-7 mr-17 tracking-tighter">
                    <h2 className="text-[#0F172A]">Build Your Ideal</h2>
                    <h2 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text">Development Stack</h2>
                </div>

                <p className="mb-10 text-[#475569] max-w-120 font-jakarta">Explore frontend, backend, database, and tooling options, <br /> 
                    compare them side by side, and put together the stack that fits your 
                    next project.</p>

                <div className="flex gap-2">
                    <button className="btn font-inter font-[550] bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-lg">Explore Technologies</button>
                    <button className="btn px-10 font-inter text-[#374151] font-[450]">Learn More</button>
                </div>
            </div>

            <div className="ml-45">
                <img className="" src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;