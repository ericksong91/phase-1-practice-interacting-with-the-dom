//Load DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM Content Loaded!');
    });
//End DOM Load

//declaring location of HTML elements here

let counter = document.getElementById('counter');
let heart = document.getElementById('heart')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let pause = document.getElementById('pause')
let heartLikerCount = 0;
let currentCount = 0;


//code below
//Functions for the counter

let intervalID = setInterval(counterGoUp, 1000);

function counterGoUp(){
    counter.innerText = parseInt(counter.innerText) + 1
    console.log(counter.innerText)
}

function counterGoDown(){
    if(counter.innerText > 0){
        counter.innerText = parseInt(counter.innerText) - 1
        console.log(counter.innerText)
    }else{
        console.log("Number is already at 0!")
    }
}

function pauseresumeHandler(){
    if(pause.innerText === 'pause'){
        clearInterval(intervalID)
        pause.innerText = "resume"
        plus.setAttribute('disabled', '')
        minus.setAttribute('disabled', '')
        heart.setAttribute('disabled', '')
    }else{
        intervalID = setInterval(counterGoUp, 1000)
        pause.innerText = 'pause'
        plus.removeAttribute('disabled', '')
        minus.removeAttribute('disabled', '')
        heart.removeAttribute('disabled', '')
    }
}

//event listeners for plus and minus and pause

plus.addEventListener("click", counterGoUp)
minus.addEventListener("click", counterGoDown)
pause.addEventListener("click", pauseresumeHandler)
heart.addEventListener("click", heartLiker)


// function heartLiker(){
//     heartLikerCount = heartLikerCount + 1
//     currentCount = parseInt(counter.innerText)
//     let li = document.createElement('li')
//     li.setAttribute('data-id', `${currentCount}`)
//     li.textContent = `Hello, you liked the number ${currentCount}, ${heartLikerCount} times!`
//     document.querySelector('.likes').appendChild(li)
// }


//Handle like event

function heartLiker(){
    if(parseInt(counter.innerText) === currentCount){
        let li = document.getElementById(currentCount)
        heartLikerCount = heartLikerCount + 1;
        console.log(`Hello, you liked the number ${parseInt(currentCount)}, ${heartLikerCount} times!`)
        li.textContent = `Hello, you liked the number ${parseInt(currentCount)}, ${heartLikerCount} times!`
        document.querySelector(`.likes`).appendChild(li)
    }else{
        currentCount = parseInt(counter.innerText);
        let li = document.createElement('li')
        li.setAttribute('id', `${currentCount}`)
        heartLikerCount = 1;
        console.log(`Hello, you liked the number ${parseInt(currentCount)}, ${heartLikerCount} times!`)
        li.textContent = `Hello, you liked the number ${parseInt(currentCount)}, ${heartLikerCount} times!`
        document.querySelector('.likes').appendChild(li)
    }

}




