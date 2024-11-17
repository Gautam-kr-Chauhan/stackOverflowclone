import React from 'react'

function Middle() {
  return (
    <div>
        <div>
            <h3 className='font-semibold text-gray-500'>Top Question</h3>
            <div className='flex'>
                <button className='rounded-full bg-orange-400 text-white py-1 px-3 text-sm'>Interesting</button>
                <button className='text-gray-400 py-1 px-3 text-sm'>Bountied</button>
                <button className='text-gray-400 py-1 px-3 text-sm'>Hot</button>
                <button className='text-gray-400 py-1 px-3 text-sm'>Interesting</button>
                <button className='text-gray-400 py-1 px-3 text-sm'>Interesting</button>
            </div>
        </div>
    </div>
  )
}

export default Middle