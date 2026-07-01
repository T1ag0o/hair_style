import { scheduleDay } from "../schedule/load.js"

// seleciona o input de data
const selectedDate = document.getElementById("date")

// recarrega a lista de horários quando o input de data mudar
selectedDate.onchange = () => scheduleDay()