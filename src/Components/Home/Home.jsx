/* eslint-disable no-unreachable */
import React from "react";
import "./Home.css";
import "../Css/Community.css";
import "../Css/media-kit.css";
import Banner from "../../Assets/Images/Banner copia.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import MadEagle from "../../Assets/Images/36.png";
import CountdownTimer from "../Countdown/CountDownTimer";
import FirstMint from "../FirstMint/FirstMint";
import Mint from "../Mint/Mint";

const Home = ({ accounts, setAccounts }) => {
  return (
    <div className="home-box">
      <div className="home-box2">
        <div className="mentaHidden">
          <CountdownTimer />
        </div>
        <div className="mintBox">
          <div className="f-minter">
            <FirstMint />
          </div>

          <div className="mintPage">
            <Mint accounts={accounts} setAccounts={setAccounts} />
          </div>
        </div>

        <div className="home-box3">
          <div className="home-box4">
            <div className="home-box5">
              <h1 className="home-h1">Welcome to the Mad Eagle Club 2.0</h1>

              <p className="home-p">
                Welcome to the club, the new web3 club where your Mad Eagle
                makes you an exclusive member of the club, granting access to
                exclusive benefits to its owner
              </p>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://discord.gg/wEd7ENEuG6"
                className="home-a2"
              >
                Join Our Discord{" "}
                <FontAwesomeIcon className="Icon-Home" icon={faDiscord} />
              </a>
            </div>

            <img src={Banner} alt="Banner-001" className="home-img" />
          </div>
        </div>
      </div>
      <div className="iso-marquee--long iso-marquee fadeIn container-mov">
        <span className="nfts-dao-p-scroll">
          <p className="nfts-dao-p">
            Very soon, from the community for the community.
          </p>
        </span>
      </div>

      <div className="home-box-about">
        <div className="home-box-about2">
          <div className="home-box-about3">
            <div className="home-box-about4">
              <div className="home-box-about5">
                <h1 className="home-h2">About</h1>

                <p className="home-p2">
                  Mad Eagle Club 2.0, is a collection of 10,500 collectible NFTs
                  that live on Ethereum.
                </p>

                <p className="home-p3">
                  The Mad Eagles came from BNB Chain and now invading the
                  Ethereum universe to take over the NFT world that make the Mad
                  Eagles unique and superior.
                </p>

                <p className="home-p3">
                  The Mad Eagles have undergone a genetic evolution carefully
                  executed by a scientist called Uranus who will continue to
                  gradually improve the evolutionary genes of the Eagles for
                  limitless possibilities
                </p>

                <p className="home-p4">Welcome to the Mad Eagle Club 2.0</p>

                <h2 className="home-h2">Overview</h2>
                <div className="home-box-about6">
                  <FontAwesomeIcon
                    id="Init"
                    className="Icon-Home2"
                    icon={faCheckCircle}
                  />
                  <li className="home-overview">10,500 Supply</li>
                  <FontAwesomeIcon
                    className="Icon-Home2"
                    icon={faCheckCircle}
                  />
                  <li className="home-overview">Premium Membership</li>
                  <FontAwesomeIcon
                    className="Icon-Home2"
                    icon={faCheckCircle}
                  />
                  <li className="home-overview">Premium Utility</li>
                </div>
              </div>

              <img src={MadEagle} alt="MadEagle" className="home-img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
