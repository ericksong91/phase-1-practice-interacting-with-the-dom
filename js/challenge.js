//Load DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Content Loaded!")
});
//End DOM Load

//declaring location of HTML elements here as well as heart liker array

let counter = document.getElementById('counter');
let heart = document.getElementById('heart')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let pause = document.getElementById('pause')
let submit = document.getElementById('submit')
let commentForm = document.querySelector('#comment-form')
let heartArr = [];

//Functions for the counter
//Storing intervalID as a variable so that it can be cleared with clearInterval later

let intervalID = setInterval(counterGoUp, 1000);

function counterGoUp(){
    counter.innerText = parseInt(counter.innerText) + 1
    console.log(counter.innerText)
}

//prevents counter from going below zero and also lets you change the counter

function counterGoDown(){
    if(counter.innerText > 0){
        counter.innerText = parseInt(counter.innerText) - 1
        console.log(counter.innerText)
    }else{
        console.log("Number is already at 0!")
    }
}

function pauseResumeHandler(){
    if(pause.innerText === 'pause'){
        clearInterval(intervalID)
        pause.innerText = "resume"
        plus.setAttribute('disabled', '')
        minus.setAttribute('disabled', '')
        heart.setAttribute('disabled', '')
        submit.setAttribute('disabled', '')
    }else{
        intervalID = setInterval(counterGoUp, 1000)
        pause.innerText = 'pause'
        plus.removeAttribute('disabled', '')
        minus.removeAttribute('disabled', '')
        heart.removeAttribute('disabled', '')
        submit.removeAttribute('disabled', '')
    }
}

//event listeners for all buttons

plus.addEventListener("click", counterGoUp)
minus.addEventListener("click", counterGoDown)
pause.addEventListener("click", pauseResumeHandler)
heart.addEventListener("click", heartLiker)
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    guestBook(e.target.comment.value)
    commentForm.reset()
})

//Liker function below

function heartLiker(){
    //declaring variables here to make list elements in the HTML
    let likesUl = document.querySelector('.likes')
    let li = document.createElement('li')
    let currentCount = parseInt(document.querySelector('#counter').textContent)
    //converted currentcount into a number just in case

    if(heartArr[currentCount]){
        //if statement checks to see if that array element exists at that location using the currentCount
        //liMod gets the HTML line's ID to make modifications to the same line element as before
        let liMod = document.getElementById(currentCount)
        heartArr[currentCount] += 1
        liMod.innerText = `${currentCount} has been liked ${heartArr[currentCount]} times!`
    }else{
        //else portion of the if statement creates a new bullet if that number did not have one before
        likesUl.appendChild(li)
        heartArr[currentCount] = 1
        li.setAttribute('id', `${currentCount}`)
        li.innerText = `${currentCount} has been liked ${heartArr[currentCount]} times!`
    }

}

//Comment function below

function guestBook(a){
    let p = document.createElement('p')
    p.textContent = `${a}`
    document.querySelector('.comments').appendChild(p)
}




