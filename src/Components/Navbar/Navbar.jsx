/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import Logo from "../../Assets/Images/logo001..png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faDiscord,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css";

const Navbar = ({ accounts, setAccount }) => {
  const isConnected = Boolean(accounts[0]);
  const navRef = useRef();

  async function connectedAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts);
    }
  }

  async function disconnectedAccount() {
    if (window.ethereum) {
      const accounts = null;

      window.location.reload();
      setAccount(accounts);
    }
  }

  const showNavbar = () => {
    navRef.current.classList.toggle("navbar-ul_visible");
  };

  return (
    <div className="navbar-div1">
      <div className="navbar-div2">
        <div className="navbar-div3">
          <div className="navbar-div4">
            <div className="navbar-div5">
              <img src={Logo} alt="Logo" className="navbar-img" />
              <h1 className="navbar-h">MEC</h1>
            </div>

            <div ref={navRef} className="navbar-div8">
              <ul className="navbar-ul">
                <li className="navbar-li">
                  <a href="/" className="navbar-a">
                    Home
                  </a>
                  <span></span>
                </li>
                <li className="navbar-li dropdown-li">
                  <a className="navbar-a a-drop">NFTs</a>
                  <span>
                    <ul className="navbar-ul2 dropdown-ul">
                      <li className="navbar-li2 li2">
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://charitydogsnft.com"
                          className="navbar-a2"
                        >
                          Charity Dogs Club
                        </a>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="navbar-li">
                  <a href={`/roadmap`} className="navbar-a">Roadmap</a>
                  <span></span>
                </li>
                <li className="navbar-li">
                  <a href={`/merch`} className="navbar-a">Merch</a>
                  <span></span>
                </li>
                <li className="navbar-li">
                  <a href={`/partners`} className="navbar-a">
                    Partners
                  </a>
                  <span></span>
                </li>
                <li className="navbar-li">
                  <a href={`/blog`} className="navbar-a">Blog</a>
                  <span></span>
                </li>
                <li id="li-button" className="navbar-li mdflex">
                  {isConnected ? (
                    <div className="walletConnected ">
                      <div className="wallet">
                        <ul id="ul-button" className="walletConnected-ul">
                          <li id="ul-button" className="navbar-li dropdown-li">
                            <a
                              id="accounts"
                              className="navbar-a wrapped-text connectWallet"
                            >
                              {accounts}
                            </a>
                            <span>
                              <ul
                                id="ul-button"
                                className="navbar-ul2 dropdown-ul"
                              >
                                <li id="ul-button" className="navbar-li2 li2">
                                  <button
                                    onClick={disconnectedAccount}
                                    className="navbar-a2 connectWallet"
                                  >
                                    Disconnect
                                  </button>
                                </li>
                              </ul>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <button
                      /*disabled*/
                      onClick={connectedAccount}
                      className="connectWallet disableButton"
                    >
                      Connect Wallet
                    </button>
                  )}
                </li>
              </ul>
            </div>
            <FontAwesomeIcon
              onClick={showNavbar}
              className="icon-navbar"
              icon={faBars}
            />
            <div className="navbar-div6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/mentalabz"
                className="community-link"
              >
                <FontAwesomeIcon icon={faTelegram} className="navbar-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/MadEagleClub"
                className="community-link"
              >
                <FontAwesomeIcon icon={faTwitter} className="navbar-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/5vU3T5F7CH"
                className="community-link"
              >
                <FontAwesomeIcon icon={faDiscord} className="navbar-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
