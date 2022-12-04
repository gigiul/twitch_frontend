import React from 'react'
import Image from 'next/image'

const LiveChannelItem = ({img, profile_img, title, user, game}) => {
  return (
    <div className='p-2'>
        <Image src={img} />
        <div className='flex pt-2'>
            <div className='pr-2'>
                <Image src={profile_img} width='50' height='50' className='rounded-full pt-2'/>
            </div>
            <div>
                <p className='text-sm font-bold'>{title}</p>
                <p className='text-sm text-gray-500'>{user}</p>
                <p className='text-sm text-gray-500'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelItem