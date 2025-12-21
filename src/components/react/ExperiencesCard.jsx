import { useState } from "react";

function Experiences({ experiences }) {
    const [experience, setExperience] = useState(null);

    return (
        <div className="flex flex-row items-start">
            <div className="h-84 overflow-y-auto bg-slate-950 rounded-l-lg">
                <ul className={``}>
                {experiences.map((exp) => {
                    const { company } = exp.data;
                    return (
                        <li
                            key={exp.id}
                            className={`p-4 text-xs md:text-lg bg-slate-950 ease-in-out duration-200 ${exp.id == experience?.id ? 'font-bold border-l-4 border-rose-400' : ''}`}
                            onClick={ () => setExperience(exp) }
                        >
                            { company }
                        </li>
                    );
                })}
                </ul>
            </div>
            <div className="bg-slate-950 p-4 h-84 overflow-y-auto flex-1 rounded-r-lg">
                { experience && (
                    <div>
                        <h2 className="font-bold mb-2 text-xs md:text-lg">
                            <span className="text-rose-400">@</span> { experience.data.description } / { experience.data.position }
                        </h2>
                        <ul>
                        {experience.data.bullets?.map((bullet, index) => {
                            return (
                                <li 
                                    className="mb-2 text-xs md:text-lg list-disc list-inside"
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