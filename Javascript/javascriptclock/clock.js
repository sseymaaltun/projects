const firstName = prompt('Adınız nedir?')

let greeting = document.querySelector('#myName')
greeting.innerHTML = `${firstName}`

function showTime() {
    const time = new Date() // new Date() ifadesi, JavaScript’te şu anki tarih ve saat bilgilerini taşıyan bir Date nesnesi oluşturur.time artık bu anlık tarih-saat bilgisini tutar.
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"] //Bu dizinin sıralaması JavaScript’in getDay() metoduna göre ayarlanmıştır. 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi
    const timeString = time.toLocaleTimeString("tr-TR") + " " + days[time.getDay()]

    document.querySelector('#myClock').innerHTML = timeString
}

showTime(); // Sayfa açıldığında bir kere göster
setInterval(showTime, 1000); // Her 1 saniyede bir tekrar göster (güncellenen saat için)