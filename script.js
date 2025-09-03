// Nome da escola
const escolaNome = "Escola Santa Dorotéia"; // <- altere aqui para o nome da sua escola

// Dados dos materiais (em formato JSON simulado)
const materiaisData = {
  maternal: {
    "Maternal I": {
      items: [
        { name: "Caderno de desenho grande", quantity: 2, price: 12.0 },
        { name: "Lápis de cor grossos (12 cores)", quantity: 1, price: 18.0 },
        { name: "Giz de cera grande", quantity: 1, price: 10.0 },
        { name: "Cola branca", quantity: 2, price: 5.0 },
        { name: "Tinta guache (6 cores)", quantity: 1, price: 22.0 },
      ],
      total: 67.0,
    },
    "Maternal II": {
      items: [
        { name: "Caderno de desenho grande", quantity: 2, price: 12.0 },
        { name: "Lápis de cor grossos (12 cores)", quantity: 1, price: 18.0 },
        { name: "Giz de cera grande", quantity: 1, price: 10.0 },
        { name: "Cola branca", quantity: 2, price: 5.0 },
        { name: "Tinta guache (6 cores)", quantity: 1, price: 22.0 },
        { name: "Pincéis para pintura", quantity: 2, price: 8.0 },
      ],
      total: 75.0,
    },
    "Maternal III": {
      items: [
        { name: "Caderno de desenho grande", quantity: 2, price: 12.0 },
        { name: "Lápis de cor grossos (12 cores)", quantity: 1, price: 18.0 },
        { name: "Giz de cera grande", quantity: 1, price: 10.0 },
        { name: "Cola branca", quantity: 2, price: 5.0 },
        { name: "Tinta guache (6 cores)", quantity: 1, price: 22.0 },
        { name: "Pincéis para pintura", quantity: 2, price: 8.0 },
      ],
      total: 75.0,
    },
  },
  infantil: {
    "Infantil I": {
      items: [
        { name: "Caderno de desenho grande", quantity: 2, price: 12.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Lápis preto HB", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Apontador com depósito", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 52.0,
    },
    "Infantil II": {
      items: [
        { name: "Caderno de desenho grande", quantity: 2, price: 12.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Lápis preto HB", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Apontador com depósito", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
        { name: "Cola branca", quantity: 2, price: 5.0 },
      ],
      total: 57.0,
    },
  },
  fundamental: {
    "1º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Apontador com depósito", quantity: 1, price: 5.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 69.0,
    },
    "2º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "2º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "4º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "5º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "6º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "7º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "8º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
    "9º Ano": {
      items: [
        { name: "Caderno universitário 96 folhas", quantity: 4, price: 12.0 },
        { name: "Lápis preto HB", quantity: 6, price: 12.0 },
        { name: "Caneta esferográfica azul", quantity: 4, price: 8.0 },
        { name: "Borracha branca", quantity: 2, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Lápis de cor (12 cores)", quantity: 1, price: 15.0 },
        { name: "Cola branca", quantity: 1, price: 5.0 },
        { name: "Tesoura sem ponta", quantity: 1, price: 9.0 },
      ],
      total: 68.0,
    },
  },
  medio: {
    "1º Ano": {
      items: [
        { name: "Caderno universitário 200 folhas", quantity: 4, price: 18.0 },
        { name: "Caneta esferográfica azul", quantity: 5, price: 10.0 },
        { name: "Caneta esferográfica preta", quantity: 3, price: 6.0 },
        { name: "Caneta esferográfica vermelha", quantity: 2, price: 4.0 },
        { name: "Lápis preto HB", quantity: 2, price: 4.0 },
        { name: "Borracha branca", quantity: 1, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Calculadora científica", quantity: 1, price: 45.0 },
      ],
      total: 94.0,
    },
    "2º Ano": {
      items: [
        { name: "Caderno universitário 200 folhas", quantity: 4, price: 18.0 },
        { name: "Caneta esferográfica azul", quantity: 5, price: 10.0 },
        { name: "Caneta esferográfica preta", quantity: 3, price: 6.0 },
        { name: "Caneta esferográfica vermelha", quantity: 2, price: 4.0 },
        { name: "Lápis preto HB", quantity: 2, price: 4.0 },
        { name: "Borracha branca", quantity: 1, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Calculadora científica", quantity: 1, price: 45.0 },
        { name: "Esquadro 45º", quantity: 1, price: 7.0 },
        { name: "Esquadro 60º", quantity: 1, price: 7.0 },
        { name: "Transferidor 180º", quantity: 1, price: 5.0 },
        { name: "Compasso", quantity: 1, price: 15.0 },
      ],
      total: 128.0,
    },
    "3º Ano": {
      items: [
        { name: "Caderno universitário 200 folhas", quantity: 4, price: 18.0 },
        { name: "Caneta esferográfica azul", quantity: 5, price: 10.0 },
        { name: "Caneta esferográfica preta", quantity: 3, price: 6.0 },
        { name: "Caneta esferográfica vermelha", quantity: 2, price: 4.0 },
        { name: "Lápis preto HB", quantity: 2, price: 4.0 },
        { name: "Borracha branca", quantity: 1, price: 3.0 },
        { name: "Régua 30 cm", quantity: 1, price: 4.0 },
        { name: "Calculadora científica", quantity: 1, price: 45.0 },
        { name: "Esquadro 45º", quantity: 1, price: 7.0 },
        { name: "Esquadro 60º", quantity: 1, price: 7.0 },
        { name: "Transferidor 180º", quantity: 1, price: 5.0 },
        { name: "Compasso", quantity: 1, price: 15.0 },
      ],
      total: 128.0,
    },
  },
};

// Elementos do DOM
const modalSeries = document.getElementById("modal-series");
const seriesList = document.getElementById("series-list");
const closeModal = document.querySelector(".close-modal");
const materiaisContainer = document.getElementById("materiais-container");
const materiaisTitle = document.getElementById("materiais-title");
const materiaisLista = document.getElementById("materiais-lista");
const totalValue = document.getElementById("total-value");
const btnVoltar = document.getElementById("btn-voltar");
const btnWhatsapp = document.getElementById("btn-whatsapp");

// Variáveis de controle
let currentNivel = "";
let currentSerie = "";

// Abrir modal ao clicar em um card de nível
document.querySelectorAll(".nivel-card").forEach((card) => {
  card.addEventListener("click", () => {
    currentNivel = card.getAttribute("data-nivel");
    openSeriesModal(currentNivel);
  });
});

// Fechar modal
closeModal.addEventListener("click", () => {
  modalSeries.style.display = "none";
});

// Fechar modal clicando fora
window.addEventListener("click", (e) => {
  if (e.target === modalSeries) {
    modalSeries.style.display = "none";
  }
});

// Botão voltar
btnVoltar.addEventListener("click", (e) => {
  e.preventDefault();
  materiaisContainer.style.display = "none";
});

// Função para abrir modal com as séries
function openSeriesModal(nivel) {
  seriesList.innerHTML = "";
  const series = Object.keys(materiaisData[nivel]);

  series.forEach((serie) => {
    const serieItem = document.createElement("div");
    serieItem.className = "serie-item";
    serieItem.textContent = serie;
    serieItem.addEventListener("click", () => {
      modalSeries.style.display = "none";
      showMateriais(nivel, serie);
    });
    seriesList.appendChild(serieItem);
  });

  modalSeries.style.display = "flex";
}

// Função para mostrar os materiais
function showMateriais(nivel, serie) {
  currentSerie = serie;
  materiaisTitle.textContent = `Materiais - ${serie} (${capitalizeFirstLetter(
    nivel
  )})`;

  materiaisLista.innerHTML = "";
  const materials = materiaisData[nivel][serie].items;

  materials.forEach((material) => {
    const materialItem = document.createElement("div");
    materialItem.className = "material-item";

    const materialInfo = document.createElement("div");
    materialInfo.className = "material-info";

    const materialQuantidade = document.createElement("span");
    materialQuantidade.className = "material-quantidade";
    materialQuantidade.textContent = `${material.quantity}x`;

    const materialName = document.createElement("span");
    materialName.className = "material-name";
    materialName.textContent = material.name;

    const materialPrice = document.createElement("span");
    materialPrice.className = "material-price";
    materialPrice.textContent = `R$ ${material.price.toFixed(2)}`;

    materialInfo.appendChild(materialQuantidade);
    materialInfo.appendChild(materialName);

    materialItem.appendChild(materialInfo);
    materialItem.appendChild(materialPrice);

    materiaisLista.appendChild(materialItem);
  });

  // Total
  const total = materiaisData[nivel][serie].total;
  totalValue.textContent = total.toFixed(2);

  // WhatsApp link (agora com nome da escola)
  const message = `Olá! Gostaria de encomendar os materiais escolares para a ${escolaNome}, ${serie} - ${capitalizeFirstLetter(
    nivel
  )}.`;
  btnWhatsapp.href = `https://wa.me/61999524848?text=${encodeURIComponent(
    message
  )}`;

  materiaisContainer.style.display = "block";
  materiaisContainer.scrollIntoView({ behavior: "smooth" });
}

// Função para capitalizar
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});