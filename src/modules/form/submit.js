import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima para o agendamento
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  event.preventDefault()

  console.log("ENVIADO!")
}