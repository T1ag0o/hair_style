import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima para o agendamento
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()
    
    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    // Recuperando o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")

    // Recupera o horário selecionado
    if (!hourSelected) {
      return alert("Selecione a hora")
    }

    // recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // insere a hora na data
    const  when = dayjs(selectedDate.value).add(hour, "hour")

    // gera um ID
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when
    })

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }
}