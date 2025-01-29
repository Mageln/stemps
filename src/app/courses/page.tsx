"use client"

import React, { useState, useEffect } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    setTimeout(() => {

      setCourses([]);
      setLoading(false); 
    }, 2000); 
  }, []);

  if (loading) {
    return <div className='flex justify-center'>Загрузка...</div>; 
  }

  return (
    <div className='flex justify-center'>
      {courses.length === 0 ? (
        <div>Нет информации о курсах</div> 
      ) : (
        <div>
      
          {courses.map((course, index) => (
            <div key={index}>{course}</div> 
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;