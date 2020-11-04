function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  // EXERCICIO 1
  function createDaysOfTheMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = document.createElement('li');
        day.className = "day";
        day.innerText = dezDaysList[index];

        if (day.innerText == '24' || day.innerText == '25' || day.innerText == '31' ) { day.className = day.className + ' holiday'; }
        if (day.innerText == '4' || day.innerText == '11' || day.innerText == '18' || day.innerText == '25') { day.className = day.className + ' friday'; }

        document.querySelector('#days').appendChild(day);
    }
  }

  createDaysOfTheMonth();

  // EXERCÍCIO 2
  function holidays (Feriados) {}

  let holiday_btn = document.createElement('button');
  holiday_btn.id = 'btn-holiday';
  holiday_btn.innerText = 'Feriados';
  document.querySelector('.buttons-container').appendChild(holiday_btn);