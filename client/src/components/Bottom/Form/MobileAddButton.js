import "./MobileAddButton.css";
import React from "react";
import { Link } from "react-router-dom";

const MobileAddButton = () => {
  return (
    <Link to="/budget/mobile-form">
      <button className="mobile-add-button primary">
        <span>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </span>
      </button>
    </Link>
  );
};

export default MobileAddButton;
