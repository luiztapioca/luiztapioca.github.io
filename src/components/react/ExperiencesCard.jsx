import { useState } from "react";

function Experiences({ experiences }) {
    const [experience, setExperience] = useState(null);

    return (
        <div className="flex flex-col md:flex-row items-start">
            <div className="md:h-84 overflow-y-auto w-full md:w-auto">
                <ul className={``}>
                {experiences.map((exp) => {
                    const { company } = exp.data;
                    return (
                        <li
                            key={exp.id}
                            className={`p-4 text-xs md:text-lg ease-in-out duration-200 ${exp.id == experience?.id ? 'font-bold border-l-4 bg-slate-950 border-rose-400 text-rose-400' : ''}`}
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