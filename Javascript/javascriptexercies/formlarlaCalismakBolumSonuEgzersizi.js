let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value) //boş yapılar oluşmuyor.
        USER_NAME.value = "" //gönder butonuna basınca sıfırlama
        SCORE.value = ""
    } else{ 
        alertDOM.innerHTML = alertFunction(
            "Başlık bilgisi", "Eksik bilgi girdiniz.", "danger")
    }
}

const userListDOM = document.querySelector('#userList')

const addItem = (userName,score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge badge-primary badge-pill">${score}</span>`
    liDOM.classList.add(
        'list-group-item','d-flex','justify-content-between','align-items-center'
    )
    userListDOM.append(liDOM)


}

