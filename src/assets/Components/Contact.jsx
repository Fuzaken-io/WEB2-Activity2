import React from 'react'

function Contact(props) {

  return (
    <>
        <div className='w-full border-1 p-5 rounded-md'>
            <h1 className='font-bold text-xl mb-3'>Contact Information</h1>
            <div className='flex flex-col gap-1'>
                <a href="" className='text-xs'><span className='font-semibold'>Email:</span> {props.email}</a>
                <a href="" className='text-xs'><span className='font-semibold'>Phone:</span> {props.phone}</a>
                <a href="" className='text-xs'><span className='font-semibold'>Address:</span> {props.address}</a>
                <a href={props.website} target='_blank' className='text-xs'>        
                </a>
            </div>
        </div>
    </>
  )
}

export default Contact