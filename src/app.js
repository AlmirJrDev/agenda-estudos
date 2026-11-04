// Tarefas ficam salvas no navegador
function carregarTarefas() {
  return JSON.parse(localStorage.getItem("agenda-tarefas") || "[]");
}

function salvarTarefas(tarefas) {
  localStorage.setItem("agenda-tarefas", JSON.stringify(tarefas));
}

// Preenche as opções de um select a partir do config.js
function preencherOpcoes(id, opcoes) {
  const select = document.getElementById(id);
  opcoes.forEach((opcao) => select.add(new Option(opcao, opcao)));
}

preencherOpcoes("materia", MATERIAS);
preencherOpcoes("tipo", TIPOS);

// Converte 2026-11-03 em 03/11/2026
function formatarData(iso) {
  return iso.split("-").reverse().join("/");
}

// Lista as tarefas pela data de entrega, a mais próxima primeiro (RF02)
function mostrarTarefas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  carregarTarefas()
    .sort((a, b) => a.entrega.localeCompare(b.entrega))
    .forEach((tarefa) => {
      const linha = lista.insertRow();
      [formatarData(tarefa.entrega), tarefa.materia, tarefa.tipo, tarefa.descricao]
        .forEach((valor) => { linha.insertCell().textContent = valor; });

      // Botão para concluir ou reabrir a tarefa (RF03)
      if (tarefa.concluida) linha.className = "concluida";
      const botao = document.createElement("button");
      botao.textContent = tarefa.concluida ? "Reabrir" : "Concluir";
      botao.addEventListener("click", () => alternarConclusao(tarefa.id));
      linha.insertCell().append(botao);
    });
}

function alternarConclusao(id) {
  const tarefas = carregarTarefas();
  const tarefa = tarefas.find((t) => t.id === id);
  tarefa.concluida = !tarefa.concluida;
  salvarTarefas(tarefas);
  mostrarTarefas();
}

mostrarTarefas();

// Cadastro de tarefa (RF01)
document.getElementById("form-tarefa").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefas = carregarTarefas();
  tarefas.push({
    id: Date.now(),
    materia: document.getElementById("materia").value,
    tipo: document.getElementById("tipo").value,
    descricao: document.getElementById("descricao").value,
    entrega: document.getElementById("entrega").value,
    concluida: false,
  });
  salvarTarefas(tarefas);
  evento.target.reset();
  document.getElementById("aviso").textContent = "Tarefa salva!";
  mostrarTarefas();
});
