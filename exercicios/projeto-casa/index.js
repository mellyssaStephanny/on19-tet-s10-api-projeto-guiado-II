const express = require('express')
const app = express()
const port = 3000

app.use(express.json)
// Criar os clientes do banco
// Atualizar informações desses clientes ( como endereço, telefone de contato...)
// Fazer depósitos / pagamentos usando o saldo de sua conta
// Encerrar contas de clientes
// Conseguir Filtrar os clientes do banco pelo seu nome,por saldo...

app.listen(port, () => {
  console.log('API is ON, baby!!')
})
