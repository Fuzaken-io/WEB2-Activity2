import React from 'react'

function Profile(props) {

    return (
        <>
            <div className="flex flex-col items-center text-center ">
                <div className='h-20 mb-5'>
                    <img className='w-25 h-25 rounded-full' src={props.profile} alt="" />
                </div>
                <h4 className='font-bold text-xl'>{props.name}</h4>
                <p className='w-[50%] text-sm text-gray-700'>{props.about}</p>
            </div>
        </>
    )
}

export default Profile