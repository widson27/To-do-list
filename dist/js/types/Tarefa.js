let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
export function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
