import { useState } from "react";
import type { Experience } from "../../types/experience";

function Experiences({ experiences }: { experiences:Experience[] }) {
    const [currentExperience, setCurrentExperience] = useState<Experience | null>(null);
    return (
        <div className="flex items-start">
            <div className="flex flex-col bg-slate-950">
            {experiences.map((exp) => {
                const { company } = exp.data;
                return (
                    <div key={ exp.id } className={`${currentExperience?.id == exp.id ? 'border-rose-400 ease-in-out duration-300' : 'border-slate-800'} border-l-4 w-full`}>
                        <button
                            className={`p-4`}
                            onClick={() => {
                                setCurrentExperience(exp) 
                            }}
                        >
                            {company}
                        </button>
                    </div>
                )
            })}
            </div>
            <div className="flex-1 overflow-auto bg-slate-950">
            { currentExperience && (
                <div>
                </div>
            )}
            </div>
        </div>
    )
}

export default Experiences;