const btnMais = document.querySelector(".button-more") as HTMLButtonElement;

const btnMostarConcluidas = document.querySelector('#btn-mostrar-concluidas') as HTMLButtonElement;
const btnMostrarPendentes = document.querySelector('#btn-mostrar-pendentes') as HTMLButtonElement;
const btnMostrarTodas = document.querySelector('#btn-mostrar-todas') as HTMLButtonElement;

btnMais.addEventListener('click', () => {
    const menuFiltrar = document.querySelector('.cabecalho-tarefas-hidden__ul') as HTMLUListElement;
    menuFiltrar.classList.toggle('cabecalho-tarefas__ul');
});

function filtrarCompletas() {
    const tarefasCompletas = document.querySelectorAll('.task.done');
    document.querySelectorAll('.task').forEach(elemento => {
        elemento.classList.add('hidden');
        tarefasCompletas.forEach(elemento => {
            elemento.classList.remove('hidden');
        });
    });
    document.querySelector('.cabecalho-tarefas-hidden__ul').classList.toggle('cabecalho-tarefas__ul');
}

function filtrarPendentes() {
    const tarefasPendentes = document.querySelectorAll('.task.pending');
    document.querySelectorAll('.task').forEach(elemento => {
        elemento.classList.add('hidden');
        tarefasPendentes.forEach(elemento => {
            elemento.classList.remove('hidden');
        });
    });
    document.querySelector('.cabecalho-tarefas-hidden__ul').classList.toggle('cabecalho-tarefas__ul');
}

btnMostarConcluidas.onclick = () => filtrarCompletas();
btnMostrarPendentes.onclick = () => filtrarPendentes();
btnMostrarTodas.onclick = () => {
    document.querySelectorAll('.task').forEach(elemento => {
        elemento.classList.remove('hidden');
    });
    document.querySelector('.cabecalho-tarefas-hidden__ul').classList.toggle('cabecalho-tarefas__ul');
};


