const smile = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>`

const sad = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>`

let examGrade = prompt("Sınav puanınızı giriniz: ")
let textInfo
let info = document.querySelector("#info")

textInfo = smile
info.classList.add('text-primary')
if (examGrade >= 90 && examGrade <= 100) {
    textInfo += " Harf notunuz AA"
} else if (examGrade >= 85 && examGrade <= 89) {
    textInfo += " Harf notunuz BA"
} else if (examGrade >= 80 && examGrade <= 84) {
    textInfo += " Harf notunuz BB"
} else if (examGrade >= 75 && examGrade <= 79) {
    textInfo += " Harf notunuz CB"
} else if (examGrade >= 65 && examGrade <= 69) {
    textInfo += " Harf notunuz DC"
} else if (examGrade >= 60 && examGrade <= 64) {
    textInfo += " Harf notunuz DD"
} else if (examGrade >= 50 && examGrade <= 59) {
    textInfo += " Harf notunuz FD"
} else if (examGrade >= 0 && examGrade <= 49) {
    textInfo = `${sad} Harf notunuz FF`
    info.classList.remove('text-primary')
    info.classList.add('text-danger')
} else{
    textInfo = "Lütfen geçerli olan bir not giriniz :( "
}


info.innerHTML = `${textInfo} => ${examGrade}`



