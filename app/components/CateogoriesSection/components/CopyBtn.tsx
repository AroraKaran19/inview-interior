import React from "react";

const CopyBtn = ({
  item,
  index,
  data,
  send,
  title,
}: {
  item: any;
  index: number;
  data: any[];
  send: (value: any[]) => void;
  title?: string;
}) => {
  return (
    <div
      className="copy-btn bg-white text-black absolute bottom-5 right-5 p-2 rounded-full cursor-pointer select-none"
      onClick={() => {
        const newData = [...data];
        newData[index].shareCopy = !newData[index].shareCopy;
        send(newData);
      }}
      title={title}
    >
      {!item.shareCopy ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="clipboard copy-btn-icon size-5 mx-auto"
          onClick={() => {navigator.clipboard.writeText(`https://inviewinterior.in${item.redirect}`)}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tick copy-btn-icon size-5 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="alert absolute bg-white text-black -top-[4.2rem] left-[80%] py-1 px-2 pointer-events-none rounded-tr-xl rounded-bl-xl">
            <div className="triangle-arrow absolute -bottom-2 left-[75%] -translate-x-[75%]" style={{ borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderTop: "14px solid white"}}></div>
            <div className="alert-text">Copied to clipboard!</div>
          </div>
        </>
      )}
    </div>
  );
};

export default CopyBtn;
