document.addEventListener('DOMContentLoaded', function () {
    const tableForInput = document.getElementById('table-for');
    const dateInput = document.getElementById('date');
    const dayInput = document.getElementById('day');
  
    tableForInput.addEventListener('input', function () {
      if (tableForInput.value < 1) {
        tableForInput.value = 1;
      }
    });
  
    dateInput.addEventListener('input', function () {
      const selectedDate = new Date(dateInput.value);
      const options = { weekday: 'long' };
      dayInput.value = selectedDate.toLocaleDateString('en-US', options);
    });
  });
  