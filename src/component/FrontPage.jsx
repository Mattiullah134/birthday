import React from 'react'
import video from './background.mp4';
const FrontPage = ({ backChange }) => {
    console.log(backChange);
    // useEffect(() => {
    //     setTimeout(() => {
    //     }, 4000);
    // }, [])
    return (
        <div style={{
            paddingTop: '5rem', height: '100vh', background: `${backChange ? 'transparent' : 'black'}`, position: 'relative', height: '100vh'
        }}>
            <div className="container-fluid pt-5">
                <div className="row g-3 px-5">
                    <div className="col-md-6 col-sm-12 text-white d-flex justify-content-center align-items-center text-center">
                        <p className='text-white'>As we celebrate your birthday, I give thanks to God for placing you in my life. May your day be filled with joy, reflection, and hope for the year ahead, and may He continue to bless you and watch over you all the days of your life.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-white d-flex justify-content-center align-items-center">
                        <img className='w-50' src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    </div>
                </div>
                {backChange && <video width='100%' height='700px' style={{ position: 'absolute', top: '0', left: '0', objectFit: 'cover', zIndex: '-1' }} src={video} autoPlay loop muted ></video>}
            </div>
        </div>
    )
}

export default FrontPage
