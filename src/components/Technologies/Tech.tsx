import { use, useState } from "react";
import type { ITechnology } from "../../types/Technology";
import TechCard from "./TechCard";
import TechStack from "./TechStack";

interface TechProps {
    techPromise: Promise<ITechnology[]>
}

const Tech = ({ techPromise }: TechProps) => {
    const fetchedTech = use(techPromise);
    const [selectedTechs , setSelectedTechs] = useState<ITechnology[]>([]);



    return (
        <div>
            <div className="max-w-7xl md:ml-20  lg:mx-auto">
                <h2 className="font-inter font-extrabold md:text-[36px] text-center md:text-start text-[24px]"><span className="text-[#0F172A]">Explore the</span> <span className="brand-gradient text-transparent bg-clip-text">Technologies</span></h2>
                <p className="text-[#64748B] md:text-[16px] text-[12px] text-center md:text-start font-jakarta">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 max-w-7xl mx-auto gap-6">
                <div className=" grid grid-cols-1  lg:col-span-3 md:grid-cols-2 lg:grid-cols-3">
                    {
                        fetchedTech.map((tech) => {
                            return <TechCard key={tech.id} tech={tech} selectedTechs = {selectedTechs} setSelectedTechs = {setSelectedTechs}/>
                        })
                    }
                </div>

                <div>
                    <TechStack selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs}/>
                </div>

            </div>



        </div>
    );
};

export default Tech;