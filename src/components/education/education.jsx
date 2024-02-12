

import React from 'react';
import { Chrono } from "react-chrono";

const Education = () => {
  const items = [ {
    title: "2020-2024 (Present)",
    cardDetailedText: ["Institute of Aeronautical Engineering","B.Tech in Computer Science and Information Technology","CGPA: 8.14/10"],
  },{
    title: "2018-2020",
    cardDetailedText: ["Sri Gayatri Junior College","Intermediate","Percentage: 95.1%"],

  },{
    title: "2017-2018",
    cardDetailedText: ["Alphores High School","Class X","CGPA: 9.7/10"],
  }]

  return (
    <section id="education">
      <h5>Discover My Educational Qualification's</h5>
      <h2>Education</h2>
  <div >
    <Chrono items={items} style={{ width: "100%", height: "95vh" }}  cardHeight={120} mode="VERTICAL_ALTERNATING" hideControls disableClickOnCircle />
  </div>
  </section>
  )
}

export default Education


