//disable future date
const date = document.querySelector('#date');
    const maxDate = new Date().toISOString().split("T")[0];
    date.setAttribute('max', maxDate);

const result = document.querySelector('#result')
result.addEventListener('click', function(e){
    e.preventDefault();
    const showResult = document.querySelector('.showResult')
    const date = document.querySelector('#date');
    const birthDate = new Date(date.value);
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth()+1;
    const birthDay = birthDate.getDate()
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth()+1;
    let currDay = currDate.getDate();
    let ageYear, ageMonth, ageDay
    if(date.value === ""){
        showResult.innerHTML = "Please enter your date of birth"
    }else{
        calculateAge(date.value, currDate.value)
    }
    function calculateAge(birthDate, currDate){
        ageYear = currYear - birthYear
        if(currMonth>=birthMonth){
            ageMonth = currMonth - birthMonth
        }else{
            ageYear--;
            ageMonth = 12 + currMonth - birthMonth
        }
        if(currDay >= birthDay){
            ageDay = currDay - birthDay
        }
        else{
            currMonth--;
            ageDay = getDaysInMonth(birthYear, birthMonth) + currDay - birthDay
        }
        showResult.innerHTML = `You are <span>${ageYear}</span> year, <span>${ageMonth}</span> month and <span>${ageDay}</span> days old.`
    }
    
})
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}