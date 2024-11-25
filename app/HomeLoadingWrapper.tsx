"use client";
import React, { useEffect, useState } from "react";

export default function HomeLoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      ) : (
        children
      )}
    </>
  );
};
