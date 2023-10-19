const d = new Date();
const dateString = d.toDateString();

const days = document.querySelector(".days");
console.log(days);

const cMonth = document.querySelector(".currentMonth");
console.log(cMonth);

const cYear = document.getElementById("currentYear");
console.log(cYear, "cyear");

const prevButton = document.getElementById("prev");
console.log(prevButton);

const nextButton = document.getElementById("next");
console.log(nextButton);

let month = d.getMonth() + 1;
console.log(month, "mnth");

let year = d.getFullYear();
console.log(year, "year");

const currentDate = d.getDate();
console.log(currentDate, "curntdate");

let monthName = [
  "january",
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

const showCalender = () => {
  cMonth.innerHTML = monthName[month - 1];
  cYear.innerHTML = year;

  days.innerHTML = "";
  console.log(days.innerHTML);

  daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log(daysInMonth, "days");

  const firstDay = new Date(year, month - 1, 1).getDay();
  console.log(firstDay);

  for (let i = 0; i < firstDay; i++) {
    const emptyElement = document.createElement("li");

    days.appendChild(emptyElement);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const element = document.createElement("li");
    element.classList.add("abc");
    element.innerHTML = i;
    if (
      i === currentDate &&
      month === d.getMonth() + 1 &&
      year === d.getFullYear()
    ) {
      element.classList.add("current-date");
    }
    days.appendChild(element);
  }
};
prevButton.addEventListener("click", () => {
  if (month > 1) {
    month--;
  } else {
    month = 12;
    year--;
  }
  showCalender();
});
nextButton.addEventListener("click", () => {
  if (month < 12) {
    month++;
  } else {
    month = 1;
    year++;
  }
  showCalender();
});
