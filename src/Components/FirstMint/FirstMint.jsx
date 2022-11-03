import React from 'react'
import './FirstMint.css'
import BannerHolders from '../../Assets/Images/15221145.png'


const FirstMint = () => {
    return (
        <section className="f-mint">
            <div className="f-box">
                <div className="f-box2">
                    <div className="f-box">
                        <div className="f-box4">
                            <img src={BannerHolders} alt="Genesis MEC" className="f-mint-holders" />

                            <div className="f-box5">
                                <h1 className="f-mint-h">
                                    Genesis Holders
                                </h1>

                                <h2 className="f-mint-h2">
                                    First phase of minting.
                                </h2>

                                <p className="f-mint-p">Genesis Holders, are those holders
                                    who are holders in the first launch of the Mad Eagle Club
                                    in the BSC network.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstMint