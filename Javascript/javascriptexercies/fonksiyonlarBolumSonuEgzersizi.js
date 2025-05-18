let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decraseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter //100 değil 0 gözükecek.

increaseDOM.addEventListener("click",clickEvent)
decraseDOM.addEventListener("click",clickEvent)

function clickEvent(){
    console.log(typeof(counter))
    console.log(this.id) //id bilgisi alındı
    if (this.id == "increase"){
        counterDOM.innerHTML = counter += 1
    } else {
        counterDOM.innerHTML = counter -= 1
    }
    localStorage.setItem('counter',counter)
    counterDOM.innerHTML = counter
}