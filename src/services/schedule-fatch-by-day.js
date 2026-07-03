import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  try {
    // faz a requisilção
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    // converte para JSON
    const data = await response.json()

    // filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day")
    })

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado")
  }
}