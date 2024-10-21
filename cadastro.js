const button = document.getElementById("add");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const table = document.querySelector("table");
const formButton = form.lastElementChild;

button.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.add("hidden");
    inputs[0].focus();
});

formButton.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let HTML = `<tr>`;

    inputs.forEach(e => {
        let value = e.value;

        if (e.name === "cpf") {
            value = formatCPF(value);
        }

        if (e.type === "date") {
            value = e.value
                ? e.valueAsDate.toLocaleDateString("pt-BR", { timeZone: "UTC" })
                : "-";
        }

        HTML += `<td>${value}</td>`;
        e.value = "";
    });

    HTML += `</tr>`;

    const tableBody = table.children.item(1);
    tableBody.innerHTML += HTML;
});

function formatCPF(cpf) {
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");

    //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}