import FloatingCard from "blocks/FloatingCard";
import React from "react";
import Theme from "Theme";
import { StyledApp } from "./style";

import "chart.js/auto";
import { Bar, Chart, Doughnut } from "react-chartjs-2";
import NameBar from "blocks/NameBar";
import Image from "assets/128.jpg";

const App = () => {
  const chartLabels = [
    "بهمن ۱۴۰۰",
    "اسفند ۱۴۰۰",
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
  ];
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "تعداد بازدید ها",
        backgroundColor: "#fa7a92",
        borderColor: "#fa7a92",
        data: [0, 15, 5, 2, 20, 30, 45, 28, 50],
      },
    ],
  };
  const barLabels = ["اینستاگرام", "یوتیوب", "وبسایت", "گوگل"];
  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: "بازدید های این ماه",
        backgroundColor: "#7ac7fa",
        borderColor: "#7ac7fa",
        data: [0, 22, 13, 15],
      },
    ],
  };
  return (
    <Theme>
      <StyledApp>
        <FloatingCard area="navbar">
          <NameBar>
            <NameBar.Name>نیما عسکریان</NameBar.Name>
            <NameBar.Image src={Image} />
          </NameBar>
        </FloatingCard>
        <FloatingCard area="first"></FloatingCard>
        <FloatingCard area="second">
          <div>
            <FloatingCard.SmallHeader>بهترین پلتفرم</FloatingCard.SmallHeader>

            <FloatingCard.MainHeader>یوتیوب!</FloatingCard.MainHeader>

            <FloatingCard.SmallText>
              <FloatingCard.HighlightedText>۷</FloatingCard.HighlightedText> تا
              بیشتر از گوگل
            </FloatingCard.SmallText>
          </div>

          <div>
            <Bar
              type="line"
              data={barData}
              options={{
                maintainAspectRatio: false,
                font: {
                  family: "Iran Sans",
                },
                animations: {
                  tension: {
                    duration: 1000,
                    easing: "linear",
                    from: 1,
                    to: 0,
                  },
                },
              }}
            />
          </div>
        </FloatingCard>
        <FloatingCard area="third">
          <div>
            <FloatingCard.SmallHeader>تعداد بازدید ها</FloatingCard.SmallHeader>

            <FloatingCard.MainHeader>۵۰!</FloatingCard.MainHeader>

            <FloatingCard.SmallText>
              <FloatingCard.HighlightedText>۱۲</FloatingCard.HighlightedText> تا
              بیشتر از ماه پیش
            </FloatingCard.SmallText>
          </div>
          <div>
            <Chart
              type="line"
              data={chartData}
              options={{
                tension: 0.5,
                maintainAspectRatio: false,
                font: {
                  family: "Iran Sans",
                },
              }}
            />
          </div>
        </FloatingCard>
        <FloatingCard area="forth"></FloatingCard>
        <FloatingCard area="fifth"></FloatingCard>
        <FloatingCard area="sixth"></FloatingCard>
      </StyledApp>
    </Theme>
  );
};

export default App;
