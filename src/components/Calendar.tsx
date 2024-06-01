import React, { useState, useEffect } from "react";
import "../styles/Calendar.css";

interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ date, setDate }) => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    manipulateCal();
  }, [year, month]);

  const manipulateCal = () => {
    const dayone = new Date(year, month, 1).getDay();
    const lastdate = new Date(year, month + 1, 0).getDate();
    const dayend = new Date(year, month, lastdate).getDay();
    const monthlastdate = new Date(year, month, 0).getDate();

    let lit = "";

    for (let i = dayone; i > 0; i--) {
      lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    for (let i = 1; i <= lastdate; i++) {
      const isToday =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
          ? "active"
          : "";
      lit += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = dayend; i < 6; i++) {
      lit += `<li class="inactive">${i - dayend + 1}</li>`;
    }

    document.querySelector(".calendar-dates")!.innerHTML = lit;
    document.querySelector(
      ".calendar-current-date"
    )!.innerHTML = `${months[month]} ${year}`;
  };

  const handlePrevNext = (direction: string) => {
    setMonth((prevMonth) => {
      const newMonth = direction === "prev" ? prevMonth - 1 : prevMonth + 1;
      if (newMonth < 0 || newMonth > 11) {
        const newDate = new Date(year, newMonth, date.getDate());
        setYear(newDate.getFullYear());
        return newDate.getMonth();
      }
      return newMonth;
    });
  };

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <p className="calendar-current-date"></p>
        <div className="calendar-navigation">
          <span
            id="calendar-prev"
            className="material-symbols-rounded"
            onClick={() => handlePrevNext("prev")}
          >
            &#60;
          </span>
          <span
            id="calendar-next"
            className="material-symbols-rounded"
            onClick={() => handlePrevNext("next")}
          >
            &#62;
          </span>
        </div>
      </header>
      <div className="calendar-body">
        <ul className="calendar-weekdays">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="calendar-dates"></ul>
      </div>
    </div>
  );
};

export default Calendar;
