import FloatingCard from "blocks/FloatingCard";
import React from "react";
import Theme from "Theme";
import { StyledApp } from "./style";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const App = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <Theme>
      <StyledApp>
        <FloatingCard area="navbar"></FloatingCard>
        <FloatingCard area="first">
          <Chart type="line" data={chartData} />
        </FloatingCard>
        <FloatingCard area="second"></FloatingCard>
        <FloatingCard area="third"></FloatingCard>
        <FloatingCard area="forth"></FloatingCard>
        <FloatingCard area="fifth"></FloatingCard>
        <FloatingCard area="sixth"></FloatingCard>
        <FloatingCard area="seventh"></FloatingCard>
        <FloatingCard area="eighth"></FloatingCard>
      </StyledApp>
    </Theme>
  );
};

export default App;
