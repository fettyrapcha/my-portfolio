import React from 'react';

import Typed from 'react-typed';

const Header = () => {
    return (
        
        <div className="header-wraper">
            <div className="main-info">
                <h2>Software Development and Data Analytics</h2>
                <Typed
                    className="typed-text"
                    strings={["Web Development", "IT Support", "UI Design", "Data Analytics", "Graphic Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
