// tabs start
let tabImgs = document.querySelectorAll('.tab_img img')
let tabNames = document.querySelectorAll('.about_text')
let tabInfos = document.querySelectorAll('.info_text')
let tabLinks = document.querySelector('.tab_links')
let tablink = document.querySelectorAll('.tab_link')
function hideAll() {
   tabImgs.forEach((tabImg) =>{
      tabImg.classList.remove('active')
   })
   tabNames.forEach((tabName) => {
      tabName.classList.remove('active')
   })
   tabInfos.forEach((tabinfo) => {
      tabinfo.classList.remove('active')
   })
   tablink.forEach((tbLink) =>{
      tbLink.classList.remove('active')
   })

}
function showAll(i = 0) {
   tabImgs[i].classList.add('active')
   tabNames[i].classList.add('active')
   tabInfos[i].classList.add('active')
   tablink[i].classList.add('active')
}
tabLinks.addEventListener('click', (e)=>[
   tablink.forEach((item, i) =>{
      if(e.target === item){
         hideAll()
         showAll(i)
      }
   })
])
hideAll()
showAll()
//tabs end

// timer start
let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let day = document.querySelector('.day_time'),
   hour = document.querySelector('.hours_time'),
   minute = document.querySelector('.minutes_time'),
   second = document.querySelector('.seconds_time')
let deadline = '2023-07-22T18:00:00Z'
let now = new Date()
let res = now.getTimezoneOffset() / 60
let result = Math.abs(res)
function getTimerData(dl) {
   let t = Date.parse(new Date(dl)) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60)

   if (t < 0) {
      t = 0
      days = 0
      hours = 0
      minutes = 0
      seconds = 0
   }

   return {
      t, days, hours, minutes, seconds
   }
}

function startTimer(dl, parentClass) {
   let parentEl = document.querySelector(`.${parentClass}`),
      daysEl = parentEl.querySelector('.day_time'),
      hoursEl = parentEl.querySelector('.hours_time'),
      minutesEl = parentEl.querySelector('.minutes_time'),
      secondsEl = parentEl.querySelector('.seconds_time')

   let timerId = setInterval(updateTimer, 1000)
   function updateTimer() {
      let timer = getTimerData(dl)

      daysEl.innerText = addZero(timer.days)
      hoursEl.innerText = addZero(timer.hours - 3)
      minutesEl.innerText = addZero(timer.minutes)
      secondsEl.innerText = addZero(timer.seconds)
      if (timer.t < 0) {
         clearInterval(timerId)
      }
      if (day.innerText == 0) {
         days.style.display = "none"
      }
      if (hour.innerText == 0 && day.innerText == 0) {
         hours.style.display = "none"
      } if (minute.innerText == 0 && hour.innerText == 0 && day.innerText == 0) {
         minutes.style.display = "none"
      } if (second.innerText == 0 && minute.innerText == 0 && hour.innerText == 0 && day.innerText == 0) {
         seconds.style.display = "none"
      }
   }

   updateTimer()
}

function addZero(num) {
   if (num >= 0 && num < 10) {
      return `0${num}`
   } else {
      return num
   }
}
startTimer(deadline, 'timer')
//timer end

// slider start
let slideCount = 0;
let leftBtn = document.querySelector('.btn__prev')
let rightBtn = document.querySelector('.btn__next')
let sliderMenu = document.querySelectorAll('.slider__one')
rightBtn.addEventListener('click', () => {
   if (slideCount <= 0) {
      slideCount = sliderMenu.length - 1
   } else {
      slideCount--
   }
   hideSlide()
   showHide(slideCount)
})

leftBtn.addEventListener('click', () => {
   if (slideCount > sliderMenu.length - 2) {
      slideCount = 0
   } else {
      slideCount++
   }
   hideSlide()
   showHide(slideCount)
})
function hideSlide() {
   sliderMenu.forEach((menuSlide)=>{
      menuSlide.classList.remove('active')
   })
}
function showHide(i = 0) {
   sliderMenu[i].classList.add('active')
}


