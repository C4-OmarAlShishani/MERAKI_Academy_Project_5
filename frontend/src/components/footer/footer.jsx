/** @format */

// /** @format */

import axios from "axios";
import React, { useRef, useEffect, useState } from "react";

//  import { useNavigate, LINK } from "react-router-dom";
import "./footer.css";
import { useNavigate, Link } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import FeedBack from "../feedback/Feedback";
import payCards from "../../image/cards.png";

const Footer = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="footer">
        {/* <FeedBack /> */}
          
            <div className="SocialMedia">
              <h2 className="follow">Follow Us On Social Media</h2>

              <a href="https://web.facebook.com/TechniCorner-113936371207625/about/?ref=page_internal">
                Facebook
              </a>

              <a href="http://twitter.com/">Twitter</a>

              <a href="https://www.youtube.com/channel/UCcO5lahWe1dFGemPIgJtK1w/">
                Youtube
              </a>

              <a href="https://www.instagram.com/technicorner7/">Instagram</a>
            </div>

            <div className="links">
              <h2 className="imp">Important Links</h2>

                  <Link className="gg" to={"homePage"}>
                    Home
                  </Link>
    
                  <Link className="gg" to={"register"}>
                    Register
                  </Link>

                  {" "}
                  <Link className="gg" to={"login"}>
                    Login
                  </Link>

                  <Link className="gg" to={"cart"}>
                    Cart
                  </Link>
      
                  <Link className="gg" to={"wishlist"}>
                    Wishlist
                  </Link>
    
                  <Link className="gg" to={"adminPanel"}>
                    Admin Panel
                  </Link>
            </div>
            <div className="infoFooter">
          <h2 className="duty">06-474747470 (Saturday - Thursday 8am - 5pm)</h2>

          <img src={payCards} alt="pa" id="imgPay" />

          <h4 className="paymnt">
            Finance provided by PayPal Credit. Terms and conditions apply.
            Credit subject to status. UK residents only. Industrial Tool
            Supplies (London) Limited acts as a credit broker and offers finance
            from a restricted range of finance providers. PayPal Credit is a
            trading name of PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24
            Boulevard Royal L-2449, Luxembourg.
          </h4>
          <br></br>

          <h4 className="rights">
            Developed By ERRORS-TEAM All Rights Reserved &#169; 2022
          </h4>
          </div>
      </div>
    </>
  );
};
export default Footer;
