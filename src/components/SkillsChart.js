import React from "react";

import { Bar } from "react-chartjs-2";

const state = {
  labels: ["Android", "Java", "Kotlin", "React js", "Firebase"],

  datasets: [
    {
      backgroundColor: "rgba(75,192,192,1)",

      borderColor: "rgba(0,0,0,1)",

      borderWidth: 2,

      data: [90, 90, 60, 50, 80],
    },
  ],
};

export default class SkillsChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true,
                        stepSize:10,
                        max:100,
                        fontColor:"white",
                        fontStyle:"bold"
                    }
                }],
                xAxes:[{
                    ticks:{
                        fontStyle:"bold",
                        fontColor:"white",
                        fontSize:18
                    }
                }]
            },
        
            title: {
              display: false,
            },

            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
