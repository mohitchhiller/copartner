import React from 'react'
const Navbar = () => {
    return (
        <div className='d-flex justify-content-around align-items-center py-3'>
            <h5 className='logo text-white m-0'>Stock P Logo</h5>
            <div className='d-flex justify-content-around align-items-center op80 font13 navList'>
                <span className='px-3 pointer navItem'>Home</span>
                <span className='px-3 pointer navItem'>Features</span>
                <span className='px-3 pointer navItem'>Experties</span>
                <span className='px-3 pointer navItem'>Blogs</span>
                <span className='px-3 pointer navItem'>Contact Us</span>
            </div>
            <div>
                <button className='btn  op80  font13 referBtn'>
                    Refer & Earn
                </button>
                <button className='btn font13 op80 loginBtn ms-3'>
                    Log In
                </button>
            </div>
        </div>
    )
}

export default Navbar