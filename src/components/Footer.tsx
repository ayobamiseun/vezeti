import React, { FC } from "react";
import "./Footer.css";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <div>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h1>Vezeti</h1>
            <p>Vezeti store.</p>
          </div>
          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div>
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Search</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
            </ul>
          </div>
          <div className="footer-items">
            <h3>Stores</h3>
            <div className="border1"></div>
            <ul>
              <a href="#">
                <li>Shoe</li>
              </a>
              <a href="#">
                <li>Shirt</li>
              </a>
              <a href="#">
                <li>Short</li>
              </a>
              <a href="#">
                <li>Slippers</li>
              </a>
            </ul>
          </div>
          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                XYZ, abc
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                123456789
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                xyz@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">Copyright &copy; Vezeti 2022.</div>
      </div>
    </div>
  );
};

export default Footer;
