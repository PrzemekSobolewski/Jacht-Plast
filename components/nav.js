import React from 'react';
import Headroom from "react-headroom";
import Link from 'next/link';
import logoImage from '../images/logo.png';

const Nav = () => (
    <Headroom>
        <div className="logo navigation">
            <img src={logoImage} width="60px" height="60px" id='logoImage'/>
        </div>
        <div className="navigation">
            <ul>
                <li>
                    <Link>
                        <a>O nas</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a>Galeria</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a>Transport</a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a>Kontakt</a>
                    </Link>
                </li>
            </ul>

            <style>{`
              :global(body) {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
                  Helvetica, sans-serif;
              }
              .headroom {
                display: flex;
                background-color: #4EB4D3;
              }
              .navigation {
                width: 40%;
                text-align: center;
                margin-right: 100px;
              }
              .logo {
                float: left;
              }
              ul {
                display: flex;
                justify-content: space-between;
              }
              li {
                display: flex;
                padding: 6px 8px;
              }
              li:hover {
                background-color: #56C8EA;
                cursor: pointer;
              }
    `}</style>

        </div>
    </Headroom>
);
export default Nav