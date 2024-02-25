import React from 'react'
import aboutProduct from '../../assets/images/aboutProduct.svg'
import icon from '../../assets/icons/Icon.svg'
const AboutProduct = () => {
    return (
        <div className='pt-2 pb-5'>
            <h1 className='aboutProductHeading text-center'>About Our Product <br /> & Features.</h1>
            <p className='op80 text-center'>Empower your teams to build better processes, for a better workplace.</p>
            <div className='d-flex justify-content-center  m-auto pt-5' >
                <div >
                    <img className='' src={aboutProduct} alt="" />
                </div>
                <div className='infoContainer'>
                    <h6 className='subHeading'><img className='me-3' src={icon} alt="" />Lorem Ipsum Dolor</h6>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className='op80 font13'>With great teams come great processes. Using our developer API, create and publish extensions to your organization’s Private Extension Store for your team to install.</p>
                    <p className='op80 font13'>Build extensions to quickly access company brand assets, log feedback, book time off, or search your employee index.</p>
                    <button className='btn text-white p-0'>Explore More <span className='ps-2'>&#x2192;</span></button>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct