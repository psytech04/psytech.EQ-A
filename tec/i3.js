const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");

    prevMonthButton.addEventListener("click", () => changeMonth(-1));
    nextMonthButton.addEventListener("click", () => changeMonth(1));

    renderCalendar();
});

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

function renderCalendar() {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("monthYear");
    calendar.innerHTML = "";
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarData = loadCalendarData(currentYear, currentMonth);

    for (let i = 0; i < firstDay; i++) {
        calendar.innerHTML += `<div class="day empty"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const data = calendarData[i] || {};
        calendar.innerHTML += `
            <div class="day">
                <div>${i}</div>
                <input type="text" placeholder="Paciente" value="${data.patient || ''}" data-day="${i}" data-field="patient">
                <input type="text" placeholder="Médico" value="${data.doctor || ''}" data-day="${i}" data-field="doctor">
                <input type="text" placeholder="Horário" value="${data.time || ''}" data-day="${i}" data-field="time">
            </div>
        `;
    }

    document.querySelectorAll('.day input').forEach(input => {
        input.addEventListener('input', saveData);
    });
}

function saveData(event) {
    const day = event.target.getAttribute('data-day');
    const field = event.target.getAttribute('data-field');
    const value = event.target.value;

    const calendarData = loadCalendarData(currentYear, currentMonth);
    if (!calendarData[day]) {
        calendarData[day] = {};
    }
    calendarData[day][field] = value;

    localStorage.setItem(`${currentYear}-${currentMonth}`, JSON.stringify(calendarData));
}

function loadCalendarData(year, month) {
    const data = localStorage.getItem(`${year}-${month}`);
    return data ? JSON.parse(data) : {};
}
