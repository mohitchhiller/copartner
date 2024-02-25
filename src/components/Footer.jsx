import React from 'react'
import facebook from '../../assets/icons/facebook.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'

const Footer = () => {
    return (
        <div className='col-12 d-flex footer_container'>
            <div className='footerInfo col-5 px-5'>
                <h5 className='logo text-white m-0 pb-3'>Stock P Logo</h5>
                <p className='op80 '>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
                <div className='socials d-flex pt-2'>
                    <img className='pe-4' src={facebook} alt="" />
                    <img className='pe-4' src={linkedIn} alt="" />
                    <img className='pe-4' src={twitter} alt="" />
                    <img className='pe-4' src={instagram} alt="" />
                </div>
            </div>
            <div className='col-3'></div>
            <div className='col-2'>
                <h6>Product</h6>
                <ul className='productList'>
                    <li>About Us</li>
                    <li>FAQ's</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Disclaimer</li>
                    <li>Submit Grievance</li>
                    <li>Features</li>
                </ul>
            </div>
            <div className='col-2'>
                <h6>Community</h6>
                <ul className='productList'>
                    <li>Subscription</li>
                    <li>Courses</li>
                    <li>Webinar</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer