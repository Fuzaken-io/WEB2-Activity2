import React from 'react'

function Skills(props) {

    return (
        <div className=' w-full border-1 p-5 rounded-md'>
            <h1 className='font-bold text-xl mb-3'>Skills</h1>
            <ul className='flex flex-col gap-1'>
                {props.skills.map((skill, index) => (
                    <li 
                    key={index}
                    className='text-xs text-blue-700'
                    >* {skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default Skills