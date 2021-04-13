import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className="bg-bluegray-900">
        <div className="px-4 py-3 lg:px-40 flex justify-between items-center">
          <div>
            <Router>
              <Link
                to="/"
                className="font-semibold text-base text-bluegray-100 leading-relaxed tracking-normal"
              >
                Edikoswara
              </Link>
            </Router>
          </div>
          <div>
            <Router>
              <Link
                to="/about"
                className="font-light text-sm text-bluegray-100 leading-relaxed tracking-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </Link>
            </Router>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
