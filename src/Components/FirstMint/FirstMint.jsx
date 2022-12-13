import React from "react";
import "./FirstMint.css";
import BannerHolders from "../../Assets/Images/032102.png";

const FirstMint = () => {
  return (
    <section className="f-mint">
      <div className="f-box">
        <div className="f-box2">
          <div className="f-box">
            <div className="f-box4">
              <img
                src={BannerHolders}
                alt="Genesis MEC"
                className="f-mint-holders"
              />

              <div className="f-box5">
                <h1 className="f-mint-h">Charity Dogs Club (CDCs) Holders</h1>

                <h2 className="f-mint-h2">
                  Second and Third Phase of Minting.
                </h2>

                <p className="f-mint-p">
                  In this minting phase, Charity Dogs Club Holders will be able
                  to mint the number of NFTs corresponding to the number of CDCs
                  they have. And those who are on the white list for free mint
                  between the dates of November 22 to December 15, 2022.
                </p>
                <p className="f-mint-p">
                  After these phases, the sale will begin with a price of 0.03
                  ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstMint;
