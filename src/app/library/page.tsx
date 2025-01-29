"use client"

import React, { useState, useEffect } from "react";

const AboutLibrary = () => {
  const [libraryInfo, setLibraryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLibraryInfo(null);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="flex justify-center">Загрузка...</div>;
  }

  return (
    <div className="flex justify-center">
      {libraryInfo ? (
        <div>
          <h2 className="text-2xl font-bold">О библиотеке</h2>
          <p>{libraryInfo}</p>
        </div>
      ) : (
        <div>Нет информации о библиотеке</div>
      )}
    </div>
  );
};

export default AboutLibrary;
