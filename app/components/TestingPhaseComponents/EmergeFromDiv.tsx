"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./emerge.css"; // Include basic styles

const gridItems = [
  { id: 1, name: "Item 1", image: "/path-to-image1" },
  { id: 2, name: "Item 2", image: "/path-to-image2" },
  { id: 3, name: "Item 3", image: "/path-to-image3" },
  // Add more items as needed
];

const EmergeFromDiv = () => {
  const [selectedItem, setSelectedItem] = useState<{ id: number; name: string; image: string } | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: { id: number; name: string; image: string }) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect(); // Get the position of the clicked div
    setPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setSelectedItem(item); // Set the clicked item as selected
  };

  return (
    <div className="grid">
      {gridItems.map((item) => (
        <div
          key={item.id}
          className="grid-item"
          onClick={(e) => handleClick(e, item)}
        >
          {item.name}
        </div>
      ))}

      {selectedItem && (
        <motion.div
          className="emerge-container"
          initial={{
            opacity: 0.5,
            top: position.top,
            left: position.left,
            width: position.width,
            height: position.height,
            borderRadius: "50%", // Optional for a bubble effect
          }}
          animate={{
            opacity: 1,
            top: "50%",
            left: "50%",
            width: "400px", // Final expanded size
            height: "400px",
            borderRadius: "20px", // Change as it expands
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            transform: "translate(-50%, -50%)",
            position: "fixed",
          }}
        >
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.image} alt={selectedItem.name} />
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </motion.div>
      )}
    </div>
  );
};

export default EmergeFromDiv;
