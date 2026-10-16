document.addEventListener("DOMContentLoaded", () => {
  // 1. Processador Algorítmico do Módulo Computacional (Projeção de Gols)
  const btnProcessar = document.getElementById("calc-trigger");
  const inputPartidas = document.getElementById("matches-qty");

  // Coeficientes reais ponderados com base no histórico recente de gols/partida
  const coeficientePedro = 0.68;
  const coeficienteArrascaeta = 0.28;

  const processarMetricas = () => {
    const quantidadePartidas = parseInt(inputPartidas.value);

    if (isNaN(quantidadePartidas) || quantidadePartidas <= 0) {
      alert(
        "Erro de validação: Insira uma quantidade inteira e positiva de partidas.",
      );
      return;
    }

    // Execução do cálculo analítico
    const expectativaPedro = (quantidadePartidas * coeficientePedro).toFixed(1);
    const expectativaArrascaeta = (
      quantidadePartidas * coeficienteArrascaeta
    ).toFixed(1);

    // Injeção de dados dinâmica nos elementos de saída do painel
    document.getElementById("val-pedro").textContent = expectativaPedro;
    document.getElementById("val-arrasca").textContent = expectativaArrascaeta;
  };

  // Escutas de eventos para o módulo calculador
  btnProcessar.addEventListener("click", processarMetricas);
  inputPartidas.addEventListener("keypress", (e) => {
    if (e.key === "Enter") processarMetricas();
  });

  // Inicialização assíncrona automática ao carregar a árvore DOM
  processarMetricas();

  // 2. Homologação e Validação do Formulário Sócio-Torcedor Nação
  const formNacao = document.getElementById("naoForm");
  const msgFeedback = document.getElementById("form-msg");

  formNacao.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputNome = document.getElementById("username").value.trim();
    const inputEmail = document.getElementById("useremail").value.trim();

    if (inputNome.length < 5) {
      msgFeedback.textContent =
        "Erro de sistema: O nome inserido deve possuir o sobrenome completo para homologação.";
      msgFeedback.style.color = "#ef4444";
      return;
    }

    // Sucesso simulado com modificação direta de classe ativa
    msgFeedback.textContent = `✓ Saudações Rubro-Negras, ${inputNome}! Sua solicitação de Sócio foi pré-aprovada com sucesso.`;
    msgFeedback.className = "feedback-msg sucesso";

    formNacao.reset();
  });
});
