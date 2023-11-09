const result = document.querySelector('#result')
result.addEventListener('click', function(e){
    e.preventDefault();
    const showResult = document.querySelector('.showResult')
    const date = document.querySelector('#date');
    const birthDate = new Date(date.value);
    console.log(birthDate);
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth()+1;
    const birthDay = birthDate.getDay()
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth()+1;
    const currDay = currDate.getDay();
    
})