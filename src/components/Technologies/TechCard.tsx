import { type Dispatch, type SetStateAction } from "react";
import type { ITechnology } from "../../types/Technology";
import symbol from "/Symbol.png"
import { toast } from "react-toastify";

interface CardProps {
    tech: ITechnology,
    selectedTechs: ITechnology[],
    setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>
}

const TechCard = ({ tech, selectedTechs, setSelectedTechs }: CardProps) => {
     

    const isSelected = selectedTechs.some((selectedTech) => {
        return selectedTech.id === tech.id
    })

    const handleStackSelection = () => {
        setSelectedTechs([...selectedTechs, tech]);
        toast.success("Stack Added Successfully", { position: "bottom-right", })
    }

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className={`w-75 shadow-sm p-5 rounded-2xl font-jakarta ${isSelected ? "border-2 border-[#f182ba] shadow-md shadow-[#eeb7d2]" : ""}`}>
                <div className="flex justify-between mb-8">
                    <img className="w-8" src={tech.icon} alt="" />
                    <p style={{backgroundColor: tech.badgeBg, color: tech.badgeText}} className="rounded-full px-[10.4px] py-0.5 flex items-center text-[11.5px]">{tech.badge}</p>
                </div>
                <div className="mb-5">
                    <h2 className="mb-3 font-bold text-lg">{tech.name}</h2>
                    <p className="text-[#64748B] text-[12px]">{tech.description}</p>
                </div>

                <div className="flex justify-between items-center text-[13px]">
                    <p className="bg-[#F1F5F9] text-[#475569] px-2 py-0.5">{tech.category}</p>
                    <p className="text-[#64748B]">{tech.difficulty}</p>
                    <p className="font-semibold flex items-center text-[#334155]"><img className="mr-1" src={symbol} alt="" />{tech.rating}</p>
                </div>

                <div className="text-center mt-4">
                    <button disabled={isSelected} onClick={handleStackSelection} className={`w-full py-2 btn text-[13px] rounded-lg ${isSelected ? "bg-[#ffdfef] text-[#EC4899] border-2 font-bold btn-disabled cursor-not-allowed pointer-events-auto!" : "bg-black text-white font-normal cursor-pointer"}`}>{isSelected ? "✓ Added to Stack" : "Add To Stack"}</button>
                </div>

            </div>
        </div>
    );
};

export default TechCard;