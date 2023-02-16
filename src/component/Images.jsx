import React from 'react'

const Images = () => {
    const images = [
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
        {
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
        {
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
        {
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
        {
            id: '5',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
        {
            id: '6',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
        {
            id: '7',
            imageUrl: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80',
            title: 'This is my image',
            description: 'This is me'
        },
    ]
    return (
        <div className=' pt-5  d-flex flex-row w-100 flex-wrap justify-content-center bg-dark '>
            {images.map((data) => {
                return <div key={data.id} className="card m-3" style={{ width: '20rem' }}>
                    <img src={data.imageUrl} width='w-25' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Images
