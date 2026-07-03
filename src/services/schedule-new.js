import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {
    // faz a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, when })
    })

    // exibe mensagem de agendamento realizado
    alert("Agendamento realizado!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível criar o agendamento. Tente novamente mais tarde!.")
  }
}