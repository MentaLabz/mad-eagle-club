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
import { minterAmount } from "../../data/DataMint";
import { CDCHolders } from "../../data/CDCHolders";
const keccak256 = require("keccak256");
let Whitelist = require("../../data/Accounts.json");
const { MerkleTree } = require("merkletreejs");
require("dotenv").config();

const mecAddress = process.env.REACT_APP_ETHEREUM_ADDRESS_MEC;
const addrLower = CDCHolders;

const Mint = ({ accounts, setAccounts }) => {
  //Hooks for Webpage
  const [mintAmount, setmintAmount] = useState(1);
  const [supply, setSupply] = useState();
  const [balance, setBalance] = useState(0);
  const [msgToMint, setMintMsg] = useState("");
  const [mecMaxSupply, setMecMaxSupply] = useState();
  const isConnected = Boolean(accounts[0]);

  //get Accounts

  //get Merkle Whitelist

  const leafNodes = Whitelist.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = merkleTree.getRoot();

  //console.log("Whitelist Merkle Tree\n", merkleTree.toString());
  console.log("Root Hash: ", "0x" + rootHash.toString("hex"));

  const claimingAddress = keccak256(accounts[0]);

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
            setMintMsg("Success, waiting confirmation.");
          } catch (err) {
            const errorMint = await err;

            const errMint = {
              reason: errorMint.reason,
            };

            setMintMsg(errMint.reason);
            console.log("error: " + JSON.stringify(errMint));
          }
        };
        getGas();
      } catch (err) {
        console.log("error: " + err);
      }
    }
  }
  //Temp Method MaxMint

  async function numberFixed() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const addr = accounts[0];
      const holder1 = addrLower.holder1;
      const holder2 = addrLower.holder2;
      const holder3 = addrLower.holder3;
      const holder4 = addrLower.holder4;
      const holder5 = addrLower.holder5;
      const holder6 = addrLower.holder6;
      const holder7 = addrLower.holder7;
      const holder8 = addrLower.holder8;
      const holder9 = addrLower.holder9;
      const holder10 = addrLower.holder10;
      const holder11 = addrLower.holder11;
      const holder12 = addrLower.holder12;
      const holder13 = addrLower.holder13;
      const holder14 = addrLower.holder14;
      const holder15 = addrLower.holder15;
      const holder16 = addrLower.holder16;
      try {
        if (
          (addr === holder1.toLowerCase()) |
          (addr === holder2.toLowerCase()) |
          (addr === holder3.toLowerCase()) |
          (addr === holder4.toLowerCase()) |
          (addr === holder5.toLowerCase()) |
          (addr === holder6.toLowerCase()) |
          (addr === holder7.toLowerCase()) |
          (addr === holder8.toLowerCase()) |
          (addr === holder9.toLowerCase()) |
          (addr === holder10.toLowerCase()) |
          (addr === holder11.toLowerCase()) |
          (addr === holder12.toLowerCase()) |
          (addr === holder13.toLowerCase()) |
          (addr === holder14.toLowerCase())
        ) {
          setmintAmount(minterAmount[accounts[0]] * 2);
        } if (
          (addr === holder15.toLowerCase()) |
          (addr === holder16.toLowerCase())
        ) {
          setmintAmount(5);

        } else {
          setmintAmount(2);
        }
      } catch (e) {
        console.log("error" + e);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setmintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 20) return;
    setmintAmount(mintAmount + 1);
  };

  const mintMessage = () => {
    if (msgToMint === msgToMint) {
      return msgToMint;
    }
  };

  useEffect(() => {
    mintMessage();
  }, []);

  numberFixed();

  console.log();

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
                        disabled
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
                        disabled
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
                          /*disabled*/
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
                    <div className="external-response1">
                      <div className="external-response2">
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
        </div>
      </div>
    </section>
  );
};

export default Mint;
