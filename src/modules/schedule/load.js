import { scheduleFetchByDay } from "../../services/schedule-fatch-by-day.js"
import { hoursLoad } from "../form/hour-load.js"
import { schedulesShow } from "./show.js"

// Seleciona o input data
const selectedDate = document.getElementById("date")
export async function scheduleDay() {
  //obtem a data do input
  const date = selectedDate.value

  // busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // exibe os agendamentos
  schedulesShow({ dailySchedules })

  //renderiza as horas dispóníveis
  hoursLoad({ date, dailySchedules })
}