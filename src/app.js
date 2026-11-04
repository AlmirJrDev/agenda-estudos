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
});
