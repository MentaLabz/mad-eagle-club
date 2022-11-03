import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
    return (
        <div className="footer-box">
            <div className="footer-box2">
                <div className="footer-box3">
                    <div className="footer-box4">
                        <div className="footer-box5">
                            <FontAwesomeIcon icon={faCopyright} className="icon-cr" /><p className="footer-p">2022, Mad Eagle Club</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer