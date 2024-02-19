let userDate = document.querySelector('#date')
let btn = document.querySelector('.age-select button')
let result = document.querySelector('.Result')

userDate.max = new Date().toISOString().split('T')[0];

btn.addEventListener("click", ()=>{
    let birthDate = new Date(userDate.value)

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    
    let todayDate = new Date();
    
    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1){
        m3 = m2 - m1
    }
    else{
        y3--
        m3 = 12 + m2 - m1
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--
        d3 = getDAysInMonths(y1, m1) + d2 - d1
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    if(y3 == 0){
        result.innerHTML = `You are <span>${y3} year </span>, <span>${m3}</span> month, and <span>${d3}</span> day old`

    }
    else{
        result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`
}})

function getDAysInMonths(year, month){
    return new Date(year, month,0).getDate();
}


// let userDate = document.querySelector('#date')
// let btn = document.querySelector('.age-select button')
// let result = document.querySelector('.Result')

// userDate.max = new Date().toISOString().split('T')[0]

// btn.addEventListener('click', ()=>{

// let birthDate = new Date(userDate.value)

// let birthDay = birthDate.getDay()
// let birthMonth = birthDate.getMonth() + 1;
// let birthYear = birthDate.getFullYear()

// let currentsDate = new Date()

// let currentsDay = currentsDate.getDay()
// let currentsMonth = currentsDate.getMonth() + 1
// let currentsYear = currentsDate.getFullYear()

// let calculateYear, calculateMonth, calculateDay;

// calculateYear = currentsYear - birthYear

//     if(currentsMonth >= birthMonth){
//     calculateMonth = currentsMonth - birthMonth
//     }
//     else{
//     calculateYear--
//     calculateMonth =  12 + currentsMonth - birthMonth
//     }

//     if(currentsDay >= birthDay){
//     calculateDay = currentsDay - birthDay
//     }
//     else{
//     calculateDay = getDaysInMonth(birthYear, birthMonth) + currentsDay - birthDay
//     }

//     if(calculateMonth < 0){
//     calculateMonth = 11
//     calculateYear--
//     }

//     result.innerHTML = `You Are <span>${calculateYear}</span> years, <span>${calculateMonth}</span> month, and <span>${calculateDay}</span> days old`

//     function getDaysInMonth(year, month){
//     return new Date(year, month, 0).getDate()
//     }

//     })