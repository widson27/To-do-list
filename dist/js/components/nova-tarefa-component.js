import { atualizarTarefas } from "../types/Tarefa.js";
const btnAdicionarTarefa = document.querySelector(".button-add-task");
const formAdicionarTarefa = document.querySelector('.form-add-task');
const textarea = document.querySelector(".form-textarea");
const listaTarefas = document.querySelector('.list-tasks');
const btnCancelar = document.querySelector(".form-footer__button--cancel");
const btnDeletar = document.querySelector(".form-footer__button--delete");
const btnRemoverTodas = document.querySelector('#btn-remover-todas');
const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas');

let tarefaSelecionada = null;
function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('task', 'pending');
    if (tarefa.concluida) {
        li.classList.add('done');
    }
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = tarefa.concluida;
    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;
    const botaoEditar = document.createElement('button');
    botaoEditar.classList.add('button-edit');
    const imagemBotaoEditar = document.createElement('img');
    imagemBotaoEditar.setAttribute('src', '../img/edit.png');
    botaoEditar.append(imagemBotaoEditar);
    const botaoApagar = document.createElement('button');
    botaoApagar.classList.add('button-delete');
    const imagemBotaoApagar = document.createElement('img');
    imagemBotaoApagar.setAttribute('src', '../img/lixeira.svg');
    botaoApagar.append(imagemBotaoApagar);
    const div = document.createElement('div');
    div.classList.add('botoes');
    div.append(botaoApagar, botaoEditar);
    li.append(checkBox);
    li.append(paragrafo);
    li.append(div);
    const atualizarEstadoBotaoEditar = () => {
        botaoEditar.disabled = tarefa.concluida;
    };
    atualizarEstadoBotaoEditar();
    checkBox.onclick = () => {
        tarefa.concluida = !tarefa.concluida;
        li.classList.toggle('done');
        li.classList.toggle('pending');
        atualizarEstadoBotaoEditar();
        atualizarTarefas();
    };
    botaoEditar.onclick = () => {
        const novaDescricao = prompt("Qual é o novo nome da tarefa?");
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao;
            tarefa.descricao = novaDescricao;
            atualizarTarefas();
        }
    };
    botaoApagar.onclick = () => {
        tarefas = tarefas.filter(t => t !== tarefa);
        li.remove();
        atualizarTarefas();
    };
    li.onclick = () => {
        document.querySelectorAll('.task-select').forEach(elemento => {
            elemento.classList.remove('task-select');
        });
        if (tarefaSelecionada === tarefa) {
            tarefaSelecionada = null;
            return;
        }
        tarefaSelecionada = tarefa;
        li.classList.add('task-select');
    };
    return li;
}
btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');
});
btnCancelar.addEventListener('click', () => {
    textarea.value = "";
    formAdicionarTarefa.classList.add('hidden');
});
btnDeletar.addEventListener('click', () => {
    textarea.value = "";
});
formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value,
        concluida: false
    };
    tarefas.push(tarefa);
    const elementoTarefa = criarElementoTarefa(tarefa);
    listaTarefas.append(elementoTarefa);
    atualizarTarefas();
    textarea.value = '';
    formAdicionarTarefa.classList.add('hidden');
});
tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    listaTarefas.append(elementoTarefa);
});
const removerTarefas = (somenteCompletas) => {
    const seletor = somenteCompletas ? '.done' : '.task';
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove();
    });
    tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.concluida) : [];
    document.querySelector('.cabecalho-tarefas-hidden__ul').classList.toggle('cabecalho-tarefas__ul');
    atualizarTarefas();
};
btnRemoverConcluidas.onclick = () => removerTarefas(true);
btnRemoverTodas.onclick = () => removerTarefas(false);