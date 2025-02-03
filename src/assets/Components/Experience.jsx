import React from 'react'

function Experience(props) {

    return (
        <div className='w-full border-1 p-5 rounded-md  mb-10'>
            <h1 className='font-bold text-xl mb-3'>Work Experience</h1>
            <ul className='flex flex-col gap-3'>
                {
                    props.experiences.map((experience, index) => (
                       <div key={index} className=' text-xs flex flex-col gap-1'>
                            <h1 className='font-semibold'>{experience.title}</h1>
                            <h4 className='text-blue-700'>{experience.date}</h4>
                            <p >{experience.description}</p>
                            <hr />
                       </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Experience