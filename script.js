const month = document.getElementById('months');
const weekday = document.getElementById('weekDay');
const dayNum = document.getElementById('daynum');
const year = document.getElementById('years');

const date = new Date();

const monthName = date.toLocaleString("en",{
    month:'long'
});

month.innerText = monthName;

const weekDays = date.toLocaleString("en",{
 weekday:'long'
});

weekday.innerText = weekDays;

dayNum.innerText = date.getDate();
year.innerText = date.getFullYear();