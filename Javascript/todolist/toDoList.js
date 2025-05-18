document.addEventListener("DOMContentLoaded", function () { // Sayfa yüklendiğinde çalışacak ana fonksiyon
    const list = document.querySelector("#list"); // Yapılacaklar listesini temsil eden <ul> elementi
    const input = document.querySelector("#task"); // Kullanıcının yazı girdiği <input> elementi

    // LocalStorage'da "tasks" adında veri var mı kontrol edilir
    if (!localStorage.getItem("tasks")) {
        const initialTasks = []; // Eğer yoksa, ilk görevleri tutacak dizi oluşturulur
        const items = list.getElementsByTagName("li"); // HTML'de önceden tanımlı <li> öğeleri alınır

        for (let index = 0; index < items.length; index++) { 
            // Her bir <li> öğesi için döngü
            initialTasks.push({
                text: items[index].textContent.trim(), // <li> içindeki metin alınır. trim() stringin başındaki ve sonundaki boşlukları siler
                completed: items[index].classList.contains("checked") // Eğer yapılmışsa (checked) bilgisi de alınır
            });
        }

        localStorage.setItem("tasks", JSON.stringify(initialTasks)); // İlk görevler localStorage’a JSON formatında kaydedilir. JSON.stringify(...) fonksiyonu, bir JavaScript nesnesini (örneğin bir dizi ya da object) JSON formatında bir string'e çevirir.
    }

    list.innerHTML = ""; // HTML’deki mevcut <li> öğeleri temizlenir (yeniden yazılmak üzere)

    loadTasksFromStorage(); // localStorage’dan görevleri çekip sayfaya yükleyen fonksiyon çağrılır

    list.addEventListener("click", function (e) { // Listeye tıklanma olayları dinlenir
        if (e.target.tagName === "LI") { // Eğer tıklanan öğe bir <li> ise
            e.target.classList.toggle("checked"); // checked (tamamlandı) sınıfı eklenir ya da kaldırılır
            updateStorage(); // Değişiklikleri localStorage’a kaydet
        } else if (e.target.classList.contains("close")) { // Eğer tıklanan öğe bir "close" butonuysa
            e.target.parentElement.remove(); // İlgili <li> silinir
            updateStorage(); // Değişiklikler localStorage’a kaydedilir
        }
    });

    document.querySelector("#liveToastBtn").addEventListener("click", newElement); // "Ekle" butonuna tıklanınca görev ekleme fonksiyonu çalışır

    function newElement() { // Yeni bir görev ekleme fonksiyonu
        const inputValue = input.value.trim(); // Giriş alanındaki değer alınır ve boşluklar temizlenir

        if (inputValue === "") { // Eğer giriş boşsa
            showToast("error"); // Hata bildirimi gösterilir
        } else {
            const li = document.createElement("li"); // Yeni bir <li> oluşturulur
            li.textContent = inputValue; // Görev metni olarak kullanıcı girdisi yazılır
            addCloseButton(li); // Silme butonu eklenir
            list.appendChild(li); // <li> listeye eklenir
            showToast("success"); // Başarı bildirimi gösterilir
            input.value = ""; // Giriş kutusu temizlenir
            updateStorage(); // Yeni görev localStorage’a eklenir
        }
    }

    function addCloseButton(li) { // Her <li> öğesi için silme butonu (×) ekleyen fonksiyon
        const span = document.createElement("span"); // <span> elementi oluşturulur
        span.textContent = "×"; // Buton içeriği çarpı işareti
        span.className = "close"; // CSS için class eklenir
        li.appendChild(span); // <span>, <li> öğesinin içine eklenir
    }

    function showToast(type) { // Bootstrap toast bildirimlerini gösteren fonksiyon
        const toastClass = type === "success" ? "success" : "error"; // Türüne göre toast sınıfı belirlenir
        const toast = document.querySelector(`.toast.${toastClass}`); // İlgili toast HTML'den seçilir
        if (toast) {
            const bsToast = new bootstrap.Toast(toast); // Bootstrap toast nesnesi oluşturulur
            bsToast.show(); // Gösterilir
        }
    }

    function updateStorage() { // Listeyi alıp localStorage’a kaydeden fonksiyon
        const tasks = []; // Görevleri tutacak dizi
        const items = list.getElementsByTagName("li"); // Mevcut tüm <li> öğeleri alınır

        for (let i = 0; i < items.length; i++) { // Her biri için döngü
            tasks.push({
                text: items[i].childNodes[0].nodeValue, // İlk çocuk (metin) alınır
                completed: items[i].classList.contains("checked") // Tamamlandı mı kontrol edilir
            });
        }

        localStorage.setItem("tasks", JSON.stringify(tasks)); // localStorage’a kaydedilir
    }

    function loadTasksFromStorage() { // Sayfa ilk açıldığında localStorage’daki görevleri yükleyen fonksiyon
        const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Kaydedilmiş görevler alınır

        tasks.forEach(task => { // Her görev için
            const li = document.createElement("li"); // Yeni bir <li> oluşturulur
            li.textContent = task.text; // Metni yerleştirilir

            if (task.completed) { // Eğer yapılmışsa
                li.classList.add("checked"); // "checked" sınıfı eklenir
            }

            addCloseButton(li); // Silme butonu eklenir
            list.appendChild(li); // Listeye eklenir
        });
    }
});