import { scheduleDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule.cancel.js"

const periods = document.querySelectorAll(".period")

// gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // captura o evento clicado na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // obtém o li pai do elemento clicado
      const item = event.target.closest("li")

      // pega o id do agendamento
      const { id } = item.dataset

      // confirma o que foi selecionado
      if (id) {
        //confirma se o usuário quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja excluír o agendamento?"
        )

        if (isConfirm) {
          // faz a requisição na api para cancelar
          await scheduleCancel({ id })

          // recarrega os agendamentos                                    
          scheduleDay()
        }
      }
    }
  })
})