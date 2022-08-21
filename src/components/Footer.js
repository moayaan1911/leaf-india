// import PropTypes from 'prop-types'
import React, { Component } from "react";

export class Footer extends Component {
  //   static propTypes = {}

  render() {
    return (
      <div>
        <div>
          <footer
            className="text-center text-lg-start"
            style={{ backgroundColor: "#198754" }}
          >
            <div class="container d-flex justify-content-center py-2">
              <a
                href="https://github.com/moayaan1911/"
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <img src="github.png" alt="github" />
              </a>
              <a
                href="https://instagram.com/moayaan_1911"
                rel="noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                <img src="insta.png" alt="insta" />
              </a>
              <a
                href="https://twitter.com/usdisshitcoin"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <img src="twitter.png" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-ayaan-siddiqui-678564214/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <img src="linkedin.png" alt="twitter" />
              </a>
              <a
                href="https://t.me/usdisshitcoin"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <img src="telegram.png" alt="twitter" />
              </a>
            </div>
            <div
              style={{ fontStyle: "italic", fontSize: "10px" }}
              className="text-center"
            >
              <a
                href="http://icons8.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                icons by icons8
              </a>
            </div>
            <div
              className="text-center text-white py-1"
              style={{ backgroundColor: "#00cc00" }}
            >
              Created with <i class="fa-solid fa-heart"></i> by{" "}
              <i class="fa-brands fa-ethereum"></i> Mohammad Ayaan Siddiqui{" "}
              <i class="fa-brands fa-ethereum"></i>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
