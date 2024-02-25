import React from 'react'
import framer from '../../assets/images/Framer.svg'
import atlassian from '../../assets/images/Atlassian.svg'
import shopify from '../../assets/images/shopify.svg'
import github from '../../assets/images/github.svg'
import launchDarkly from '../../assets/images/launchdarkly.svg'
import tailScale from '../../assets/images/tailscale.svg'

const TrustedBy = () => {
    return (
        <div className='trustedByContainer'>
            <h6 className='text-center'>Trusted by teams at</h6>
            <div className='d-flex flex-wrap justify-content-around py-4 mx-5'>
                <img src={framer} alt="" />
                <img src={atlassian} alt="" />
                <img src={shopify} alt="" />
                <img src={github} alt="" />
                <img src={launchDarkly} alt="" />
                <img src={tailScale} alt="" />
            </div>
        </div>
    )
}

export default TrustedBy