import React from "react";

const HamburgerBtn = ({
  menuOpen,
  setMenu,
}: {
  menuOpen: boolean;
  setMenu: (open: boolean) => void;
}) => {
  const toggleMenu = () => {
    setMenu(!menuOpen);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        )}
      </svg>
    </>
  );
};

export default HamburgerBtn;
