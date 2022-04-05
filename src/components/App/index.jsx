import FloatingCard from "blocks/FloatingCard";
import React from "react";
import { StyledApp } from "./style";

import "chart.js/auto";
import { Bar, Chart, Doughnut } from "react-chartjs-2";
import NameBar from "blocks/NameBar";
import Image from "assets/128.jpg";
import Post from "components/Post";
import { useTheme } from "styled-components";
import useThemeName from "hooks/useThemeName";

import { ReactComponent as Moon } from "assets/moon.svg";
import { ReactComponent as Sun } from "assets/sun.svg";
import { setToLocalStorage } from "services/localStorage";

const App = () => {
  const theme = useTheme();
  const currentThemeName = useThemeName();

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
        backgroundColor: theme.colors.highlighted,

        borderColor: theme.colors.foreground,
        data: [0, 15, 5, 2, 20, 30, 45, 28, 50],
      },
    ],
  };
  const doughnutLabels = ["اینستاگرام", "یوتیوب", "وبسایت", "گوگل"];
  const doughnutData = {
    labels: doughnutLabels,
    datasets: [
      {
        label: "بازدید های این ماه",
        backgroundColor: ["#de2479", "red", "#7ac7fa", "#f3b605"],
        borderColor: theme.colors.foreground,
        data: [0, 22, 13, 15],
      },
    ],
  };
  const barDataSetData = [1.6, 3.3, 7.2, 6.4, 7.8, 8.8, 4.1, 6.9, 9.5];
  const barData = {
    labels: chartLabels,
    datasets: [
      {
        label: "امتیاز سئو",
        data: barDataSetData,
        borderColor: theme.colors.foreground,

        backgroundColor: barDataSetData.map((e) => {
          if (e >= 8) return "#7dff63";
          if (e >= 5) return "#ffea63";
          if (e >= 2) return "#ffc163";
          return "#ff6363";
        }),
      },
    ],
  };
  return (
    <StyledApp>
      <FloatingCard area="navbar">
        <NameBar>
          <NameBar.ToggleThemeButton
            onClick={() =>
              setToLocalStorage(
                "theme",
                currentThemeName === "light" ? "dark" : "light"
              )
            }
          >
            {currentThemeName === "light" ? <Sun /> : <Moon />}
          </NameBar.ToggleThemeButton>
          <NameBar.Name>نیما عسکریان</NameBar.Name>
          <NameBar.Image src={Image} />
        </NameBar>
      </FloatingCard>
      <FloatingCard area="first">
        <div>
          <FloatingCard.SmallHeader>امتیاز سئو</FloatingCard.SmallHeader>
          <FloatingCard.MainHeader>۹.۵/۱۰!</FloatingCard.MainHeader>
          <FloatingCard.HighlightedText>۲.۶</FloatingCard.HighlightedText>{" "}
          <FloatingCard.SmallText>
            امتیاز بیشتر از ماه پیش
          </FloatingCard.SmallText>
        </div>
        <div>
          <Bar data={barData}></Bar>
        </div>
      </FloatingCard>
      <FloatingCard area="second">
        <div>
          <FloatingCard.SmallHeader>بهترین پلتفرم</FloatingCard.SmallHeader>

          <FloatingCard.MainHeader>یوتیوب!</FloatingCard.MainHeader>

          <FloatingCard.SmallText>
            <FloatingCard.HighlightedText>۷</FloatingCard.HighlightedText> تا
            بازدید بیشتر از گوگل
          </FloatingCard.SmallText>
        </div>

        <div>
          <Doughnut
            type="line"
            data={doughnutData}
            options={{
              maintainAspectRatio: false,
              font: {
                family: "Iran Sans",
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
              maintainAspectRatio: false,
              font: {
                family: "Iran Sans",
              },
              fill: true,
              radius: 3,
              hitRadius: 30,
              hoverRadius: 5,
              animations: {
                tension: {
                  delay: 800,
                  duration: 1500,
                  easing: "easeOutCubic",
                  from: 0,
                  to: 0.4,
                },
              },
            }}
          />
        </div>
      </FloatingCard>
      <FloatingCard area="forth">
        <div>
          <FloatingCard.SmallHeader>بهترین پست</FloatingCard.SmallHeader>
          <FloatingCard.MainHeader>
            ساخت اپلیکیشن SSR با ریئکت!
          </FloatingCard.MainHeader>
          <FloatingCard.SmallText>
            <FloatingCard.HighlightedText>۱۱</FloatingCard.HighlightedText> تا
            بیشتر از ساخت CMS با جنگو
          </FloatingCard.SmallText>
        </div>
        <div>
          <div>
            <Post title="ساخت اپلیکیشن SSR با ریئکت" likes="۱۵" viewers="۲۶" />
            <Post title="ساخت CMS با جنگو" likes="۴" viewers="۱۵" />
            <Post title="شخصی سازی رام گوشی اندرویدی" likes="۲" viewers="۹" />
          </div>
        </div>
      </FloatingCard>
      <FloatingCard area="fifth">
        <div>
          <FloatingCard.SmallHeader>
            من از این جای خالی که نباشی خالی میمونه میترسم
          </FloatingCard.SmallHeader>
          <FloatingCard.MainHeader>میترسم :(</FloatingCard.MainHeader>
        </div>
      </FloatingCard>
      <FloatingCard area="sixth">
        <div>
          <FloatingCard.SmallHeader>
            من از این جای خالی که نباشی خالی میمونه میترسم
          </FloatingCard.SmallHeader>
          <FloatingCard.MainHeader>میترسم :(</FloatingCard.MainHeader>
        </div>
      </FloatingCard>
    </StyledApp>
  );
};

export default App;
