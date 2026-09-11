import type { ITechnology } from "../../types/Technology";
import symbol from "/Symbol.png"

const TechCard = ({ tech }: { tech: ITechnology }) => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="w-75 shadow-sm p-5 rounded-2xl font-jakarta">
                <div className="flex justify-between mb-8">
                    <img className="w-8" src={tech.icon} alt="" />
                    <p className="bg-[#E0F2FE] text-[#0EA5E9] rounded-full px-[10.4px] py-0.5 flex items-center text-[11.5px]">{tech.badge}</p>
                </div>
                <div className="mb-5">
                    <h2 className="mb-3 font-bold text-lg">{tech.name}</h2>
                    <p className="text-[#64748B] text-[12px]">{tech.description}</p>
                </div>

                <div className="flex justify-between text-[13px]">
                    <p className="bg-[#F1F5F9] text-[#475569] px-2 py-0.5">{tech.category}</p>
                    <p className="text-[#64748B]">{tech.difficulty}</p>
                    <p className="font-semibold flex items-center text-[#334155]"><img className="mr-1" src={symbol} alt="" />{tech.rating}</p>
                </div>

                <div className="text-center mt-4">
                    <button className="w-full btn font-normal bg-black text-white py-2.5 rounded-xl cursor-pointer">Add to Stack</button>
                </div>

            </div>
        </div>
    );
};

export default TechCard;