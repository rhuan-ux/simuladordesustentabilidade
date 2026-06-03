/**
 * ECOAÇÃO RURAL - SIMULADOR ESG (CONCURSO AGRINHO 2026)
 * Lógica de Negócio, Validação Estrita de Dados e Renderização Dinâmica de UI
 */

// 1. Captura de elementos da interface utilizando document.querySelector
const formulario = document.querySelector('#simulador-form');
const containerErro = document.querySelector('#container-erro');
const containerResultado = document.querySelector('#resultado-diagnostico');
const scorePontuacao = document.querySelector('#score-pontuacao');
const seloStatus = document.querySelector('#selo-status');
const listaCursos = document.querySelector('#lista-cursos');

// 2. Adição do Escutador de Eventos (Event Listener) para o envio do formulário
formulario.addEventListener('submit', function (event) {
    // Evita o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    // Ocultar resultados e erros anteriores para uma nova validação
    esconderMensagens();

    // Captura e conversão dos valores digitados nos inputs numéricos
    const dados = {
        residuos: parseFloat(document.querySelector('#residuos
