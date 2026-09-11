import { use } from "react";
import type { ITechnology } from "../../types/Technology";
import TechCard from "./TechCard";
import TechStack from "./TechStack";

interface TechProps {
    techPromise: Promise<ITechnology[]>
}

const Tech = ({ techPromise }: TechProps) => {
    const fetchedTech = use(techPromise);
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h2 className="font-inter font-extrabold text-[36px] bg-linear-to-r from-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text"><span className="text-[#0F172A]">Explore the</span> Technologies</h2>
                <p className="text-[#64748B] font-jakarta">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-4 max-w-7xl mx-auto">
                <div className=" grid col-span-3 grid-cols-3">
                    {
                        fetchedTech.map((tech) => {
                            return <TechCard key={tech.id} tech={tech} />
                        })
                    }
                </div>

                <div>
                    <TechStack/>
                </div>

            </div>



        </div>
    );
};

export default Tech;