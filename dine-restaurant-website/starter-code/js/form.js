let prev = document.querySelector('.minus')
let next = document.querySelector('.plus')
let counter = document.querySelector('.counter span')
let count = 0
prev.addEventListener('click', ()=>{
   if(counter.innerHTML <= 1){
      alert('Eng kami 1 kishilik zakarlar qabul qilinadi')
      counter.innerHTML = 1
      count = 1
   }
   else{
      counter.innerHTML--
      count = counter.innerHTML
   }
})
next.addEventListener('click', ()=>{
   counter.innerHTML++
   count = counter.innerHTML
})
let nameStatus = false, 
   emailStatus = false,
   monthStatus = false,
   dayStatus = false,
   yearStatus = false
let month = document.querySelector('#month')
for (let i = 1; i <= 12; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${ i }`
   } else {
      op.text = i
   }
   op.value = i
   month.appendChild(op)
   }

let year = document.querySelector('#year')
let day = document.querySelector('#day')
for (let i = 1; i <= 30; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${i}`
   } else {
      op.text = i
   }
   op.value = i
   day.appendChild(op)
}
let hoursSelect = document.querySelector('#hours')
for (let i = 1; i <= 12; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${i}`
   } else {
      op.text = i
   }
   op.value = i
   hoursSelect.appendChild(op)
}
let minutesSelect = document.querySelector('#minutes')
for (let i = 1; i <= 59; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${i}`
   } else {
      op.text = i
   }
   op.value = i
   minutesSelect.appendChild(op)
}
let {form} = document.forms
console.log(form);
let nameInp = document.querySelector("#name"),
   emailInp = document.querySelector("#email")
function showError(parentElement, msgElement, message) {
   msgElement.textContent = message
   parentElement.classList.add('error')
}

function hideError(parentElement, msgElement) {
   msgElement.textContent = ""
   parentElement.classList.remove('error')
}

for (let inp of form) {
   let { name } = inp
   if (name) {
      inp.addEventListener('input', validateInput)
   }
}
function validateInput(e) {
   let target = e.target
   let formGroup = target.parentElement
   let errorElement = target.nextElementSibling

   if (target.name === 'name') {
      if (target.value.length <= 2) {
         showError(formGroup, errorElement, 'This field is required')
         nameStatus = false
      } else {
         hideError(formGroup, errorElement)
         nameStatus = true
      }
   } else if (target.name === 'email') {
      if (!target.value.includes("@")) {
         showError(formGroup, errorElement, 'This field is required')
         emailStatus = false
      } else {
         hideError(formGroup, errorElement)
         emailStatus = true
      }
   }
}
let pickAdate = document.querySelector('.pick_a_date')
month.addEventListener('blur', ()=>{
   if(month.value == 0){
      pickAdate.nextElementSibling.innerText = 'this a requaset'
      pickAdate.nextElementSibling.style.color = 'red'
      monthStatus = false
   }
   else{
      monthStatus = true
      pickAdate.nextElementSibling.innerHTML = ''
   }
})
day.addEventListener('blur', () => {
   if (day.value == 0) {
      pickAdate.nextElementSibling.innerText = 'this a requaset'
      pickAdate.nextElementSibling.style.color = 'red'
      dayStatus = false
   }
   else {
      pickAdate.nextElementSibling.innerHTML = ''
      dayStatus = true
   }
})
year.addEventListener('blur', () => {
   if (year.value == 0) {
      pickAdate.nextElementSibling.innerText = 'this a requaset'
      pickAdate.nextElementSibling.style.color = 'red'
      yearStatus = false
   }
   else {
      pickAdate.nextElementSibling.innerHTML = ''
      yearStatus = true
   }
})
form.addEventListener('submit', (e) => {
   e.preventDefault()
   let formData = new FormData(form)
   let values = Object.fromEntries(formData.entries())
   if(nameStatus && emailStatus && monthStatus && dayStatus && yearStatus){
      let userDate = {
         name: nameInp.value,
         email: emailInp.value,
         day: day.value,
         month: month.value,
         year: year.value,
         hour: hoursSelect.value,
         minute: minutesSelect.value,
         count: count
      }
      console.log(userDate)
   }
   else{
      alert("to'ldirish zarur")
   }
})