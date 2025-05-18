const taskInput = document.querySelector("#task-input") // Görev giriş inputunu seç
const addBtn = document.querySelector("#add-btn") // Ekle butonunu seç
const taskList = document.querySelector("#task-list") // Görev listesinin tutulduğu ul/ol elementini seç

window.addEventListener("load", () => { // Sayfa yüklendiğinde çalışacak
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [] // localStorage'dan görevleri al, yoksa boş dizi kullan
  savedTasks.forEach(taskText => { // Her görev için döngü
    const li = document.createElement("li") // Yeni li elemanı oluştur
    li.innerHTML = `<span>${taskText}</span><button>x</button>` // Görev metni ve sil butonu ekle
    li.addEventListener("click", (e) => { // Her li için tıklama olayı
      if (e.target.tagName === "SPAN") { // Eğer span'a tıklandıysa (görev metni)
        li.classList.toggle("completed") // Tamamlandı sınıfını ekle/kaldır
      }
      if (e.target.tagName === "BUTTON") { // Eğer butona tıklandıysa
        li.remove() // li'yi kaldır
        updateLocalStorage() // localStorage'ı güncelle
      }
    })
    taskList.appendChild(li) // li'yi listeye ekle
  })
})

function updateLocalStorage() { // localStorage'ı güncelleyen fonksiyon
  const tasks = [] // Yeni bir görev listesi oluştur
  taskList.querySelectorAll("li span").forEach(span => { // Tüm görev span'lerini gez
    tasks.push(span.textContent) // Her span'in metnini diziye ekle
  })
  localStorage.setItem("tasks", JSON.stringify(tasks)) // Diziyi JSON'a çevirip kaydet
}

addBtn.addEventListener("click", () => { // Ekle butonuna tıklanınca çalışır
  const taskText = taskInput.value.trim() // Inputtan girilen metni al ve boşlukları temizle
  if (taskText === "") return // Boşsa işlem yapma
  const li = document.createElement("li") // Yeni li oluştur
  li.innerHTML = `<span>${taskText}</span><button>x</button>` // Görev ve sil butonunu ekle
  li.addEventListener("click", (e) => { // li'ye tıklama olayları tanımla
    if (e.target.tagName === "SPAN") { // Span'a tıklandıysa
      li.classList.toggle("completed") // Tamamlandı sınıfını ekle/kaldır
    }
    if (e.target.tagName === "BUTTON") { // Butona tıklandıysa
      li.remove() // li'yi kaldır
      updateLocalStorage() // localStorage'ı güncelle
    }
  })
  taskList.appendChild(li) // Yeni li'yi listeye ekle
  taskInput.value = "" // Input'u temizle
  updateLocalStorage() // localStorage'ı güncelle
})
