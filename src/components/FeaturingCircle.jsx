import React from 'react'

const FeaturingCircle = () => {
    return (
        <div className='main_container d-flex justify-content-center align-items-center'>
            <div className="circle">
                <div className='innerCircle'></div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='arrowBtn py-1 px-3 font13 pointer'>Featured on Product Hunt <span className='ps-2'> &#x2771;</span></div>
                    <h1 className='featuringText py-3'>Your team,<br></br> reimaginned</h1>
                    <p className='op80  text-center featuringDesc'>Take your team up a level with easy-to-use tools, effortless templates and efficient workflows.</p>
                    <button className='btn pointer bg-white text-dark op80 my-3'>Get started today</button>
                    <p className='op80 m-0'>Learn more</p>
                    <button className='btn op80 pointer'>&#x2193;</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturingCircle