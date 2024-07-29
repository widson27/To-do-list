import { Tarefa } from "./TipoTarefa";

let tarefas: Tarefa[] = JSON.parse(localStorage.getItem('tarefas') || '[]');

export function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
