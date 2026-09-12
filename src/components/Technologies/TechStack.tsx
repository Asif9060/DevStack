import { FiX } from "react-icons/fi";
import type { ITechnology } from "../../types/Technology";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface CardProps {
    selectedTechs: ITechnology[],
    setSelectedTechs: Dispatch<SetStateAction<ITechnology[]>>
}

const TechStack = ({ selectedTechs, setSelectedTechs }: CardProps) => {

    const handleRemoveTech = (techName: string) => {
        const remainingTech = selectedTechs.filter((tech) => tech.name !== techName)
        setSelectedTechs(remainingTech)
        toast.warning(`Removed ${techName} from your tech stack.`, { position: "bottom-right" })
    }

    const handleRemoveAllTech = () => {
        setSelectedTechs([]);
        toast.warning("All technologies removed from your stack", { position: "bottom-right" })
    }

    return (
        <div className="font-jakarta mt-10">
            <div className="p-5 shadow-sm rounded-2xl w-75 justify-center mx-auto md:mx-0 md:justify-start">
                <div className="mb-5">
                    <h2 className="text-[16px] text-[#0F172A] font-bold">Your Stack</h2>
                    <p className="text-[#94A3B8] text-[12px] font-normal">{selectedTechs.length > 0 ? `${selectedTechs.length} Technology Selected` : "No technologies selected yet"}</p>
                </div>
                <div className={`${selectedTechs.length > 0 ? "" : "p-6 border border-[#E2E8F0] rounded-xl border-dotted "}`}>
                    {
                        selectedTechs.length === 0 ? (<p className="text-[#94A3B8] text-center">Your stack is empty.</p>) : (
                            selectedTechs.map((tech) => {
                                return (
                                    <div className="flex items-center justify-between border mb-2 border-[#E2E8F0] rounded-lg p-2.5">
                                        <div className="flex items-center">
                                            <div className="mr-3">
                                                <img className="w-8" src={tech.icon} alt="" />
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-[14px]">{tech.name}</h2>
                                                <p className="text-[10px] text-[#94A3B8]">{tech.category}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <button onClick={()=> handleRemoveTech(tech.name)} className="cursor-pointer"><FiX color="#94A3B8" size={"1.7rem"} /></button>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }

                    {
                        selectedTechs.length > 0 ? <button onClick={handleRemoveAllTech} className="btn w-full rounded-lg text-[#D82C20] border-[#D82C20] bg-white">Remove All</button> : ""
                    }
                </div>

            </div>
        </div>
    );
};

export default TechStack;