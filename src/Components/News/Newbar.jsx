import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Web3 from "web3";
import "./newbar.css";
require("dotenv").config();
const url = "https://mainnet.infura.io/v3/9749093e2d8a495baade81e3bf106b52";
const web3 = new Web3(new Web3.providers.HttpProvider(url));

const Newbar = () => {
  const [gasFee, setGasFee] = useState("");

  async function getGas() {
    const gasFee = await web3.eth.getGasPrice();
    const gweiGasfee = web3.utils.fromWei(gasFee, "GWei");
    const feeN = Number(gweiGasfee).toPrecision(2);
    setGasFee(feeN);
  }

  useEffect(() => {
    getGas();
  }, []);

  return (
    <div className="is-ssq-l">
      <div
        id="is-ssq"
        className="iso-marquee--long iso-marquee fadeIn container-mov"
      >
        <span className="nfts-dao-p-scroll">
          <div className="txt-span">
            <p id="is-txt" className="nfts-dao-p">
              Notice: public sale has started, if you are a Charity Dogs Holder,
              your corresponding Mad Eagle Club will be delivered soon.
            </p>

            <p id="is-txt2" className="nfts-dao-p">
              Current Gas Fee: {gasFee} GWei
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newbar;
