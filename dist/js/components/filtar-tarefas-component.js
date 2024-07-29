const btnMais = document.querySelector(".button-more");
const btnMostarConcluidas = document.querySelector('#btn-mostrar-concluidas');
const btnMostrarPendentes = document.querySelector('#btn-mostrar-pendentes');
const btnMostrarTodas = document.querySelector('#btn-mostrar-todas');
btnMais.addEventListener('click', () => {
    const menuFiltrar = document.querySelector('.cabecalho-tarefas-hidden__ul');
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
