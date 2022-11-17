/* eslint-disable no-self-compare */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import "./Mint.css";
import madEagleClub from "../Web3/abi.json";
import { BigNumber, ethers } from "ethers";
import { useEffect } from "react";
import "../Css/media-kit.css";
import "../Css/media.css";
import coverNFTs from "../../Assets/Images/141.png";
const keccak256 = require("keccak256");
let Whitelist = require("../../data/Accounts.json");
const { MerkleTree } = require("merkletreejs");
require("dotenv").config();

const mecAddress = process.env.REACT_APP_ETHEREUM_ADDRESS_MEC;

const Mint = ({ accounts, setAccounts }) => {
  //Hooks for Webpage
  const [mintAmount, setmintAmount] = useState(1);
  const [supply, setSupply] = useState();
  //const [claimingAddress, setClaimingAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [msgToMint, setMintMsg] = useState("");
  const [mintError, setMintError] = useState("");
  const [mecMaxSupply, setMecMaxSupply] = useState();
  const isConnected = Boolean(accounts[0]);

  //get Accounts

  /*async function getAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccounts(accounts);
    }
  }

  getAccount();*/

  //get Merkle Whitelist

  const leafNodes = Whitelist.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = merkleTree.getRoot();

  //console.log("Whitelist Merkle Tree\n", merkleTree.toString());
  console.log("Root Hash: ", "0x" + rootHash.toString("hex"));

  // put address here to check if its on your wl or not
  //const getProof = async () => {
  //if (window.ethereum) {
  const claimingAddress = keccak256(accounts[0]);
  // setClaimingAddress(getHashByAccount);
  // console.log("account connected: " + accounts[0]);
  //} else {
  // console.log("you must connect your account");
  //}
  //};

  /*useEffect(() => {
    getProof();
  }, []);*/

  const hexProof = merkleTree.getHexProof(Buffer(claimingAddress));
  //console.log("hexproof\n", hexProof);
  //console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));

  //Balance ERC721

  async function getMECBalance() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(mecAddress, madEagleClub, signer);

      try {
        const response = await contract.balanceOf(accounts[0]);
        const hexToNumber = {
          balance: response._hex,
        };
        //console.log(parseInt(Number(hexToNumber.balance)));

        const balanceOfWallet = parseInt(Number(hexToNumber.balance));
        setBalance(balanceOfWallet);
      } catch (err) {
        console.log("error: " + err);
      }
    }
  }

  getMECBalance();

  //Mint Side

  async function getSupply() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(mecAddress, madEagleClub, signer);

      try {
        const maxSupply = await contract.maxSupply();
        const response = await contract.totalSupply();

        setSupply(Number(response));
        setMecMaxSupply(Number(maxSupply));
      } catch (e) {
        console.log("error: ", e);
      }
    }
  }

  getSupply();

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(mecAddress, madEagleClub, signer);

      try {
        const getGas = async (e) => {
          try {
            const getPrice = await contract.cost();
            const response = await contract.whitelistMint(
              BigNumber.from(mintAmount),
              hexProof,
              {
                gasLimit: e,
                value: (getPrice * mintAmount).toString(),
              }
            );
            const msgMint = {
              hash: response.hash,
            };
            console.log("response: " + JSON.stringify(msgMint.hash));
            setMintMsg(msgMint.hash);
          } catch (err) {
            const errorMint = await err;

            const errMint = {
              reason: errorMint.reason,
            };

            setMintError(errMint.reason);
            console.log("error: " + JSON.stringify(errMint));
          }
        };
        getGas();
      } catch (err) {
        console.log("error: " + err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setmintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setmintAmount(mintAmount + 1);
  };

  const mintMessage = () => {
    if (
      (mintError === "execution reverted: Address already claimed!") |
      (mintError === "execution reverted: Invalid proof!")
    ) {
      return "Error: " + mintError;
    }
    if (msgToMint === "hex") {
      return (
        <a
          className="external"
          rel="noopener noreferrer"
          target="_blank"
          href={`https://etherscan.io/tx/${msgToMint}`}
        >
          Hash: {msgToMint};
        </a>
      );
    }
  };

  useEffect(() => {
    mintMessage();
  }, []);

  return (
    <section className="mint">
      <div className="mintbox">
        <div className="mintbox02">
          <div className="mintbox03">
            <div className="mintbox04">
              <div className="mintbox05">
                <div className="mintCard">
                  <div className="mintCard2">
                    <div className="supplyMint">
                      {supply}/{mecMaxSupply}
                    </div>
                    <div className="mintCard3">
                      <img
                        className="MECanim MECover"
                        src={coverNFTs}
                        alt="CoverMEC"
                      />
                    </div>
                    <div className="mintButton">
                      <button
                        id="left"
                        className="buttonToMint"
                        onClick={handleDecrement}
                      >
                        -
                      </button>

                      <input
                        className="mintAmount"
                        type="number"
                        readOnly
                        value={mintAmount}
                      />

                      <button
                        id="right"
                        className="buttonToMint"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>

                    {isConnected ? (
                      <div className="whitelistBox">
                        <button
                          disabled
                          onClick={handleMint}
                          className="whitelistMintButton disableButton"
                        >
                          Mint
                        </button>
                      </div>
                    ) : (
                      <div className="minterSection">
                        <p className="mintButton3">
                          You must be logged in to mint
                        </p>
                      </div>
                    )}

                    <div className="balanceOf mintButton3">{balance} </div>
                    <div className="error-displayed mintButton3">
                      {mintMessage()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
