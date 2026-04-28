let saldo = parseFloat(localStorage.getItem("saldo")) || 800;

let historico = [
  { tipo: "Entrada", valor: 500 },
  { tipo: "Saída", valor: 200 },
  { tipo: "Entrada", valor: 1000 },
  { tipo: "Saída", valor: 300 }
];

const saldoEl = document.getElementById("saldo");
const historicoList = document.getElementById("historico-list");
const resultado = document.getElementById("resultado");


function formatarValor(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


function atualizarSaldo() {
  saldoEl.innerText = `Saldo: ${formatarValor(saldo)}`;
}


function renderHistorico() {
  historicoList.innerHTML = "";

  historico.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    li.innerText = `${item.tipo}: ${formatarValor(item.valor)}`;

    historicoList.appendChild(li);
  });
}

function realizarTransferencia() {
  const destinatario = document.getElementById("destinatario").value;
  const valor = parseFloat(document.getElementById("valor").value);

 isNaN(valor)  if (!destinatario || isNaN(valor) || valor <= 0) {
    resultado.innerHTML = `<div class="alert alert-danger">Por favor, preencha todos os campos corretamente.</div>`;
    return;
  }

  if (valor > saldo) {
    resultado.innerHTML = `<div class="alert alert-danger">Saldo insuficiente.</div>`;
    return;
  }

  saldo -= valor;

  localStorage.setItem("saldo", saldo);

  historico.push({
    tipo: `Transferência para ${destinatario}`,
    valor: valor
  });

  resultado.innerHTML = `<div class="alert alert-success">Transferência realizada com sucesso!</div>`;

  atualizarSaldo();
  renderHistorico();

  document.getElementById("transferencia-form").reset();
}

atualizarSaldo();
renderHistorico();