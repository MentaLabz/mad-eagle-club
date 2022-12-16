import React from "react";
import "./FirstMint.css";
import BannerHolders from "../../Assets/Images/1001.png";

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
                <h1 className="f-mint-h">Public Sale</h1>

                <h2 className="f-mint-h2">
                  Live Mint
                </h2>

                <p className="f-mint-p">
                Public sale has started the mint will cost 0.03 ETH per MEC.
                many benefits will begin to take place, while the entire minting process is carried out.
                </p>
                <p className="f-mint-p">
                one of the important benefits are:
                </p>
              </div>
              <ul className="benefits">
                  <li className="benefits-li">Staking</li>
                  <li className="benefits-li">Participate for the delivery of rewards in ETH.</li>
                  <li className="benefits-li">Participation in projects supported by MentaDAO</li>
                  <li className="benefits-li">and many more</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstMint;
