import React, { useState } from "react";
import type { Experience } from "../../data/experiences"; 

interface Props {
    experiences: Experience[];
}

export default function ExperiencesCard({ experiences }: Props) {
    const sortedExperiences = [...experiences].sort((a, b) => {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

    const [experience, setExperience] = useState<Experience>(sortedExperiences[0]);

    return (
        <div className="flex flex-col md:flex-row items-start gap-4 font-mono text-gray-900 dark:text-gray-200">
            <div className="w-full md:w-1/3 overflow-y-auto">
                <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible w-full pb-2 md:pb-0">
                    {sortedExperiences.map((exp) => {
                        const isActive = exp.id === experience?.id;
                        return (
                            <li
                                key={exp.id}
                                onClick={() => setExperience(exp)}
                                className={`
                                    cursor-pointer px-4 py-3 whitespace-nowrap
                                    flex-1 text-center
                                    md:flex-none md:text-left
                                    text-xs sm:text-sm 
                                    transition-all duration-200 ease-in-out
                                    border-b-2 md:border-b-0 md:border-l-2
                                    ${isActive 
                                        ? 'border-rose-500 bg-gray-100 dark:bg-white/5 text-rose-500 dark:text-rose-300 font-bold' 
                                        : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/5'
                                    }
                                `}
                            >
                                {exp.company}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="w-full md:w-2/3 min-h-[300px]">
                {experience && (
                    <div className="animate-fade-in px-2">
                        <h2 className="font-bold text-base sm:text-xl mb-1">
                            {experience.position}{" "}
                            <span className="text-rose-500">@</span>{" "}
                            {experience.company}
                        </h2>
                        
                        <p className="italic text-[10px] sm:text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" /></svg>
                            
                            {new Date(experience.startDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })} 
                            {" - "} 
                            {experience.endDate 
                                ? new Date(experience.endDate).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }) 
                                : 'Presente'}
                        </p>

                        <div className="mb-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                             {experience.description}
                        </div>

                        <ul className="space-y-3">
                            {experience.bullets?.map((bullet, index) => (
                                <li 
                                    key={index} 
                                    className="flex items-start text-[11px] sm:text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                                >
                                    <svg 
                                        className="w-3 h-3 min-w-[12px] sm:w-3.5 sm:h-3.5 text-rose-500 mr-2 mt-[2px] fill-current" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}