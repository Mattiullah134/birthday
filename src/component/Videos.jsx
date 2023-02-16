import React from 'react'
import vid1 from './assets/bg1.mp4';
import vid2 from './assets/bg2.mp4';
import vid3 from './assets/bg3.mp4';
import vid4 from './assets/bg4.mp4';
const Videos = () => {
    const videos = [
        {
            id: '1',
            vidUrl: vid1,
        },
        {
            id: '2',
            vidUrl: vid2,
        },
        {
            id: '3',
            vidUrl: vid3,
        },
        {
            id: '4',
            vidUrl: vid4,
        },

    ]
    return (
        <div className='bg-dark d-flex flex-column justify-content-center  align-items-center py-5'>
            {
                videos?.map(data => {
                    return <video width='80%' className='mb-5' key={data.id} src={data.vidUrl} autoPlay loop controls muted></video>
                })
            }

        </div>
    )
}

export default Videos
