const saldo = 1300

const historico = [
    {tipo: "Entrada", valor: 500},
    {tipo: "Saída", valor: 200},
    {tipo: "Entrada", valor: 1000},
    {tipo: "Saída", valor: 300},
]

document.getElementById("saldo").innerText = `R$ ${saldo.toFixed(2)}`;

const historicoList = document.getElementById("historico-list");

historico.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = `${item.tipo}: R$ ${item.valor.toFixed(2)}`;
    historicoList.appendChild(li);
});