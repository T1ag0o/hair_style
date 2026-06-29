import { hoursLoad } from "../form/hour-load.js"

// Seleciona o input data
const selectedDate = document.getElementById("date")
export function scheduleDay() {
  //obtem a data do input
  const date = selectedDate.value

  //renderiza as horas dispóníveis
  hoursLoad({ date })
}