import React from "react";

const ItemContainerCloseBtn = ({
  handleDetailsClose,
}: {
  handleDetailsClose: () => void;
}) => {
  return (
    <div
      className="item-container-close absolute top-5 right-5"
      onClick={() => handleDetailsClose()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default ItemContainerCloseBtn;
