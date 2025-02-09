document.addEventListener('DOMContentLoaded', function(){
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    let curreentDate = new Date();
    let today = new Date();


    function renderCalender(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();


        monthYear.textContent = `${months[month]} ${year}`;


        daysContainer.innerHTML = '';


        // Current month's dates
        for (let day=1; day<=lastDay; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }
            dayDiv.addEventListener('click', function(){
                document.querySelectorAll('.day').forEach(cell => cell.classList.remove('selected'));
                dayDiv.classList.add('selected');
                selectedDateMessage.textContent = 'The date selected is ${month +1}/${day]/{year}';
                console.log(`Selected date: ${months[month]} ${day}, ${year}`);
            });
            daysContainer.appendChild(dayDiv);
        }
    }


    prevButton.addEventListener('click', function(){
        curreentDate.setMonth(curreentDate.getMonth() - 1);
        renderCalender(curreentDate);
    });


    nextButton.addEventListener('click', function(){
        curreentDate.setMonth(curreentDate.getMonth() + 1);
        renderCalender(curreentDate);
    });


    renderCalender(curreentDate);
});
