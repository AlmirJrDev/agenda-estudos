// Tarefas ficam salvas no navegador
function carregarTarefas() {
  return JSON.parse(localStorage.getItem("agenda-tarefas") || "[]");
}

function salvarTarefas(tarefas) {
  localStorage.setItem("agenda-tarefas", JSON.stringify(tarefas));
}
