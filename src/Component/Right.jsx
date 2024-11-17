import React from 'react'

function Right() {
    return (
        <div className='flex flex-wrap w-[23vw]'>
            <div className='space-y-2 bg-gray-50 p-2'>
                <h3 className='text-lg font-semibold'>The Overflow Blog</h3>
                <p className='text-sm'>The unexpected benifits of mentoring others</p>
                <p className='text-sm'>Podcast 354:Building for AR with Niantic Labs' augmented reality BSDK</p>
            </div>
            <div className='space-y-2 p-2 bg-gray-50'>
                <h3 className='text-lg font-semibold'>Featured & meta</h3>
                <p className='text-sm'>Beta release of Collectives<sup>Tm</sup> on Stack Overflow </p>
            </div>
            <div className='space-y-2 p-2 bg-gray-100'>
                <h3 className='text-lg font-semibold'>Hot meta post</h3>
                <div className='flex'>
                    <p className='font-bold pr-7'>8</p>
                    <p className='text-sm'>Tags [driver] and [device-driver] appear to be redundant</p>
                </div>
                
                <div className='flex'>
                    <p className='font-bold pr-5'>27</p>
                    <p className='text-sm'>How to handle dupes where A is closed as dup of B but I have an answer that....</p>
                </div>
                <div className='flex'>
                    <p className='font-bold pr-5'>27</p>
                    <p className='text-sm'>Ambiguous tag [contains] </p>
                </div>
                
            </div>
            <div className='space-y-4 pt-4'>

                <h3 className='text-lg font-semibold'>Custom filter</h3>
                <button className='border-2 p-1 text-blue-500'>add custom filter</button>
            </div>
        </div>
    )
}

export default Right