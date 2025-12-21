import { useState } from "react";

function Experiences({ experiences }) {
    experiences.sort((a, b) => a.data.company.localeCompare(b.data.company));
    const [experience, setExperience] = useState(experiences[0]);
    return (
        <div className="flex flex-col md:flex-row items-start">
            <div className="md:h-84 overflow-y-auto w-full md:w-auto">
                <ul>
                {experiences.map((exp) => {
                    const { company } = exp.data;
                    return (
                        <li
                            key={exp.id}
                            className={`select-none p-2 text-xs md:text-lg ease-in-out duration-200 ${exp.id == experience?.id ? 'font-bold border-l-4 bg-slate-800 border-rose-400 text-rose-400' : ''}`}
                            onClick={ () => setExperience(exp) }
                        >
                            { company }
                        </li>
                    );
                })}
                </ul>
            </div>
            <div className="p-4 flex-1">
                { experience && (
                    <div>
                        <h2 className="font-bold mb-2 text-xs md:text-lg">
                            { experience.data.position } <span className="text-rose-400">@</span> { experience.data.description }
                        </h2>
                        <p className="italic mb-4 text-xs md:text-lg">
                            { new Date(experience.data.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric' }) } - { experience.data.endDate ? new Date(experience.data.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric' }) : 'Presente' }
                        </p>
                        <ul>
                        {experience.data.bullets?.map((bullet, index) => {
                            return (
                                <li 
                                    className="mb-2 text-xs md:text-lg list-inside before:content-['★'] before:text-rose-400 before:mr-2"
                                    key={index}
                                >
                                    { bullet }
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Experiences;