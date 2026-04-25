<script>
  async function converter() {
    const valor = document.getElementById('amount').value;
    const deMoeda = document.getElementById('fromCurrency').value;
    const paraMoeda = document.getElementById('toCurrency').value;
    const resultadoDiv = document.getElementById('result');

    // Validação básica
    if (!valor || valor <= 0) {
      resultadoDiv.className = "alert alert-danger py-2 small";
      resultadoDiv.innerText = "Por favor, insira um valor.";
      return;
    }

    // Se as moedas forem iguais
    if (deMoeda === paraMoeda) {
      resultadoDiv.className = "alert alert-info py-2 small";
      resultadoDiv.innerText = `${valor} ${deMoeda} = ${valor} ${paraMoeda}`;
      return;
    }

    resultadoDiv.innerText = "Buscando cotação...";

    try {
      // API AwesomeAPI - Busca o par selecionado
      const response = await fetch(`https://awesomeapi.com.br{deMoeda}-${paraMoeda}`);
      const data = await response.json();
      
      // A chave do JSON vem como "USDBRL", "EURUSD", etc.
      const par = deMoeda + paraMoeda;
      const cotacao = data[par].bid;
      
      const total = (valor * cotacao).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

      resultadoDiv.className = "alert alert-success py-2 small";
      resultadoDiv.innerText = `${valor} ${deMoeda} = ${total} ${paraMoeda}`;
      
    } catch (error) {
      resultadoDiv.className = "alert alert-danger py-2 small";
      resultadoDiv.innerText = "Conversão indisponível para este par.";
      console.error("Erro na API:", error);
    }
  }
</script>
