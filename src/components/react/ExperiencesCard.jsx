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
                        <h2 className="font-bold mb-1 text-xs md:text-lg">
                            { experience.data.position } <span className="text-rose-400">@</span> { experience.data.company }
                        </h2>
                        <h3
                            className="italic text-xs md:text-lg mb-2 flex items-center gap-2"
                        >
                            <svg className="h-4 w-4 md:h-5 md:w-5 fill-rose-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-box</title><path d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>
                            { experience.data.description }
                        </h3>
                        <p className="italic mb-4 text-xs md:text-lg flex items-center gap-2">
                            <svg className="h-4 w-4 md:h-5 md:w-5 fill-rose-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar</title><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" /></svg>
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