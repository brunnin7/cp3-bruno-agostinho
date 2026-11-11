/* CP3 - Interatividade e persistência com localStorage */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    configurarObjetivos();
    configurarFormulario();
    desenharCanvas();
});

function configurarObjetivos() {
    const form = document.getElementById("form-objetivo");
    const lista = document.getElementById("lista-objetivos");
    const campo = document.getElementById("novo-objetivo");
    const feedback = document.getElementById("feedback-objetivo");

    if (!form || !lista || !campo) return;

    const CHAVE = "bruno_cp3_objetivos";
    let objetivos = [];

    try {
        objetivos = JSON.parse(localStorage.getItem(CHAVE)) || [];
        if (!Array.isArray(objetivos)) objetivos = [];
    } catch (erro) {
        objetivos = [];
    }

    function salvar() {
        localStorage.setItem(CHAVE, JSON.stringify(objetivos));
    }

    function renderizar() {
        lista.replaceChildren();

        if (objetivos.length === 0) {
            const vazio = document.createElement("li");
            vazio.className = "mensagem-vazia";
            vazio.textContent = "Nenhum objetivo cadastrado ainda.";
            lista.appendChild(vazio);
            return;
        }

        objetivos.forEach((objetivo, indice) => {
            const item = document.createElement("li");
            item.className = "item-objetivo";

            const texto = document.createElement("span");
            texto.textContent = objetivo.texto;
            if (objetivo.concluido) texto.classList.add("objetivo-concluido");

            const concluir = document.createElement("button");
            concluir.type = "button";
            concluir.className = "botao-secundario";
            concluir.textContent = objetivo.concluido ? "Desmarcar" : "Concluir";
            concluir.setAttribute("aria-label", `${concluir.textContent}: ${objetivo.texto}`);
            concluir.addEventListener("click", () => {
                objetivos[indice].concluido = !objetivos[indice].concluido;
                salvar();
                renderizar();
            });

            const remover = document.createElement("button");
            remover.type = "button";
            remover.className = "botao-remover";
            remover.textContent = "Excluir";
            remover.setAttribute("aria-label", `Excluir: ${objetivo.texto}`);
            remover.addEventListener("click", () => {
                objetivos.splice(indice, 1);
                salvar();
                renderizar();
                feedback.textContent = "Objetivo removido.";
            });

            item.append(texto, concluir, remover);
            lista.appendChild(item);
        });
    }

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const texto = campo.value.trim();

        if (texto.length < 3) {
            feedback.textContent = "Digite um objetivo com pelo menos 3 caracteres.";
            campo.focus();
            return;
        }

        objetivos.push({ texto, concluido: false });
        salvar();
        renderizar();
        campo.value = "";
        feedback.textContent = "Objetivo adicionado e salvo neste navegador!";
        campo.focus();
    });

    renderizar();
}

function configurarFormulario() {
    const form = document.getElementById("form-contato");
    const feedback = document.getElementById("feedback-formulario");
    if (!form || !feedback) return;

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            feedback.textContent = "Confira os campos destacados e tente novamente.";
            feedback.className = "feedback erro";
            return;
        }

        feedback.textContent = "Formulário validado com sucesso! Esta é uma demonstração acadêmica: os dados não são enviados nem armazenados.";
        feedback.className = "feedback sucesso";
        form.reset();
    });

    form.addEventListener("input", () => {
        feedback.textContent = "";
        feedback.className = "feedback";
    });
}

function desenharCanvas() {
    const canvas = document.getElementById("desenho");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#2563eb";
    ctx.fillRect(40, 50, 160, 90);

    ctx.beginPath();
    ctx.arc(340, 95, 55, 0, Math.PI * 2);
    ctx.fillStyle = "#16a34a";
    ctx.fill();

    ctx.font = "18px Arial";
    ctx.fillStyle = "#0f172a";
    ctx.fillText("Canvas HTML5", 180, 205);
}
