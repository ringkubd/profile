import React, { useState } from 'react'


export default function Skills(props) {
    const { skills } = props.skillData
    return (
        <div className="flex flex-col sm:flex-row align-middle justify-center max-w-2xl mx-auto mt-5">
            {
                skills.map((skill, index) => {
                    return (
                        <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300 shadow-xl" key={index}>
                            {skill.icon}
                            <p className="text-xl font-semibold mt-4">{skill.name}</p>
                            <div className="w-full bg-gray-400 h-2">
                                <div className="bg-blue-600 h-2" style={{width: skill.strength + "%"}}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
