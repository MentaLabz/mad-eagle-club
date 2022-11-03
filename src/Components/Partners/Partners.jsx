import React from 'react'
import './Partners.css'
import BNPage from '../../Assets/Images/Pagina-Banner (2).png'
import Avatar from '../../Assets/Images/93.png'
import PiLogo from '../../Assets/Images/Pi-black-on-green-ROUND.png'
import './Keyframes.css'

const Partners = () => {
    return (
        <section className="partners-box">
            <div className="partner">
                <div className="partner-q">
                    <div className="partner-q1">
                        <h1 className="partners-h">Partners</h1>

                        <img src={BNPage} alt="Partner Banner" className="partners-img" />

                        <hr className="partner-br" />
                        <div className="partner-cards">
                            <div className="partners-list">
                                <img src={PiLogo} alt="" className="logo-pi" />
                                <div className="partner-list-button">
                                    <a target="_blank" rel='noopener noreferrer' href="https://www.pi-protocol.io/#/" className="button-partners">
                                        <div className="button-more">
                                            <h1 className="partners-h2">PiProtocol</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="partner-br" />
                        <div className="partner-q2">




                            <div className="partner-q3">
                                <h1 className="partners-h">About Our Partners</h1>

                                <p className="partner-p">Mad Eagle Club is committed to working
                                    with all those who are building in the Web3 world and advancing
                                    the NFT world. If you are building the next Metaverse, a new
                                    prestigious streetwear brand and want to do a collaboration
                                    with our NFT brand. or building any technology friendly with
                                    Web3 and NFTs, we would like to meet you.</p>
                            </div>

                            <img src={Avatar} alt="Partner Banner" className="partners-img" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
