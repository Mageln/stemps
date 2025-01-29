"use client"

import React, { useState, useEffect } from "react";

const AboutSchool = () => {
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSchoolInfo(null);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="flex justify-center">Загрузка...</div>;
  }

  return (
    <div className="flex justify-center">
      {schoolInfo ? (
        <div>
          <h2 className="text-2xl font-bold">О школе</h2>
          <p>{schoolInfo}</p>
        </div>
      ) : (
        <div>Нет информации о школе</div>
      )}
    </div>
  );
};

export default AboutSchool;
