const button = document.getElementById("add");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const table = document.querySelector("table");
const formButton = document.querySelector("form button");

button.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.add("hidden");
});

formButton.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let HTML = "";
    HTML += `<tr>`;

    inputs.forEach(e => {
        HTML += `<td>${e.value}</td>`;

        // Deixar usuário não preencher campo?
        // Se sim e.value ? e.value : "-"

        e.value = "";
    });

    HTML += `</tr>`;

    const tableBody = table.children.item(1);
    tableBody.innerHTML += HTML;
});